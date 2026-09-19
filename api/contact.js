import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { name, email, phone, company, message } = req.body;

    const { error } = await resend.emails.send({
      from: "YES Exhibition <onboarding@resend.dev>",

      // FOR TESTING:
      // Put the email address used for your Resend account here
      to: "m.farrukhnoman@gmail.com",

      replyTo: email,

      subject: `New Website Inquiry - ${name}`,

      html: `
        <h2>New Website Inquiry</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Message:</strong> ${message || "No message"}</p>
      `,
    });

    if (error) {
      console.error(error);

      return res.status(500).json({
        success: false,
        message: "Email failed",
      });
    }

    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
}