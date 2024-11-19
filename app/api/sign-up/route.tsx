// app/api/contact/route.js
import { NextResponse } from 'next/server';
import { addToDatabase } from '../../lib/notion';

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, phoneNumber, school, intYear } = await request.json();

    // Add data to Notion database
    await addToDatabase(firstName, lastName, email, phoneNumber, school, intYear);

    return NextResponse.json({ status: 'success' }, { status: 200 });
  } catch (error) {
    console.error('Error saving data to Notion:', error);
    return NextResponse.json({ status: 'error' }, { status: 500 });
  }
}