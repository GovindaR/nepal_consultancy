import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, service, message } = body;

    // --- Validation ---
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // --- Nodemailer Transport ---
    // Configure with your SMTP credentials in .env.local:
    //   EMAIL_HOST=smtp.gmail.com
    //   EMAIL_PORT=587
    //   EMAIL_USER=your@gmail.com
    //   EMAIL_PASS=your_app_password
    //   EMAIL_TO=info@sakurabridge.com.np
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || "smtp.gmail.com",
      port: Number(process.env.EMAIL_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // --- Email to business ---
    const businessEmail = {
      from: `"Sakura Bridge Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || "info@sakurabridge.com.np",
      replyTo: email,
      subject: `New Inquiry: ${service} — ${name}`,
      html: `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
          <div style="background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%); padding: 32px; border-radius: 12px 12px 0 0;">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;">
              <div style="width: 8px; height: 8px; background: #dc2626; border-radius: 50%;"></div>
              <span style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 3px;">New Inquiry</span>
            </div>
            <h1 style="color: white; font-size: 24px; font-weight: 700; margin: 0;">Sakura Bridge Consultancy</h1>
            <p style="color: rgba(255,255,255,0.5); font-size: 13px; margin: 4px 0 0;">Contact Form Submission</p>
          </div>
          
          <div style="background: #faf7f2; border: 1px solid #f0e8d9; border-top: none; border-radius: 0 0 12px 12px; padding: 32px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0e8d9; width: 30%;">
                  <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #999;">Name</span>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0e8d9;">
                  <strong style="color: #1a1a1a;">${name}</strong>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0e8d9;">
                  <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #999;">Email</span>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0e8d9;">
                  <a href="mailto:${email}" style="color: #dc2626;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0e8d9;">
                  <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #999;">Phone</span>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0e8d9;">
                  ${phone || "<em style='color: #bbb;'>Not provided</em>"}
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0e8d9;">
                  <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #999;">Service</span>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0e8d9;">
                  <span style="background: #dc2626; color: white; padding: 2px 10px; border-radius: 20px; font-size: 12px;">${service}</span>
                </td>
              </tr>
            </table>
            
            <div style="margin-top: 24px;">
              <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #999; display: block; margin-bottom: 8px;">Message</span>
              <div style="background: white; border: 1px solid #f0e8d9; border-radius: 8px; padding: 16px; font-size: 14px; line-height: 1.7; color: #2d2d2d;">
                ${message.replace(/\n/g, "<br>")}
              </div>
            </div>

            <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid #f0e8d9; text-align: center;">
              <a href="mailto:${email}" 
                 style="display: inline-block; background: #dc2626; color: white; padding: 12px 28px; border-radius: 25px; text-decoration: none; font-size: 14px; font-weight: 600;">
                Reply to ${name}
              </a>
            </div>
          </div>
        </div>
      `,
    };

    // --- Auto-reply to client ---
    const clientEmail = {
      from: `"Sakura Bridge Consultancy" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "We've received your inquiry — Sakura Bridge Consultancy",
      html: `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
          <div style="background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%); padding: 32px; border-radius: 12px 12px 0 0; text-align: center;">
            <div style="font-size: 36px; margin-bottom: 8px;">🌸</div>
            <h1 style="color: white; font-size: 22px; font-weight: 700; margin: 0;">Thank You, ${name}!</h1>
            <p style="color: rgba(255,255,255,0.5); font-size: 13px; margin: 8px 0 0;">Your message has been received</p>
          </div>
          
          <div style="background: #faf7f2; border: 1px solid #f0e8d9; border-top: none; border-radius: 0 0 12px 12px; padding: 32px;">
            <p style="font-size: 15px; line-height: 1.7; color: #2d2d2d;">
              We've received your inquiry about <strong style="color: #dc2626;">${service}</strong> and a member of our team will be in touch within <strong>one business day</strong>.
            </p>
            
            <div style="background: white; border-left: 3px solid #dc2626; padding: 16px 20px; border-radius: 0 8px 8px 0; margin: 20px 0; font-size: 13px; color: #555; line-height: 1.6;">
              <strong>Office Hours:</strong><br>
              Sunday – Friday, 9:00 AM – 6:00 PM NPT<br>
              <strong>WhatsApp:</strong> +977-98X-XXX-XXXX
            </div>
            
            <p style="font-size: 13px; color: #999; margin-top: 24px; border-top: 1px solid #f0e8d9; padding-top: 20px; text-align: center;">
              Sakura Bridge Consultancy | Putalisadak, Kathmandu, Nepal<br>
              <span style="color: #dc2626;">info@sakurabridge.com.np</span>
            </p>
          </div>
        </div>
      `,
    };

    // Send both emails
    await transporter.sendMail(businessEmail);
    await transporter.sendMail(clientEmail);

    return NextResponse.json(
      { success: true, message: "Your message has been sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again or contact us directly." },
      { status: 500 }
    );
  }
}
