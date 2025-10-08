import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { email, cartItems, total } = await req.json();

    if (!email || !cartItems) {
      return NextResponse.json({ error: "Missing data" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "soghat.tasteofpakistan@gmail.com",
        pass: "rxqf feol ygnl ikwk",
      },
    });

    const itemsList = cartItems
      .map(
        (item: any) =>
          `<li>${item.name} (${item.quantity} × Rs.${item.price})</li>`
      )
      .join("");

    const mailOptions = {
      from: `"Soghat Orders" <${process.env.EMAIL_USERNAME}>`,
      to: email,
      subject: "Your Order Has Been Confirmed! 🎉",
      html: `
        <div style="font-family:Arial, sans-serif; padding:20px; border:1px solid #ddd;">
          <h2 style="color:#2D5541;">Thank you for your order!</h2>
          <p>We’re excited to let you know that your order has been confirmed.</p>
          <h3>Order Details:</h3>
          <ul>${itemsList}</ul>
          <p><strong>Total:</strong> Rs. ${total}</p>
          <br/>
          <p>We’ll notify you when your order is shipped. 😊</p>
          <p style="color:#2D5541;">~ The Soghat Team</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { error: "Failed to send order email" },
      { status: 500 }
    );
  }
}
