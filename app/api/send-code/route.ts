import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { email, code } = await request.json();

  await resend.emails.send({
    from: 'resume@moulicaverse.com',
    to: email,
    subject: 'Your Resume Access Code',
    html: `
      <h2>Resume Access Verification</h2>
      <p>Your verification code is: <strong>${code}</strong></p>
      <p>This code expires in 10 minutes.</p>
    `
  });

  return Response.json({ success: true });
}