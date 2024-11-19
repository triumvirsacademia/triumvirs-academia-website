// app/api/contact/route.js
import { NextResponse } from 'next/server';
import { addToDatabase } from '../../lib/notion';

export async function POST(req: { json: () => PromiseLike<{ firstName: any; lastName: any; email: any; phoneNumber: any; school: any; intYear: any; }> | { firstName: any; lastName: any; email: any; phoneNumber: any; school: any; intYear: any; }; }) {
  console.log("received")
  try {
    const { firstName, lastName, email, phoneNumber, school, intYear } = await req.json();

    // Add data to Notion database
    await addToDatabase(firstName, lastName, email, phoneNumber, school, intYear);

    return NextResponse.json({ status: 'success' }, { status: 200 });
  } catch (error) {
    console.error('Error saving data to Notion:', error);
    return NextResponse.json({ status: 'error' }, { status: 500 });
  }
}