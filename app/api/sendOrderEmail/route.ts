// import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";
// import QRCode from "qrcode";

// export async function POST(req: Request) {
//   try {
//     const { email, cartItems, total, orderId } = await req.json();

//     if (!email || !cartItems || !orderId) {
//       return NextResponse.json({ error: "Missing data" }, { status: 400 });
//     }

//     // ======= SET YOUR NGROK URL HERE =======
//     // Replace this with the forwarding URL from ngrok
//     const ngrokUrl =
//       "https://noncategorically-unenumerated-hiedi.ngrok-free.dev";

//     // Generate URL to order details page
//     const orderUrl = `${ngrokUrl}/orders/${orderId}`;

//     // Generate QR code as Data URL
//     const qrCodeDataUrl = await QRCode.toDataURL(orderUrl);

//     const transporter = nodemailer.createTransport({
//       host: "smtp.gmail.com",
//       port: 465,
//       secure: true,
//       auth: {
//         user: "soghat.tasteofpakistan@gmail.com",
//         pass: "rxqf feol ygnl ikwk",
//       },
//     });

//     const itemsList = cartItems
//       .map(
//         (item: any) =>
//           `<li>${item.name} (${item.quantity} × Rs.${item.price})</li>`
//       )
//       .join("");

//     const mailOptions = {
//       from: `"Soghat Orders" <soghat.tasteofpakistan@gmail.com>`,
//       to: email,
//       subject: "Your Order Has Been Confirmed! 🎉",
//       html: `
//         <div style="font-family:Arial, sans-serif; padding:20px; border:1px solid #ddd;">
//           <h2 style="color:#2D5541;">Thank you for your order!</h2>
//           <p>We’re excited to let you know that your order has been confirmed.</p>
//           <h3>Order Details:</h3>
//           <ul>${itemsList}</ul>
//           <p><strong>Total:</strong> Rs. ${total}</p>
//           <br/>
//           <p>Scan this QR code to view your order:</p>
//           <img src="${qrCodeDataUrl}" alt="Order QR Code" style="width:150px; height:150px;"/>
//           <br/>
//           <p>We’ll notify you when your order is shipped. 😊</p>
//           <p style="color:#2D5541;">~ The Soghat Team</p>
//         </div>
//       `,
//     };

//     await transporter.sendMail(mailOptions);

//     return NextResponse.json({ success: true });
//   } catch (error) {
//     console.error("Email sending error:", error);
//     return NextResponse.json(
//       { error: "Failed to send order email" },
//       { status: 500 }
//     );
//   }
// }

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import QRCode from "qrcode";

export async function POST(req: Request) {
  try {
    const { email, cartItems, total, orderId } = await req.json();

    if (!email || !cartItems || !orderId) {
      return NextResponse.json({ error: "Missing data" }, { status: 400 });
    }

    // ======= SET YOUR NGROK URL HERE =======
    const ngrokUrl =
      "https://noncategorically-unenumerated-hiedi.ngrok-free.dev";

    // Generate URL to order details page
    const orderUrl = `${ngrokUrl}/orders/${orderId}`;

    // Generate QR code as PNG buffer
    const qrCodeBuffer = await QRCode.toBuffer(orderUrl, { type: "png" });

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "soghat.tasteofpakistan@gmail.com",
        pass: "rxqf feol ygnl ikwk", // Use App Password
      },
    });

    const itemsList = cartItems
      .map(
        (item: any) =>
          `<li>${item.name} (${item.quantity} × Rs.${item.price})</li>`
      )
      .join("");

    const mailOptions = {
      from: `"Soghat Orders" <soghat.tasteofpakistan@gmail.com>`,
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
          <p>Scan this QR code to view your order:</p>
          <img src="cid:orderQR" alt="Order QR Code" style="width:150px; height:150px;"/>
          <br/>
          <p>We’ll notify you when your order is shipped. 😊</p>
          <p style="color:#2D5541;">~ The Soghat Team</p>
        </div>
      `,
      attachments: [
        {
          filename: "order-qr.png",
          content: qrCodeBuffer,
          cid: "orderQR", // same cid as in the <img src>
        },
      ],
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
