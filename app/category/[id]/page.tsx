// "use client";
// import { categories } from "../../../lib/data";
// import { useParams, useRouter } from "next/navigation";
// import Image from "next/image";
// import { useState } from "react";

// export default function CategoryPage() {
//   const params = useParams();
//   const router = useRouter();
//   const [hoveredItem, setHoveredItem] = useState<number | null>(null);

//   const category = categories.find((cat) => cat.id === Number(params.id));

//   if (!category) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-[#F5F5DC]">
//         <div className="text-center">
//           <h1 className="text-4xl font-bold mb-4" style={{ color: "#3E2723" }}>
//             Category Not Found
//           </h1>
//           <button
//             onClick={() => router.back()}
//             className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
//             style={{ backgroundColor: "#2D5541", color: "#F5F5DC" }}
//           >
//             ← Go Back
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen flex flex-col bg-[#F5F5DC]">
//       {/* Navbar */}
//       <nav
//         className="sticky top-0 z-50 shadow-md"
//         style={{ backgroundColor: "#3E2723" }}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             <div className="flex items-center">
//               <button
//                 onClick={() => router.push("/")}
//                 className="flex-shrink-0"
//               >
//                 <h1 className="text-2xl font-bold" style={{ color: "#F5F5DC" }}>
//                   🍽️ Soghat
//                 </h1>
//               </button>
//             </div>
//             <div className="flex items-center space-x-4">
//               <button
//                 className="px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105"
//                 style={{ backgroundColor: "#2D5541", color: "#F5F5DC" }}
//               >
//                 🛒 Cart
//               </button>
//               <button
//                 className="px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105"
//                 style={{ backgroundColor: "#F5F5DC", color: "#3E2723" }}
//               >
//                 Sign In
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Breadcrumb & Header */}
//       <div className="py-8" style={{ backgroundColor: "#2D5541" }}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <button
//             onClick={() => router.push("/")}
//             className="mb-4 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 inline-flex items-center"
//             style={{
//               backgroundColor: "rgba(245, 245, 220, 0.2)",
//               color: "#F5F5DC",
//             }}
//           >
//             ← Back to Categories
//           </button>

//           <h1
//             className="text-4xl md:text-5xl font-bold mb-4"
//             style={{ color: "#F5F5DC" }}
//           >
//             {category.name}
//           </h1>

//           <div
//             className="flex flex-wrap gap-4 text-sm md:text-base"
//             style={{ color: "#F5F5DC", opacity: 0.9 }}
//           >
//             <div className="flex items-center gap-2">
//               <span className="font-semibold">📦 Shelf Life:</span>
//               <span>{category.shelfLife}</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <span className="font-semibold">📍 Available in:</span>
//               <span>{category.cityFocus.join(", ")}</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <span className="font-semibold">🛍️ Products:</span>
//               <span>{category.items.length}</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Products Grid */}
//       <main className="flex-1 py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="mb-8">
//             <h2
//               className="text-2xl font-bold mb-2"
//               style={{ color: "#3E2723" }}
//             >
//               Available Products
//             </h2>
//             <p className="text-lg" style={{ color: "#2D5541", opacity: 0.8 }}>
//               Hover over any product to see more details
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             {category.items.map((item, index) => (
//               <div
//                 key={index}
//                 className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer transition-all duration-300"
//                 style={{
//                   transform:
//                     hoveredItem === index
//                       ? "translateY(-8px)"
//                       : "translateY(0)",
//                   boxShadow:
//                     hoveredItem === index
//                       ? "0 20px 40px -12px rgba(0,0,0,0.3)"
//                       : "0 10px 15px -3px rgba(0,0,0,0.1)",
//                 }}
//                 onMouseEnter={() => setHoveredItem(index)}
//                 onMouseLeave={() => setHoveredItem(null)}
//               >
//                 {/* Product Image */}
//                 <div className="relative h-64 overflow-hidden">
//                   <Image
//                     src={item.image}
//                     alt={item.name}
//                     width={400}
//                     height={300}
//                     unoptimized
//                     className="w-full h-full object-cover transition-all duration-500"
//                     style={{
//                       transform:
//                         hoveredItem === index ? "scale(1.1)" : "scale(1)",
//                       filter:
//                         hoveredItem === index
//                           ? "brightness(0.7)"
//                           : "brightness(1)",
//                     }}
//                   />

//                   {/* Hover Overlay */}
//                   <div
//                     className="absolute inset-0 p-4 flex flex-col justify-center transition-all duration-300"
//                     style={{
//                       backgroundColor: "rgba(62, 39, 35, 0.92)",
//                       opacity: hoveredItem === index ? 1 : 0,
//                     }}
//                   >
//                     <h3
//                       className="text-xl font-bold mb-2"
//                       style={{ color: "#F5F5DC" }}
//                     >
//                       {item.name}
//                     </h3>
//                     <p
//                       className="text-sm mb-2"
//                       style={{ color: "#F5F5DC", opacity: 0.9 }}
//                     >
//                       {item.description}
//                     </p>
//                     {item.packaging && (
//                       <p
//                         className="text-sm italic mb-2"
//                         style={{ color: "#F5F5DC", opacity: 0.8 }}
//                       >
//                         📦 {item.packaging}
//                       </p>
//                     )}
//                     <p
//                       className="text-sm font-semibold"
//                       style={{ color: "#F5F5DC" }}
//                     >
//                       📍 {item.city}
//                     </p>
//                   </div>
//                 </div>

//                 {/* Product Info Card */}
//                 <div className="p-4" style={{ backgroundColor: "#FFFFFF" }}>
//                   <h3
//                     className="text-lg font-bold mb-1"
//                     style={{ color: "#3E2723" }}
//                   >
//                     {item.name}
//                   </h3>
//                   <p
//                     className="text-sm mb-2"
//                     style={{ color: "#2D5541", opacity: 0.8 }}
//                   >
//                     {item.city}
//                   </p>
//                   <button
//                     className="w-full py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105"
//                     style={{
//                       backgroundColor:
//                         hoveredItem === index ? "#2D5541" : "#3E2723",
//                       color: "#F5F5DC",
//                     }}
//                   >
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="mt-auto" style={{ backgroundColor: "#3E2723" }}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             <div>
//               <h3
//                 className="text-xl font-bold mb-4"
//                 style={{ color: "#F5F5DC" }}
//               >
//                 Soghat
//               </h3>
//               <p className="text-sm" style={{ color: "#F5F5DC", opacity: 0.8 }}>
//                 Your trusted partner for fresh groceries delivered right to your
//                 doorstep.
//               </p>
//             </div>
//             <div>
//               <h4 className="font-semibold mb-4" style={{ color: "#F5F5DC" }}>
//                 Quick Links
//               </h4>
//               <ul className="space-y-2">
//                 <li>
//                   <a
//                     href="#"
//                     className="text-sm transition-colors duration-300"
//                     style={{ color: "#F5F5DC", opacity: 0.8 }}
//                   >
//                     About Us
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="text-sm transition-colors duration-300"
//                     style={{ color: "#F5F5DC", opacity: 0.8 }}
//                   >
//                     Contact
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="text-sm transition-colors duration-300"
//                     style={{ color: "#F5F5DC", opacity: 0.8 }}
//                   >
//                     FAQs
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="font-semibold mb-4" style={{ color: "#F5F5DC" }}>
//                 Customer Service
//               </h4>
//               <ul className="space-y-2">
//                 <li>
//                   <a
//                     href="#"
//                     className="text-sm transition-colors duration-300"
//                     style={{ color: "#F5F5DC", opacity: 0.8 }}
//                   >
//                     Shipping Info
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="text-sm transition-colors duration-300"
//                     style={{ color: "#F5F5DC", opacity: 0.8 }}
//                   >
//                     Returns
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="text-sm transition-colors duration-300"
//                     style={{ color: "#F5F5DC", opacity: 0.8 }}
//                   >
//                     Track Order
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="font-semibold mb-4" style={{ color: "#F5F5DC" }}>
//                 Connect With Us
//               </h4>
//               <div className="flex space-x-4">
//                 <a
//                   href="#"
//                   className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
//                   style={{ backgroundColor: "#2D5541", color: "#F5F5DC" }}
//                 >
//                   f
//                 </a>
//                 <a
//                   href="#"
//                   className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
//                   style={{ backgroundColor: "#2D5541", color: "#F5F5DC" }}
//                 >
//                   t
//                 </a>
//                 <a
//                   href="#"
//                   className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
//                   style={{ backgroundColor: "#2D5541", color: "#F5F5DC" }}
//                 >
//                   in
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div
//             className="mt-8 pt-8 text-center"
//             style={{ borderTop: "1px solid rgba(245, 245, 220, 0.2)" }}
//           >
//             <p className="text-sm" style={{ color: "#F5F5DC", opacity: 0.7 }}>
//               © 2025 Soghat. All rights reserved.
//             </p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }
"use client";
import { categories } from "../../../lib/data";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

export default function CategoryPage() {
  const params = useParams();
  const router = useRouter();
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const category = categories.find((cat) => cat.id === Number(params.id));

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F5F5DC]">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4" style={{ color: "#3E2723" }}>
            Category Not Found
          </h1>
          <button
            onClick={() => router.back()}
            className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: "#2D5541", color: "#F5F5DC" }}
          >
            ← Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5DC]">
      {/* Navbar */}
      <nav
        className="sticky top-0 z-50 shadow-md"
        style={{ backgroundColor: "#3E2723" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <button
                onClick={() => router.push("/")}
                className="flex-shrink-0"
              >
                <h1 className="text-2xl font-bold" style={{ color: "#F5F5DC" }}>
                  🍽️ Soghat
                </h1>
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => router.push("/cart")}
                className="px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: "#2D5541", color: "#F5F5DC" }}
              >
                🛒 Cart
              </button>
              <button
                className="px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: "#F5F5DC", color: "#3E2723" }}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Breadcrumb & Header */}
      <div className="py-8" style={{ backgroundColor: "#2D5541" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => router.push("/")}
            className="mb-4 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 inline-flex items-center"
            style={{
              backgroundColor: "rgba(245, 245, 220, 0.2)",
              color: "#F5F5DC",
            }}
          >
            ← Back to Categories
          </button>

          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "#F5F5DC" }}
          >
            {category.name}
          </h1>

          <div
            className="flex flex-wrap gap-4 text-sm md:text-base"
            style={{ color: "#F5F5DC", opacity: 0.9 }}
          >
            <div className="flex items-center gap-2">
              <span className="font-semibold">📦 Shelf Life:</span>
              <span>{category.shelfLife}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">📍 Available in:</span>
              <span>{category.cityFocus.join(", ")}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">🛍️ Products:</span>
              <span>{category.items.length}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2
              className="text-2xl font-bold mb-2"
              style={{ color: "#3E2723" }}
            >
              Available Products
            </h2>
            <p className="text-lg" style={{ color: "#2D5541", opacity: 0.8 }}>
              Click on any product to view details and customize your order
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {category.items.map((item, index) => (
              <div
                key={item.id}
                className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer transition-all duration-300"
                style={{
                  transform:
                    hoveredItem === index
                      ? "translateY(-8px)"
                      : "translateY(0)",
                  boxShadow:
                    hoveredItem === index
                      ? "0 20px 40px -12px rgba(0,0,0,0.3)"
                      : "0 10px 15px -3px rgba(0,0,0,0.1)",
                }}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => router.push(`/product/${item.id}`)}
              >
                {/* Product Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={400}
                    height={300}
                    unoptimized
                    className="w-full h-full object-cover transition-all duration-500"
                    style={{
                      transform:
                        hoveredItem === index ? "scale(1.1)" : "scale(1)",
                      filter:
                        hoveredItem === index
                          ? "brightness(0.7)"
                          : "brightness(1)",
                    }}
                  />

                  {/* Hover Overlay */}
                  <div
                    className="absolute inset-0 p-4 flex flex-col justify-center transition-all duration-300"
                    style={{
                      backgroundColor: "rgba(62, 39, 35, 0.92)",
                      opacity: hoveredItem === index ? 1 : 0,
                    }}
                  >
                    <h3
                      className="text-xl font-bold mb-2"
                      style={{ color: "#F5F5DC" }}
                    >
                      {item.name}
                    </h3>
                    <p
                      className="text-sm mb-2"
                      style={{ color: "#F5F5DC", opacity: 0.9 }}
                    >
                      {item.description}
                    </p>
                    {item.packaging && (
                      <p
                        className="text-sm italic mb-2"
                        style={{ color: "#F5F5DC", opacity: 0.8 }}
                      >
                        📦 {item.packaging}
                      </p>
                    )}
                    <p
                      className="text-sm font-semibold"
                      style={{ color: "#F5F5DC" }}
                    >
                      📍 {item.city}
                    </p>
                  </div>
                </div>

                {/* Product Info Card */}
                <div className="p-4" style={{ backgroundColor: "#FFFFFF" }}>
                  <h3
                    className="text-lg font-bold mb-1"
                    style={{ color: "#3E2723" }}
                  >
                    {item.name}
                  </h3>
                  <p
                    className="text-sm mb-2"
                    style={{ color: "#2D5541", opacity: 0.8 }}
                  >
                    📍 {item.city}
                  </p>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="text-xl font-bold"
                      style={{ color: "#2D5541" }}
                    >
                      Rs. {item.price?.toLocaleString() || "N/A"}
                    </span>
                    <span
                      className="text-sm"
                      style={{ color: "#3E2723", opacity: 0.7 }}
                    >
                      {item.weight || "1 kg"}
                    </span>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      router.push(`/product/${item.id}`);
                    }}
                    className="w-full py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105"
                    style={{
                      backgroundColor:
                        hoveredItem === index ? "#2D5541" : "#3E2723",
                      color: "#F5F5DC",
                    }}
                  >
                    View Details & Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto" style={{ backgroundColor: "#3E2723" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: "#F5F5DC" }}
              >
                Soghat
              </h3>
              <p className="text-sm" style={{ color: "#F5F5DC", opacity: 0.8 }}>
                Your trusted partner for fresh groceries delivered right to your
                doorstep.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4" style={{ color: "#F5F5DC" }}>
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm transition-colors duration-300"
                    style={{ color: "#F5F5DC", opacity: 0.8 }}
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm transition-colors duration-300"
                    style={{ color: "#F5F5DC", opacity: 0.8 }}
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm transition-colors duration-300"
                    style={{ color: "#F5F5DC", opacity: 0.8 }}
                  >
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4" style={{ color: "#F5F5DC" }}>
                Customer Service
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm transition-colors duration-300"
                    style={{ color: "#F5F5DC", opacity: 0.8 }}
                  >
                    Shipping Info
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm transition-colors duration-300"
                    style={{ color: "#F5F5DC", opacity: 0.8 }}
                  >
                    Returns
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm transition-colors duration-300"
                    style={{ color: "#F5F5DC", opacity: 0.8 }}
                  >
                    Track Order
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4" style={{ color: "#F5F5DC" }}>
                Connect With Us
              </h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{ backgroundColor: "#2D5541", color: "#F5F5DC" }}
                >
                  f
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{ backgroundColor: "#2D5541", color: "#F5F5DC" }}
                >
                  t
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{ backgroundColor: "#2D5541", color: "#F5F5DC" }}
                >
                  in
                </a>
              </div>
            </div>
          </div>
          <div
            className="mt-8 pt-8 text-center"
            style={{ borderTop: "1px solid rgba(245, 245, 220, 0.2)" }}
          >
            <p className="text-sm" style={{ color: "#F5F5DC", opacity: 0.7 }}>
              © 2025 Soghat. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
