import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, email, category, issue, message } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and Phone number are required." },
        { status: 400 }
      );
    }

    const host = process.env.SMTP_HOST || "smtp-relay.brevo.com";
    const port = parseInt(process.env.SMTP_PORT || "587", 10);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const receiverEmail = process.env.RECEIVER_EMAIL || "bhushanandsonsllp@gmail.com";

    if (!user || !pass) {
      return NextResponse.json(
        { error: "SMTP credentials are missing in server environment variables." },
        { status: 500 }
      );
    }

    // Create Transporter
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: false, // true for 465, false for other ports
      auth: {
        user,
        pass,
      },
    });

    const currentDate = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "short",
    });

    // Beautiful HTML template for admin notification
    const htmlTemplate = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f4f6f8; margin: 0; padding: 20px; color: #1e293b; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.08); border: 1px solid #e2e8f0; }
          .header { background: #0A221C; color: #D4AF37; padding: 25px 30px; text-align: center; border-bottom: 3px solid #D4AF37; }
          .header h1 { margin: 0; font-size: 22px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; }
          .header p { margin: 5px 0 0 0; color: #a3b8b0; font-size: 13px; }
          .content { padding: 30px; }
          .badge { display: inline-block; background: #e6f4ea; color: #0A221C; font-weight: 600; padding: 4px 12px; border-radius: 50px; font-size: 12px; margin-bottom: 20px; text-transform: uppercase; border: 1px solid #b7e1cd; }
          .info-table { width: 100%; border-collapse: collapse; margin-bottom: 25px; }
          .info-table td { padding: 12px 15px; border-bottom: 1px solid #edf2f7; font-size: 14px; }
          .info-table td.label { font-weight: 600; color: #64748b; width: 35%; background: #f8fafc; }
          .info-table td.value { color: #0f172a; font-weight: 500; }
          .message-box { background: #f8fafc; border-left: 4px solid #D4AF37; padding: 15px; margin-top: 15px; border-radius: 0 4px 4px 0; font-size: 14px; line-height: 1.6; color: #334155; }
          .footer { background: #f8fafc; padding: 20px 30px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>BHUSHAN & SONS</h1>
            <p>Advocates & Solicitors — New Lead Notification</p>
          </div>
          <div class="content">
            <div class="badge">🔔 New Consultation Request</div>
            <p style="font-size: 15px; margin-bottom: 20px; color: #334155;">
              A new callback/consultation request has been submitted through the website.
            </p>
            <table class="info-table">
              <tr>
                <td class="label">Client Name</td>
                <td class="value"><strong>${name}</strong></td>
              </tr>
              <tr>
                <td class="label">Phone Number</td>
                <td class="value"><a href="tel:${phone}" style="color: #0A221C; text-decoration: none; font-weight: bold;">${phone}</a></td>
              </tr>
              ${
                email
                  ? `<tr>
                <td class="label">Email Address</td>
                <td class="value"><a href="mailto:${email}" style="color: #0A221C;">${email}</a></td>
              </tr>`
                  : ""
              }
              ${
                category
                  ? `<tr>
                <td class="label">Case Category</td>
                <td class="value">${category}</td>
              </tr>`
                  : ""
              }
              ${
                issue
                  ? `<tr>
                <td class="label">Selected Issue</td>
                <td class="value">${issue}</td>
              </tr>`
                  : ""
              }
              <tr>
                <td class="label">Submitted On</td>
                <td class="value">${currentDate}</td>
              </tr>
            </table>

            ${
              message
                ? `
              <div style="font-weight: 600; color: #64748b; font-size: 13px; text-transform: uppercase; margin-top: 20px;">Client Message / Case Details:</div>
              <div class="message-box">${message.replace(/\n/g, "<br/>")}</div>
            `
                : ""
            }
          </div>
          <div class="footer">
            This email was automatically sent from the website contact form.<br/>
            &copy; ${new Date().getFullYear()} Bhushan & Sons Advocates & Solicitors. All rights reserved.
          </div>
        </div>
      </body>
    </html>
    `;

    const mailOptions = {
      from: `"Bhushan & Sons Web Form" <${user}>`,
      to: receiverEmail,
      replyTo: email || undefined,
      subject: `⚖️ New Legal Consultation Request from ${name} (${category || issue || 'General Request'})`,
      html: htmlTemplate,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: "Consultation request sent successfully." },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Nodemailer Email Error:", error);
    const message =
      error instanceof Error ? error.message : "Failed to send email. Please try again later.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
