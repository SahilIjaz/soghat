// import Stripe from "stripe";

// const stripe = new Stripe(process.env.SECRET_KEY as string, {
//   apiVersion: "2022-11-15" as Stripe.LatestApiVersion,
// });

// export async function POST(req: Request) {
//   const { amount } = await req.json(); // amount in cents

//   try {
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount,
//       currency: "usd",
//       payment_method_types: ["card"],
//     });

//     return new Response(
//       JSON.stringify({ clientSecret: paymentIntent.client_secret }),
//       {
//         headers: { "Content-Type": "application/json" },
//       }
//     );
//   } catch (error) {
//     return new Response(JSON.stringify({ error: (error as Error).message }), {
//       status: 500,
//       headers: { "Content-Type": "application/json" },
//     });
//   }
// }
import Stripe from "stripe";

const stripe = new Stripe(process.env.SECRET_KEY as string, {
  apiVersion: "2022-11-15" as Stripe.LatestApiVersion,
});

export async function POST(req: Request) {
  const { amount } = await req.json(); // amount in cents

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
    });

    return new Response(
      JSON.stringify({ clientSecret: paymentIntent.client_secret }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: (error as Error).message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
