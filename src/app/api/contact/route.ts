import { NextResponse } from 'next/server';
import { Resend } from 'resend';

function escapeHtml(str: string) {
    if (!str) return '';
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

export async function POST(req: Request) {
    try {
        const { name, email, subject, message } = await req.json();

        // 1. Validation
        if (!name || !name.trim()) {
            return NextResponse.json({ error: 'Name is required' }, { status: 400 });
        }
        if (!email || !email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return NextResponse.json({ error: 'A valid email is required' }, { status: 400 });
        }
        if (!subject || !subject.trim()) {
            return NextResponse.json({ error: 'Subject is required' }, { status: 400 });
        }
        if (!message || !message.trim()) {
            return NextResponse.json({ error: 'Message is required' }, { status: 400 });
        }

        const resendApiKey = process.env.RESEND_API_KEY;
        const contactEmail = process.env.CONTACT_EMAIL || 'ayushofficaluse@gmail.com';

        if (!resendApiKey) {
            console.error('RESEND_API_KEY is not defined in environment variables.');
            return NextResponse.json({ error: 'Email service is not configured' }, { status: 500 });
        }

        const resend = new Resend(resendApiKey);

        const safeName = escapeHtml(name.trim());
        const safeEmail = escapeHtml(email.trim());
        const safeSubject = escapeHtml(subject.trim());
        const safeMessage = escapeHtml(message.trim()).replace(/\n/g, '<br />');

        // 2. Send email to owner (ayushofficaluse@gmail.com)
        // From onboarding@resend.dev is standard for testing/default domain.
        const ownerEmailResult = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: contactEmail,
            subject: `New Message: ${safeSubject}`,
            html: `
                <div style="font-family: sans-serif; padding: 24px; border: 1px solid #e5e7eb; border-radius: 12px; max-width: 600px; background-color: #ffffff; color: #1f2937;">
                    <h2 style="color: #111827; font-size: 20px; font-weight: 700; margin-bottom: 16px; border-bottom: 1px solid #e5e7eb; padding-bottom: 12px;">
                        New Contact Form Submission
                    </h2>
                    <p style="margin: 8px 0;"><strong style="color: #4b5563;">Name:</strong> ${safeName}</p>
                    <p style="margin: 8px 0;"><strong style="color: #4b5563;">Email:</strong> <a href="mailto:${safeEmail}" style="color: #2563eb; text-decoration: none;">${safeEmail}</a></p>
                    <p style="margin: 8px 0;"><strong style="color: #4b5563;">Subject:</strong> ${safeSubject}</p>
                    <div style="margin-top: 20px; padding: 16px; background-color: #f9fafb; border-radius: 8px; border-left: 4px solid #10b981;">
                        <p style="margin: 0; font-weight: 600; color: #4b5563; margin-bottom: 8px;">Message:</p>
                        <p style="margin: 0; line-height: 1.6; color: #374151; white-space: pre-wrap;">${safeMessage}</p>
                    </div>
                </div>
            `,
        });

        if (ownerEmailResult.error) {
            console.error('Resend Owner Email Error:', ownerEmailResult.error);
            return NextResponse.json({ error: ownerEmailResult.error.message }, { status: 500 });
        }

        // 3. Send thank you email to visitor
        // Wrap in a try-catch so that sandbox restrictions on unverified emails don't break the main submission.
        try {
            const visitorResult = await resend.emails.send({
                from: 'Ayush Singh <onboarding@resend.dev>',
                to: safeEmail,
                subject: 'Thank you for contacting me!',
                html: `
                    <div style="font-family: sans-serif; padding: 24px; border: 1px solid #e5e7eb; border-radius: 12px; max-width: 600px; background-color: #ffffff; color: #1f2937;">
                        <h2 style="color: #111827; font-size: 20px; font-weight: 700; margin-bottom: 16px; border-bottom: 1px solid #e5e7eb; padding-bottom: 12px;">
                            Thank you for reaching out!
                        </h2>
                        <p style="font-size: 16px; line-height: 1.6; color: #374151;">
                            Hi ${safeName},
                        </p>
                        <p style="font-size: 16px; line-height: 1.6; color: #374151;">
                            Thank you for visiting my portfolio and sending a message. I have successfully received your inquiry regarding <strong>"${safeSubject}"</strong> and will get back to you as soon as possible.
                        </p>
                        <p style="font-size: 16px; line-height: 1.6; color: #374151; margin-top: 24px;">
                            Best regards,<br />
                            <strong>Ayush Singh</strong><br />
                            <span style="font-size: 14px; color: #6b7280;">AI & Machine Learning Student</span>
                        </p>
                    </div>
                `,
            });
            if (visitorResult.error) {
                console.warn('Resend visitor thank-you email warning (likely unverified sandbox recipient):', visitorResult.error);
            }
        } catch (thankYouError) {
            console.warn('Could not send auto-response thank you email to visitor:', thankYouError);
        }

        return NextResponse.json({ success: true, message: 'Message sent successfully!' }, { status: 200 });
    } catch (error: any) {
        console.error('Error in contact form API:', error);
        return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
    }
}
