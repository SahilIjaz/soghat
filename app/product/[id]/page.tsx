// "use client";
// import { useState } from "react";
// import { useRouter, useParams } from "next/navigation";
// import Image from "next/image";
// import { categories } from "../../../lib/data";

// export default function ProductDetailPage() {
//   const router = useRouter();
//   const params = useParams();
//   const [quantity, setQuantity] = useState(1);
//   const [packagingType, setPackagingType] = useState("standard");
//   const [showCustomForm, setShowCustomForm] = useState(false);
//   const [customPackaging, setCustomPackaging] = useState({
//     occasion: "",
//     colorScheme: "",
//     ribbonColor: "",
//     message: "",
//   });

//   // Ensure params.id exists
//   const productId = params?.id ? Number(params.id) : null;
//   let product = null;
//   let categoryName = "";

//   if (productId !== null) {
//     for (const category of categories) {
//       const found = category.items.find((item) => item.id === productId);
//       if (found) {
//         product = found;
//         categoryName = category.name;
//         break;
//       }
//     }
//   }

//   const occasions = [
//     { value: "baby_boy", label: "Baby Boy", icon: "👶" },
//     { value: "baby_girl", label: "Baby Girl", icon: "👶" },
//     { value: "eid", label: "Eid Mubarak", icon: "🌙" },
//     { value: "wedding", label: "Shadi Mubarak", icon: "💍" },
//     { value: "thank_you", label: "Thank You", icon: "💝" },
//   ];

//   const colorSchemes = [
//     { value: "blue", label: "Blue", color: "#4A90E2" },
//     { value: "pink", label: "Pink", color: "#FF69B4" },
//     { value: "golden", label: "Golden", color: "#FFD700" },
//     { value: "red", label: "Red", color: "#DC143C" },
//     { value: "green", label: "Green", color: "#2D5541" },
//     { value: "purple", label: "Purple", color: "#9B59B6" },
//   ];

//   const ribbonColors = [
//     { value: "gold", label: "Gold", color: "#FFD700" },
//     { value: "silver", label: "Silver", color: "#C0C0C0" },
//     { value: "red", label: "Red", color: "#DC143C" },
//     { value: "blue", label: "Blue", color: "#4A90E2" },
//     { value: "white", label: "White", color: "#FFFFFF" },
//   ];

//   const handlePackagingChange = (type: string) => {
//     setPackagingType(type);
//     setShowCustomForm(type === "custom");
//   };

//   const handleAddToCart = () => {
//     if (!product) return;
//     const cartItem = {
//       ...product,
//       quantity,
//       packagingType,
//       customPackaging: packagingType === "custom" ? customPackaging : null,
//       totalPrice:
//         product.price * quantity + (packagingType === "custom" ? 500 : 0),
//     };
//     console.log("Adding to cart:", cartItem);
//     alert(
//       "Product added to cart! (Cart functionality will be implemented with state management)"
//     );
//     router.push("/cart");
//   };

//   if (!product) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-[#F5F5DC]">
//         <div className="text-center">
//           <h1 className="text-4xl font-bold mb-4" style={{ color: "#3E2723" }}>
//             Product Not Found
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
//             <button onClick={() => router.push("/")} className="flex-shrink-0">
//               <h1 className="text-2xl font-bold" style={{ color: "#F5F5DC" }}>
//                 🍽️ Soghat
//               </h1>
//             </button>
//             <div className="flex items-center space-x-4">
//               <button
//                 onClick={() => router.push("/cart")}
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

//       {/* Main Content */}
//       <main className="flex-1 py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <button
//             onClick={() => router.back()}
//             className="mb-6 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 inline-flex items-center"
//             style={{ backgroundColor: "#3E2723", color: "#F5F5DC" }}
//           >
//             ← Back to Products
//           </button>

//           {/* Breadcrumb */}
//           <div className="mb-4 text-sm" style={{ color: "#2D5541" }}>
//             <span className="opacity-70">Home</span>
//             <span className="mx-2">›</span>
//             <span className="opacity-70">{categoryName}</span>
//             <span className="mx-2">›</span>
//             <span className="font-semibold">{product.name}</span>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             {/* Product Image */}
//             <div className="space-y-4">
//               <div className="rounded-2xl overflow-hidden shadow-2xl relative h-[500px]">
//                 <Image
//                   src={product.image}
//                   alt={product.name}
//                   fill
//                   className="object-cover"
//                   sizes="(max-width: 1024px) 100vw, 50vw"
//                 />
//               </div>
//               <div className="grid grid-cols-3 gap-4">
//                 {[1, 2, 3].map((i) => (
//                   <div
//                     key={i}
//                     className="rounded-lg overflow-hidden shadow-lg cursor-pointer hover:opacity-75 transition-opacity relative h-24"
//                   >
//                     <Image
//                       src={product.image}
//                       alt={`View ${i}`}
//                       fill
//                       className="object-cover"
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Product Details */}
//             <div className="space-y-6">
//               <div>
//                 <h1
//                   className="text-4xl font-bold mb-2"
//                   style={{ color: "#3E2723" }}
//                 >
//                   {product.name}
//                 </h1>
//                 <p
//                   className="text-xl flex items-center gap-2"
//                   style={{ color: "#2D5541" }}
//                 >
//                   📍 {product.city}
//                 </p>
//               </div>

//               <div
//                 className="py-4 border-y-2"
//                 style={{ borderColor: "#2D5541" }}
//               >
//                 <p className="text-3xl font-bold" style={{ color: "#3E2723" }}>
//                   Rs. {product.price.toLocaleString()}
//                   <span className="text-lg font-normal opacity-70">
//                     {" "}
//                     / {product.weight}
//                   </span>
//                 </p>
//               </div>

//               <div className="space-y-3">
//                 <p
//                   className="text-lg leading-relaxed"
//                   style={{ color: "#3E2723" }}
//                 >
//                   {product.description}
//                 </p>
//                 <div
//                   className="grid grid-cols-2 gap-4 p-4 rounded-lg"
//                   style={{ backgroundColor: "rgba(45, 85, 65, 0.1)" }}
//                 >
//                   <div>
//                     <p
//                       className="text-sm font-semibold"
//                       style={{ color: "#2D5541" }}
//                     >
//                       📦 Packaging
//                     </p>
//                     <p className="text-sm" style={{ color: "#3E2723" }}>
//                       {product.packaging || "Standard packaging"}
//                     </p>
//                   </div>
//                   <div>
//                     <p
//                       className="text-sm font-semibold"
//                       style={{ color: "#2D5541" }}
//                     >
//                       🏷️ Category
//                     </p>
//                     <p className="text-sm" style={{ color: "#3E2723" }}>
//                       {categoryName}
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Quantity Selector */}
//               <div className="space-y-2">
//                 <label
//                   className="text-lg font-semibold"
//                   style={{ color: "#3E2723" }}
//                 >
//                   Quantity
//                 </label>
//                 <div className="flex items-center gap-4">
//                   <button
//                     onClick={() => setQuantity(Math.max(1, quantity - 1))}
//                     className="w-12 h-12 rounded-lg font-bold text-xl transition-all duration-300 hover:scale-110"
//                     style={{ backgroundColor: "#3E2723", color: "#F5F5DC" }}
//                   >
//                     -
//                   </button>
//                   <span
//                     className="text-2xl font-bold w-16 text-center"
//                     style={{ color: "#3E2723" }}
//                   >
//                     {quantity}
//                   </span>
//                   <button
//                     onClick={() => setQuantity(quantity + 1)}
//                     className="w-12 h-12 rounded-lg font-bold text-xl transition-all duration-300 hover:scale-110"
//                     style={{ backgroundColor: "#3E2723", color: "#F5F5DC" }}
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>

//               {/* Packaging Options */}
//               <div className="space-y-4">
//                 <label
//                   className="text-lg font-semibold block"
//                   style={{ color: "#3E2723" }}
//                 >
//                   Packaging Type
//                 </label>
//                 <div className="grid grid-cols-2 gap-4">
//                   <button
//                     onClick={() => handlePackagingChange("standard")}
//                     className="p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105"
//                     style={{
//                       backgroundColor:
//                         packagingType === "standard" ? "#2D5541" : "#FFFFFF",
//                       borderColor: "#2D5541",
//                       color:
//                         packagingType === "standard" ? "#F5F5DC" : "#3E2723",
//                     }}
//                   >
//                     <div className="text-3xl mb-2">📦</div>
//                     <div className="font-bold mb-1">Standard</div>
//                     <div className="text-sm opacity-80">Free</div>
//                   </button>
//                   <button
//                     onClick={() => handlePackagingChange("custom")}
//                     className="p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105"
//                     style={{
//                       backgroundColor:
//                         packagingType === "custom" ? "#2D5541" : "#FFFFFF",
//                       borderColor: "#2D5541",
//                       color: packagingType === "custom" ? "#F5F5DC" : "#3E2723",
//                     }}
//                   >
//                     <div className="text-3xl mb-2">🎁</div>
//                     <div className="font-bold mb-1">Premium Custom</div>
//                     <div className="text-sm opacity-80">+ Rs. 500</div>
//                   </button>
//                 </div>
//               </div>

//               {/* Custom Packaging Form */}
//               {showCustomForm && (
//                 <div
//                   className="space-y-4 p-6 rounded-xl shadow-lg"
//                   style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}
//                 >
//                   {/* ... Custom Form JSX unchanged ... */}
//                 </div>
//               )}

//               {/* Add to Cart Button */}
//               <button
//                 onClick={handleAddToCart}
//                 className="w-full py-4 rounded-xl text-lg font-bold transition-all duration-300 hover:scale-105 shadow-lg"
//                 style={{ backgroundColor: "#2D5541", color: "#F5F5DC" }}
//               >
//                 🛒 Add to Cart - Rs.{" "}
//                 {(
//                   product.price * quantity +
//                   (packagingType === "custom" ? 500 : 0)
//                 ).toLocaleString()}
//               </button>
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="mt-12" style={{ backgroundColor: "#3E2723" }}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//           <div className="text-center">
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
import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";
import { categories } from "../../../lib/data";
import { useCart } from "../../context/cartContext";

export default function ProductDetailPage() {
  const router = useRouter();
  const params = useParams();
  const { addToCart, getCartCount } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [packagingType, setPackagingType] = useState<"standard" | "custom">(
    "standard"
  );
  const [showCustomForm, setShowCustomForm] = useState(false);
  const [customPackaging, setCustomPackaging] = useState({
    occasion: "",
    colorScheme: "",
    ribbonColor: "",
    message: "",
  });

  // Ensure params.id exists
  const productId = params?.id ? Number(params.id) : null;
  let product = null;
  let categoryName = "";

  if (productId !== null) {
    for (const category of categories) {
      const found = category.items.find((item) => item.id === productId);
      if (found) {
        product = found;
        categoryName = category.name;
        break;
      }
    }
  }

  const occasions = [
    { value: "baby_boy", label: "Baby Boy", icon: "👶" },
    { value: "baby_girl", label: "Baby Girl", icon: "👶" },
    { value: "eid", label: "Eid Mubarak", icon: "🌙" },
    { value: "wedding", label: "Shadi Mubarak", icon: "💍" },
    { value: "thank_you", label: "Thank You", icon: "💝" },
  ];

  const colorSchemes = [
    { value: "blue", label: "Blue", color: "#4A90E2" },
    { value: "pink", label: "Pink", color: "#FF69B4" },
    { value: "golden", label: "Golden", color: "#FFD700" },
    { value: "red", label: "Red", color: "#DC143C" },
    { value: "green", label: "Green", color: "#2D5541" },
    { value: "purple", label: "Purple", color: "#9B59B6" },
  ];

  const ribbonColors = [
    { value: "gold", label: "Gold", color: "#FFD700" },
    { value: "silver", label: "Silver", color: "#C0C0C0" },
    { value: "red", label: "Red", color: "#DC143C" },
    { value: "blue", label: "Blue", color: "#4A90E2" },
    { value: "white", label: "White", color: "#FFFFFF" },
  ];

  const handlePackagingChange = (type: "standard" | "custom") => {
    setPackagingType(type);
    setShowCustomForm(type === "custom");
  };

  const handleAddToCart = () => {
    if (!product) return;

    // Validate custom packaging if selected
    if (packagingType === "custom") {
      if (
        !customPackaging.occasion ||
        !customPackaging.colorScheme ||
        !customPackaging.ribbonColor
      ) {
        alert(
          "Please complete all custom packaging options (Occasion, Color Scheme, and Ribbon Color)"
        );
        return;
      }
    }

    const cartItem = {
      id: product.id,
      name: product.name,
      city: product.city,
      image: product.image,
      price: product.price,
      quantity,
      weight: product.weight,
      packagingType,
      customPackaging: packagingType === "custom" ? customPackaging : null,
      description: product.description,
      packaging: product.packaging,
    };

    addToCart(cartItem);
    alert(`✅ ${product.name} added to cart!`);
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F5F5DC]">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4" style={{ color: "#3E2723" }}>
            Product Not Found
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
            <button onClick={() => router.push("/")} className="flex-shrink-0">
              <h1 className="text-2xl font-bold" style={{ color: "#F5F5DC" }}>
                🍽️ Soghat
              </h1>
            </button>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => router.push("/cart")}
                className="px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 relative"
                style={{ backgroundColor: "#2D5541", color: "#F5F5DC" }}
              >
                🛒 Cart
                {getCartCount() > 0 && (
                  <span
                    className="absolute -top-2 -right-2 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold"
                    style={{ backgroundColor: "#DC143C" }}
                  >
                    {getCartCount()}
                  </span>
                )}
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

      {/* Main Content */}
      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => router.back()}
            className="mb-6 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 inline-flex items-center"
            style={{ backgroundColor: "#3E2723", color: "#F5F5DC" }}
          >
            ← Back to Products
          </button>

          {/* Breadcrumb */}
          <div className="mb-4 text-sm" style={{ color: "#2D5541" }}>
            <span className="opacity-70">Home</span>
            <span className="mx-2">›</span>
            <span className="opacity-70">{categoryName}</span>
            <span className="mx-2">›</span>
            <span className="font-semibold">{product.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-2xl relative h-[500px]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  unoptimized
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="rounded-lg overflow-hidden shadow-lg cursor-pointer hover:opacity-75 transition-opacity relative h-24"
                  >
                    <Image
                      src={product.image}
                      alt={`View ${i}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <h1
                  className="text-4xl font-bold mb-2"
                  style={{ color: "#3E2723" }}
                >
                  {product.name}
                </h1>
                <p
                  className="text-xl flex items-center gap-2"
                  style={{ color: "#2D5541" }}
                >
                  📍 {product.city}
                </p>
              </div>

              <div
                className="py-4 border-y-2"
                style={{ borderColor: "#2D5541" }}
              >
                <p className="text-3xl font-bold" style={{ color: "#3E2723" }}>
                  Rs. {product.price.toLocaleString()}
                  <span className="text-lg font-normal opacity-70">
                    {" "}
                    / {product.weight}
                  </span>
                </p>
              </div>

              <div className="space-y-3">
                <p
                  className="text-lg leading-relaxed"
                  style={{ color: "#3E2723" }}
                >
                  {product.description}
                </p>
                <div
                  className="grid grid-cols-2 gap-4 p-4 rounded-lg"
                  style={{ backgroundColor: "rgba(45, 85, 65, 0.1)" }}
                >
                  <div>
                    <p
                      className="text-sm font-semibold"
                      style={{ color: "#2D5541" }}
                    >
                      📦 Packaging
                    </p>
                    <p className="text-sm" style={{ color: "#3E2723" }}>
                      {product.packaging || "Standard packaging"}
                    </p>
                  </div>
                  <div>
                    <p
                      className="text-sm font-semibold"
                      style={{ color: "#2D5541" }}
                    >
                      🏷️ Category
                    </p>
                    <p className="text-sm" style={{ color: "#3E2723" }}>
                      {categoryName}
                    </p>
                  </div>
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="space-y-2">
                <label
                  className="text-lg font-semibold"
                  style={{ color: "#3E2723" }}
                >
                  Quantity
                </label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 rounded-lg font-bold text-xl transition-all duration-300 hover:scale-110"
                    style={{ backgroundColor: "#3E2723", color: "#F5F5DC" }}
                  >
                    -
                  </button>
                  <span
                    className="text-2xl font-bold w-16 text-center"
                    style={{ color: "#3E2723" }}
                  >
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 rounded-lg font-bold text-xl transition-all duration-300 hover:scale-110"
                    style={{ backgroundColor: "#3E2723", color: "#F5F5DC" }}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Packaging Options */}
              <div className="space-y-4">
                <label
                  className="text-lg font-semibold block"
                  style={{ color: "#3E2723" }}
                >
                  Packaging Type
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => handlePackagingChange("standard")}
                    className="p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105"
                    style={{
                      backgroundColor:
                        packagingType === "standard" ? "#2D5541" : "#FFFFFF",
                      borderColor: "#2D5541",
                      color:
                        packagingType === "standard" ? "#F5F5DC" : "#3E2723",
                    }}
                  >
                    <div className="text-3xl mb-2">📦</div>
                    <div className="font-bold mb-1">Standard</div>
                    <div className="text-sm opacity-80">Free</div>
                  </button>
                  <button
                    onClick={() => handlePackagingChange("custom")}
                    className="p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105"
                    style={{
                      backgroundColor:
                        packagingType === "custom" ? "#2D5541" : "#FFFFFF",
                      borderColor: "#2D5541",
                      color: packagingType === "custom" ? "#F5F5DC" : "#3E2723",
                    }}
                  >
                    <div className="text-3xl mb-2">🎁</div>
                    <div className="font-bold mb-1">Premium Custom</div>
                    <div className="text-sm opacity-80">+ Rs. 500</div>
                  </button>
                </div>
              </div>

              {/* Custom Packaging Form */}
              {showCustomForm && (
                <div
                  className="space-y-4 p-6 rounded-xl shadow-lg"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}
                >
                  <h3
                    className="text-xl font-bold mb-4"
                    style={{ color: "#3E2723" }}
                  >
                    🎨 Customize Your Packaging
                  </h3>

                  {/* Occasion */}
                  <div className="space-y-2">
                    <label
                      className="text-sm font-semibold"
                      style={{ color: "#2D5541" }}
                    >
                      Select Occasion *
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {occasions.map((occ) => (
                        <button
                          key={occ.value}
                          onClick={() =>
                            setCustomPackaging({
                              ...customPackaging,
                              occasion: occ.value,
                            })
                          }
                          className="p-3 rounded-lg border-2 transition-all duration-300 hover:scale-105 text-sm"
                          style={{
                            backgroundColor:
                              customPackaging.occasion === occ.value
                                ? "#2D5541"
                                : "#FFFFFF",
                            borderColor: "#2D5541",
                            color:
                              customPackaging.occasion === occ.value
                                ? "#F5F5DC"
                                : "#3E2723",
                          }}
                        >
                          <div className="text-xl mb-1">{occ.icon}</div>
                          <div className="font-medium">{occ.label}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Color Scheme */}
                  <div className="space-y-2">
                    <label
                      className="text-sm font-semibold"
                      style={{ color: "#2D5541" }}
                    >
                      Color Scheme *
                    </label>
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                      {colorSchemes.map((color) => (
                        <button
                          key={color.value}
                          onClick={() =>
                            setCustomPackaging({
                              ...customPackaging,
                              colorScheme: color.value,
                            })
                          }
                          className="p-3 rounded-lg border-2 transition-all duration-300 hover:scale-110"
                          style={{
                            backgroundColor: color.color,
                            borderColor:
                              customPackaging.colorScheme === color.value
                                ? "#3E2723"
                                : "transparent",
                            borderWidth:
                              customPackaging.colorScheme === color.value
                                ? "3px"
                                : "2px",
                          }}
                        >
                          <div
                            className="text-xs font-semibold"
                            style={{
                              color: ["golden", "white"].includes(color.value)
                                ? "#3E2723"
                                : "#FFFFFF",
                              textShadow: "0 1px 2px rgba(0,0,0,0.3)",
                            }}
                          >
                            {color.label}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Ribbon Color */}
                  <div className="space-y-2">
                    <label
                      className="text-sm font-semibold"
                      style={{ color: "#2D5541" }}
                    >
                      Ribbon Color *
                    </label>
                    <div className="grid grid-cols-5 gap-2">
                      {ribbonColors.map((ribbon) => (
                        <button
                          key={ribbon.value}
                          onClick={() =>
                            setCustomPackaging({
                              ...customPackaging,
                              ribbonColor: ribbon.value,
                            })
                          }
                          className="p-3 rounded-lg border-2 transition-all duration-300 hover:scale-110"
                          style={{
                            backgroundColor: ribbon.color,
                            borderColor:
                              customPackaging.ribbonColor === ribbon.value
                                ? "#3E2723"
                                : "#2D5541",
                            borderWidth:
                              customPackaging.ribbonColor === ribbon.value
                                ? "3px"
                                : "2px",
                          }}
                        >
                          <div
                            className="text-xs font-semibold"
                            style={{
                              color: ["gold", "silver", "white"].includes(
                                ribbon.value
                              )
                                ? "#3E2723"
                                : "#FFFFFF",
                              textShadow: "0 1px 2px rgba(0,0,0,0.3)",
                            }}
                          >
                            {ribbon.label}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label
                      className="text-sm font-semibold"
                      style={{ color: "#2D5541" }}
                    >
                      Personal Message (Optional)
                    </label>
                    <textarea
                      value={customPackaging.message}
                      onChange={(e) =>
                        setCustomPackaging({
                          ...customPackaging,
                          message: e.target.value,
                        })
                      }
                      placeholder="e.g., Humain aap ki khushi mein shareek honay ka mauqa diya is ke liye shukriya"
                      maxLength={100}
                      rows={3}
                      className="w-full p-3 rounded-lg border-2 focus:outline-none focus:ring-2 transition-all"
                      style={{
                        borderColor: "#2D5541",
                        color: "#3E2723",
                      }}
                    />
                    <p
                      className="text-xs text-right"
                      style={{ color: "#2D5541", opacity: 0.7 }}
                    >
                      {customPackaging.message.length}/100 characters
                    </p>
                  </div>
                </div>
              )}

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="w-full py-4 rounded-xl text-lg font-bold transition-all duration-300 hover:scale-105 shadow-lg"
                style={{ backgroundColor: "#2D5541", color: "#F5F5DC" }}
              >
                🛒 Add to Cart - Rs.{" "}
                {(
                  product.price * quantity +
                  (packagingType === "custom" ? 500 : 0)
                ).toLocaleString()}
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12" style={{ backgroundColor: "#3E2723" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-sm" style={{ color: "#F5F5DC", opacity: 0.7 }}>
              © 2025 Soghat. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
