// "use client";

// import React, { useState } from "react";
// import { loadStripe } from "@stripe/stripe-js";
// import {
//   Elements,
//   CardElement,
//   useStripe,
//   useElements,
// } from "@stripe/react-stripe-js";

// const stripePromise = loadStripe(process.env.PUBLISHABLE_KEY!);

// export default function StripeCheckout({
//   amount,
//   onPaymentSuccess,
// }: {
//   amount: number;
//   onPaymentSuccess: () => void;
// }) {
//   return (
//     <Elements stripe={stripePromise}>
//       <CheckoutForm amount={amount} onPaymentSuccess={onPaymentSuccess} />
//     </Elements>
//   );
// }

// function CheckoutForm({
//   amount,
//   onPaymentSuccess,
// }: {
//   amount: number;
//   onPaymentSuccess: () => void;
// }) {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!stripe || !elements) return;

//     setLoading(true);

//     const res = await fetch("/api/create-payment-intent", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ amount }),
//     });

//     const data = await res.json();

//     const result = await stripe.confirmCardPayment(data.clientSecret, {
//       payment_method: { card: elements.getElement(CardElement)! },
//     });

//     setLoading(false);

//     if (result.error) {
//       alert(result.error.message);
//     } else if (result.paymentIntent?.status === "succeeded") {
//       onPaymentSuccess();
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
//       <CardElement className="p-3 border rounded-lg" />
//       <button
//         type="submit"
//         disabled={!stripe || loading}
//         className="bg-[#1B5E20] hover:bg-[#145214] text-[#F5F5DC] font-semibold py-2 px-6 rounded-xl transition"
//       >
//         {loading ? "Processing..." : `Pay $${amount / 100}`}
//       </button>
//     </form>
//   );
// }
"use client";

import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

// Use NEXT_PUBLIC_PUBLISHABLE_KEY here
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_PUBLISHABLE_KEY!);

export default function StripeCheckout({
  amount,
  onPaymentSuccess,
}: {
  amount: number;
  onPaymentSuccess: () => void;
}) {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm amount={amount} onPaymentSuccess={onPaymentSuccess} />
    </Elements>
  );
}

function CheckoutForm({
  amount,
  onPaymentSuccess,
}: {
  amount: number;
  onPaymentSuccess: () => void;
}) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);

    const res = await fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount }),
    });

    const data = await res.json();

    const result = await stripe.confirmCardPayment(data.clientSecret, {
      payment_method: { card: elements.getElement(CardElement)! },
    });

    setLoading(false);

    if (result.error) {
      alert(result.error.message);
    } else if (result.paymentIntent?.status === "succeeded") {
      onPaymentSuccess();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
      <CardElement className="p-3 border rounded-lg" />
      <button
        type="submit"
        disabled={!stripe || loading}
        className="bg-[#1B5E20] hover:bg-[#145214] text-[#F5F5DC] font-semibold py-2 px-6 rounded-xl transition"
      >
        {loading ? "Processing..." : `Pay $${amount / 100}`}
      </button>
    </form>
  );
}
