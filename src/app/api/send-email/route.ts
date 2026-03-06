import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { to, subject, name, email, businessName, phone, message } = await request.json();

    // Validate required fields
    if (!to || !subject || !name || !email || !businessName || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create email body
    const emailBody = `
      <h2>New Website Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Business Name:</strong> ${businessName}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `;

    // For now, just return success
    // In production, integrate with your email service (SendGrid, Resend, etc.)
    console.log('Email request received:', { to, subject, name, email });

    return NextResponse.json(
      { success: true, message: 'Email request received successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email handling error:', error);
    return NextResponse.json(
      { error: 'Failed to process email request' },
      { status: 500 }
    );
  }
}
