// app/api/contact/route.js
import { NextResponse } from 'next/server';
import { addToDatabase } from '../../lib/notion';

export async function POST(req: { json: () => PromiseLike<{ firstName: string; lastName: string; email: string; phoneNumber: string; school: string; intYear: number; }> | { firstName: string; lastName: string; email: string; phoneNumber: string; school: string; intYear: number; }; }) {
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