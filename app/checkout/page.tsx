// "use client";

// import React, { useState, useRef } from "react";
// import { motion } from "framer-motion";
// import QRCode from "react-qr-code";

// export default function PaymentPage() {
//   const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
//   const [accountNumber, setAccountNumber] = useState("");
//   const [showAccountInput, setShowAccountInput] = useState(false);
//   const [paymentConfirmed, setPaymentConfirmed] = useState(false);
//   const [showRecover, setShowRecover] = useState(false);
//   const [orderId, setOrderId] = useState("");
//   const [recovered, setRecovered] = useState(false);

//   const qrRef = useRef<HTMLDivElement>(null);

//   const paymentMethods = [
//     { id: "credit", name: "Credit / Debit Card" },
//     { id: "paypal", name: "PayPal" },
//     { id: "easypaisa", name: "Easypaisa" },
//     { id: "jazzcash", name: "JazzCash" },
//     { id: "cod", name: "Cash on Delivery" },
//   ];

//   const handleSelectMethod = (methodId: string) => {
//     setSelectedMethod(methodId);
//     setShowAccountInput(methodId !== "cod");
//     if (methodId === "cod") {
//       setPaymentConfirmed(true);
//     }
//   };

//   const handleConfirmPayment = () => {
//     if (accountNumber.trim() === "")
//       return alert("Please enter account number");
//     setPaymentConfirmed(true);
//   };

//   const handleRecoverOrder = () => {
//     if (orderId.trim()) {
//       setRecovered(true);
//     }
//   };

//   const resetPayment = () => {
//     setSelectedMethod(null);
//     setAccountNumber("");
//     setShowAccountInput(false);
//     setPaymentConfirmed(false);
//   };

//   // 🔸 Function to download QR code
//   const handleDownloadQR = () => {
//     const svg = qrRef.current?.querySelector("svg");
//     if (!svg) return;

//     const serializer = new XMLSerializer();
//     const svgData = serializer.serializeToString(svg);
//     const canvas = document.createElement("canvas");
//     const img = new Image();
//     img.onload = () => {
//       canvas.width = 300;
//       canvas.height = 300;
//       const ctx = canvas.getContext("2d");
//       if (ctx) {
//         ctx.fillStyle = "#fff";
//         ctx.fillRect(0, 0, 300, 300);
//         ctx.drawImage(img, 0, 0, 300, 300);
//         const pngFile = canvas.toDataURL("image/png");
//         const link = document.createElement("a");
//         link.download = "payment_qr.png";
//         link.href = pngFile;
//         link.click();
//       }
//     };
//     img.src =
//       "data:image/svg+xml;base64," +
//       btoa(unescape(encodeURIComponent(svgData)));
//   };

//   return (
//     <div className="min-h-screen bg-[#F5F5DC] flex flex-col items-center justify-center p-6">
//       <motion.div
//         className="bg-[#fffaf0] rounded-2xl shadow-lg p-8 w-full max-w-md border border-[#3E2723]/20"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//       >
//         {/* 🔹 Main Payment Section */}
//         {!showRecover && !paymentConfirmed && !recovered && (
//           <>
//             <h1 className="text-2xl font-bold mb-6 text-center text-[#3E2723]">
//               Select Payment Method
//             </h1>

//             <div className="flex flex-col space-y-4">
//               {paymentMethods.map((method) => (
//                 <button
//                   key={method.id}
//                   onClick={() => handleSelectMethod(method.id)}
//                   className={`border rounded-xl p-3 text-left font-medium transition-all ${
//                     selectedMethod === method.id
//                       ? "border-[#1B5E20] bg-[#E8F5E9] text-[#1B5E20]"
//                       : "border-[#3E2723]/30 hover:bg-[#f5e8d0] text-[#3E2723]"
//                   }`}
//                 >
//                   {method.name}
//                 </button>
//               ))}
//             </div>

//             {/* 🔸 Account Number Input for Online Methods */}
//             {showAccountInput && selectedMethod && (
//               <motion.div
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="mt-6 flex flex-col items-center"
//               >
//                 <input
//                   type="text"
//                   placeholder="Enter your Account Number"
//                   value={accountNumber}
//                   onChange={(e) => setAccountNumber(e.target.value)}
//                   className="border border-[#3E2723]/40 rounded-lg p-3 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-[#1B5E20]"
//                 />
//                 <button
//                   onClick={handleConfirmPayment}
//                   className="bg-[#1B5E20] hover:bg-[#145214] text-[#F5F5DC] font-semibold py-2 px-6 rounded-xl transition"
//                 >
//                   Confirm Payment
//                 </button>
//               </motion.div>
//             )}

//             {/* 🔸 Recover Deleted Order */}
//             <div className="mt-6 text-center">
//               <p className="text-[#3E2723] text-sm">
//                 Deleted your order?{" "}
//                 <span
//                   onClick={() => setShowRecover(true)}
//                   className="text-[#1B5E20] font-semibold cursor-pointer hover:underline"
//                 >
//                   Recover with Order ID
//                 </span>
//               </p>
//             </div>
//           </>
//         )}

//         {/* 🔹 Payment Confirmed Section */}
//         {paymentConfirmed && (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             className="flex flex-col items-center text-center"
//           >
//             <h2 className="text-xl font-semibold mb-4 text-[#1B5E20]">
//               Order Confirmed!
//             </h2>
//             <p className="text-[#3E2723]/80 mb-4">
//               Scan this QR code to verify your payment.
//             </p>
//             <div
//               ref={qrRef}
//               className="bg-[#fffaf0] p-4 rounded-xl shadow-md border border-[#3E2723]/20"
//             >
//               <QRCode
//                 value={
//                   selectedMethod === "cod"
//                     ? `Cash on Delivery confirmed`
//                     : `Payment successful using ${selectedMethod}, Account: ${accountNumber}`
//                 }
//                 size={180}
//               />
//             </div>
//             <button
//               onClick={handleDownloadQR}
//               className="mt-4 bg-[#1B5E20] hover:bg-[#145214] text-[#F5F5DC] font-medium py-2 px-4 rounded-lg transition"
//             >
//               Download QR Code
//             </button>
//             <button
//               onClick={resetPayment}
//               className="mt-3 bg-[#3E2723] hover:bg-[#2c1c1a] text-[#F5F5DC] font-medium py-2 px-4 rounded-lg transition"
//             >
//               Make Another Payment
//             </button>
//           </motion.div>
//         )}

//         {/* 🔹 Recover Deleted Order Section */}
//         {showRecover && !recovered && (
//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="flex flex-col items-center"
//           >
//             <h2 className="text-xl font-bold text-[#3E2723] mb-4">
//               Recover Deleted Order
//             </h2>
//             <input
//               type="text"
//               placeholder="Enter past Order ID"
//               value={orderId}
//               onChange={(e) => setOrderId(e.target.value)}
//               className="border border-[#3E2723]/40 rounded-lg p-3 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-[#1B5E20]"
//             />
//             <button
//               onClick={handleRecoverOrder}
//               className="bg-[#1B5E20] hover:bg-[#145214] text-[#F5F5DC] font-semibold py-2 px-6 rounded-xl transition"
//             >
//               Confirm Recovery
//             </button>
//             <button
//               onClick={() => setShowRecover(false)}
//               className="mt-4 text-[#3E2723] hover:underline"
//             >
//               Go Back
//             </button>
//           </motion.div>
//         )}

//         {/* 🔹 Recovered Order QR Display */}
//         {recovered && (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             className="flex flex-col items-center text-center"
//           >
//             <h2 className="text-xl font-semibold mb-4 text-[#1B5E20]">
//               Order Recovered!
//             </h2>
//             <p className="text-[#3E2723]/80 mb-4">
//               Scan this QR code to verify your recovered order.
//             </p>
//             <div
//               ref={qrRef}
//               className="bg-[#fffaf0] p-4 rounded-xl shadow-md border border-[#3E2723]/20"
//             >
//               <QRCode value={`Recovered order ID: ${orderId}`} size={180} />
//             </div>
//             <button
//               onClick={handleDownloadQR}
//               className="mt-4 bg-[#1B5E20] hover:bg-[#145214] text-[#F5F5DC] font-medium py-2 px-4 rounded-lg transition"
//             >
//               Download QR Code
//             </button>
//             <button
//               onClick={() => {
//                 setRecovered(false);
//                 setShowRecover(false);
//                 setOrderId("");
//               }}
//               className="mt-3 bg-[#3E2723] hover:bg-[#2c1c1a] text-[#F5F5DC] font-medium py-2 px-4 rounded-lg transition"
//             >
//               Back to Payment
//             </button>
//           </motion.div>
//         )}
//       </motion.div>
//     </div>
//   );
// }

// {}

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import QRCode from "react-qr-code";
import StripeCheckout from "../components/StripeChecout"; // Fixed typo

export default function PaymentPage() {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);

  const paymentMethods = [
    { id: "credit", name: "Credit / Debit Card" },
    { id: "paypal", name: "PayPal" },
    { id: "cod", name: "Cash on Delivery" },
  ];

  const handleSelectMethod = (methodId: string) => {
    setSelectedMethod(methodId);
    if (methodId === "cod") setPaymentConfirmed(true);
  };

  return (
    <div className="min-h-screen bg-[#F5F5DC] flex flex-col items-center justify-center p-6">
      <motion.div className="bg-[#fffaf0] rounded-2xl shadow-lg p-8 w-full max-w-md">
        {!paymentConfirmed && (
          <>
            <h1
              className="text-2xl font-bold mb-6 text-center"
              style={{ color: "#3E2723" }}
            >
              Select Payment Method
            </h1>
            <div className="flex flex-col space-y-4">
              {paymentMethods.map((method) => (
                <button
                  key={method.id}
                  onClick={() => handleSelectMethod(method.id)}
                  className={`border rounded-xl p-3 text-left ${
                    selectedMethod === method.id
                      ? "border-[#1B5E20] bg-[#E8F5E9]"
                      : "border-[#3E2723]/30 hover:bg-[#f5e8d0]"
                  }`}
                  style={{ color: "#3E2723" }}
                >
                  {method.name}
                </button>
              ))}
            </div>

            {selectedMethod === "credit" && (
              <div className="mt-6">
                <StripeCheckout
                  amount={5000}
                  onPaymentSuccess={() => setPaymentConfirmed(true)}
                />
              </div>
            )}
          </>
        )}

        {paymentConfirmed && (
          <motion.div className="flex flex-col items-center text-center mt-6">
            <h2 className="text-xl font-semibold mb-4 text-[#1B5E20]">
              Order Confirmed!
            </h2>
            <QRCode
              value={`Payment successful via ${selectedMethod}`}
              size={180}
            />
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

//
// "use client";

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import QRCode from "react-qr-code";
// import StripeCheckout from "../components/StripeChecout";

// export default function PaymentPage() {
//   const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
//   const [paymentConfirmed, setPaymentConfirmed] = useState(false);

//   const paymentMethods = [
//     { id: "credit", name: "Credit / Debit Card" },
//     { id: "paypal", name: "PayPal" },
//     { id: "cod", name: "Cash on Delivery" },
//   ];

//   const handleSelectMethod = (methodId: string) => {
//     setSelectedMethod(methodId);
//     if (methodId === "cod") setPaymentConfirmed(true);
//   };

//   return (
//     <div className="min-h-screen bg-[#F5F5DC] flex flex-col items-center justify-center p-6">
//       <motion.div className="bg-[#fffaf0] rounded-2xl shadow-lg p-8 w-full max-w-md">
//         {!paymentConfirmed && (
//           <>
//             <h1
//               className="text-2xl font-bold mb-6 text-center"
//               style={{ color: "#3E2723" }}
//             >
//               Select Payment Method
//             </h1>
//             <div className="flex flex-col space-y-4">
//               {paymentMethods.map((method) => (
//                 <button
//                   key={method.id}
//                   onClick={() => handleSelectMethod(method.id)}
//                   className={`border rounded-xl p-3 text-left ${
//                     selectedMethod === method.id
//                       ? "border-[#1B5E20] bg-[#E8F5E9]"
//                       : "border-[#3E2723]/30 hover:bg-[#f5e8d0]"
//                   }`}
//                   style={{ color: "#3E2723" }}
//                 >
//                   {method.name}
//                 </button>
//               ))}
//             </div>

//             {selectedMethod === "credit" && (
//               <div className="mt-6">
//                 <StripeCheckout
//                   amount={5000}
//                   onPaymentSuccess={() => setPaymentConfirmed(true)}
//                 />
//               </div>
//             )}
//           </>
//         )}

//         {paymentConfirmed && (
//           <motion.div className="flex flex-col items-center text-center mt-6">
//             <h2 className="text-xl font-semibold mb-4 text-[#1B5E20]">
//               Order Confirmed!
//             </h2>
//             <QRCode
//               value={`Payment successful via ${selectedMethod}`}
//               size={180}
//             />
//           </motion.div>
//         )}
//       </motion.div>
//     </div>
//   );
// }
