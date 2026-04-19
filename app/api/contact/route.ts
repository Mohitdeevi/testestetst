import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    // Here you would typically send an email or store the message in a database
    // For this static site, we'll just log it to the console
    console.log('Contact form submission:', { name, email, message });

    return NextResponse.json({ message: 'Form submitted successfully.' }, { status: 200 });
  } catch (error) {
    console.error('Error handling contact form submission:', error);
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}