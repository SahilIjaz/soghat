"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useCart } from "../context/cartContext";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import Logo from "../../icon/WhatsApp Image 2025-10-08 at 00.25.03.jpeg";

export default function CartPage() {
  const router = useRouter();
  const { cartItems, updateQuantity, removeFromCart, getCartCount } = useCart();
  const { user, logout } = useAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="));
    const hasToken = !!token;
    const hasUser = !!user;

    setIsLoggedIn(hasToken || hasUser);
    setIsLoading(false);
  }, [user]);

  const handleCheckout = () => {
    if (!isLoggedIn) {
      alert("Please log in or sign up to proceed to checkout!");
      router.push("/login");
      return;
    }

    router.push("/checkout");
  };

  const handleLogout = () => {
    // Clear cookie
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    // Use auth context logout
    logout();
  };

  const getItemTotal = (item: any) => {
    const packagingCost = item.packagingType === "custom" ? 500 : 0;
    return (item.price + packagingCost) * item.quantity;
  };

  const subtotal = cartItems.reduce((sum, item) => sum + getItemTotal(item), 0);
  const shipping = subtotal > 3000 ? 0 : 200;
  const total = subtotal + shipping;

  const occasionLabels: Record<string, string> = {
    baby_boy: "👶 Baby Boy",
    baby_girl: "👶 Baby Girl",
    eid: "🌙 Eid Mubarak",
    wedding: "💍 Shadi Mubarak",
    thank_you: "💝 Thank You",
  };

  // Show loading state while checking auth
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F5F5DC]">
        <div className="text-center">
          <div className="text-4xl mb-4">⏳</div>
          <p className="text-xl" style={{ color: "#3E2723" }}>
            Loading...
          </p>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col bg-[#F5F5DC]">
        <nav
          className="sticky top-0 z-50 shadow-md"
          style={{ backgroundColor: "#3E2723" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <button
                onClick={() => router.push("/")}
                className="flex-shrink-0"
              >
                <div className="flex items-center space-x-2">
                  <Image
                    src={Logo}
                    alt="Soghat Logo"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                  <h1
                    className="text-2xl font-bold"
                    style={{ color: "#F5F5DC" }}
                  >
                    Soghat
                  </h1>
                </div>
              </button>
            </div>
          </div>
        </nav>

        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="text-8xl mb-6">🛒</div>
            <h2
              className="text-3xl font-bold mb-4"
              style={{ color: "#3E2723" }}
            >
              Your Cart is Empty
            </h2>
            <p
              className="text-lg mb-8"
              style={{ color: "#2D5541", opacity: 0.8 }}
            >
              Add some delicious items to get started!
            </p>
            <button
              onClick={() => router.push("/")}
              className="px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: "#2D5541", color: "#F5F5DC" }}
            >
              Start Shopping
            </button>
          </div>
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
                className="px-4 py-2 rounded-md text-sm font-medium relative"
                style={{ backgroundColor: "#2D5541", color: "#F5F5DC" }}
              >
                🛒 Cart ({getCartCount()})
              </button>
              {!isLoggedIn ? (
                <button
                  onClick={() => router.push("/login")}
                  className="px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105"
                  style={{ backgroundColor: "#F5F5DC", color: "#3E2723" }}
                >
                  Sign In
                </button>
              ) : (
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105"
                  style={{ backgroundColor: "#F5F5DC", color: "#3E2723" }}
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="py-8" style={{ backgroundColor: "#2D5541" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold" style={{ color: "#F5F5DC" }}>
            🛒 Your Shopping Cart
          </h1>
          <p
            className="mt-2 text-lg"
            style={{ color: "#F5F5DC", opacity: 0.9 }}
          >
            {cartItems.length} {cartItems.length === 1 ? "item" : "items"} in
            your cart
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="rounded-xl overflow-hidden shadow-lg"
                  style={{ backgroundColor: "#FFFFFF" }}
                >
                  <div className="p-6">
                    <div className="flex gap-6">
                      {/* Product Image */}
                      <div className="flex-shrink-0 relative w-32 h-32">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3
                              className="text-xl font-bold"
                              style={{ color: "#3E2723" }}
                            >
                              {item.name}
                            </h3>
                            <p
                              className="text-sm"
                              style={{ color: "#2D5541", opacity: 0.8 }}
                            >
                              📍 {item.city} • {item.weight}
                            </p>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-600 hover:text-red-800 transition-colors p-2"
                          >
                            <svg
                              className="w-6 h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        </div>

                        <div className="space-y-3">
                          {/* Packaging Info */}
                          <div
                            className="flex items-center gap-2 p-3 rounded-lg"
                            style={{ backgroundColor: "#F5F5DC" }}
                          >
                            <span className="text-2xl">
                              {item.packagingType === "custom" ? "🎁" : "📦"}
                            </span>
                            <div>
                              <p
                                className="text-sm font-semibold"
                                style={{ color: "#3E2723" }}
                              >
                                {item.packagingType === "custom"
                                  ? "Premium Custom Packaging"
                                  : "Standard Packaging"}
                              </p>
                              {item.packagingType === "custom" &&
                                item.customPackaging && (
                                  <p
                                    className="text-xs"
                                    style={{ color: "#2D5541" }}
                                  >
                                    {
                                      occasionLabels[
                                        item.customPackaging.occasion
                                      ]
                                    }{" "}
                                    • {item.customPackaging.colorScheme} scheme
                                  </p>
                                )}
                            </div>
                          </div>

                          {/* Custom Message */}
                          {item.packagingType === "custom" &&
                            item.customPackaging?.message && (
                              <div
                                className="p-3 rounded-lg border-l-4"
                                style={{
                                  backgroundColor: "rgba(45, 85, 65, 0.05)",
                                  borderColor: "#2D5541",
                                }}
                              >
                                <p
                                  className="text-xs font-semibold mb-1"
                                  style={{ color: "#2D5541" }}
                                >
                                  💌 Personal Message:
                                </p>
                                <p
                                  className="text-sm italic"
                                  style={{ color: "#3E2723" }}
                                >
                                  "{item.customPackaging.message}"
                                </p>
                              </div>
                            )}

                          {/* Quantity and Price */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <button
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity - 1)
                                }
                                className="w-9 h-9 rounded-lg font-bold transition-all duration-300 hover:scale-110"
                                style={{
                                  backgroundColor: "#3E2723",
                                  color: "#F5F5DC",
                                }}
                              >
                                -
                              </button>
                              <span
                                className="text-lg font-bold w-10 text-center"
                                style={{ color: "#3E2723" }}
                              >
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity + 1)
                                }
                                className="w-9 h-9 rounded-lg font-bold transition-all duration-300 hover:scale-110"
                                style={{
                                  backgroundColor: "#3E2723",
                                  color: "#F5F5DC",
                                }}
                              >
                                +
                              </button>
                            </div>
                            <div className="text-right">
                              <p
                                className="text-2xl font-bold"
                                style={{ color: "#3E2723" }}
                              >
                                Rs. {getItemTotal(item).toLocaleString()}
                              </p>
                              <p
                                className="text-xs"
                                style={{ color: "#2D5541", opacity: 0.7 }}
                              >
                                Rs. {item.price} × {item.quantity}
                                {item.packagingType === "custom" &&
                                  " + Rs. 500"}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <button
                onClick={() => router.push("/")}
                className="w-full py-3 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105 border-2"
                style={{
                  borderColor: "#2D5541",
                  color: "#2D5541",
                  backgroundColor: "transparent",
                }}
              >
                ← Continue Shopping
              </button>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-4">
                {/* Summary Card */}
                <div
                  className="rounded-xl shadow-lg p-6"
                  style={{ backgroundColor: "#FFFFFF" }}
                >
                  <h3
                    className="text-2xl font-bold mb-6"
                    style={{ color: "#3E2723" }}
                  >
                    Order Summary
                  </h3>

                  <div className="space-y-4">
                    <div
                      className="flex justify-between items-center pb-3 border-b"
                      style={{ borderColor: "rgba(45, 85, 65, 0.2)" }}
                    >
                      <span style={{ color: "#2D5541" }}>Subtotal</span>
                      <span
                        className="font-semibold"
                        style={{ color: "#3E2723" }}
                      >
                        Rs. {subtotal.toLocaleString()}
                      </span>
                    </div>

                    <div
                      className="flex justify-between items-center pb-3 border-b"
                      style={{ borderColor: "rgba(45, 85, 65, 0.2)" }}
                    >
                      <span style={{ color: "#2D5541" }}>
                        Shipping
                        {subtotal > 3000 && (
                          <span
                            className="text-xs ml-1"
                            style={{ color: "#2D5541", opacity: 0.7 }}
                          >
                            (Free)
                          </span>
                        )}
                      </span>
                      <span
                        className="font-semibold"
                        style={{ color: "#3E2723" }}
                      >
                        {shipping === 0 ? "FREE" : `Rs. ${shipping}`}
                      </span>
                    </div>

                    {subtotal <= 3000 && (
                      <div
                        className="p-3 rounded-lg"
                        style={{ backgroundColor: "rgba(45, 85, 65, 0.1)" }}
                      >
                        <p className="text-xs" style={{ color: "#2D5541" }}>
                          💡 Add Rs. {(3000 - subtotal).toLocaleString()} more
                          for free shipping!
                        </p>
                      </div>
                    )}

                    <div className="flex justify-between items-center pt-3">
                      <span
                        className="text-lg font-bold"
                        style={{ color: "#3E2723" }}
                      >
                        Total
                      </span>
                      <span
                        className="text-2xl font-bold"
                        style={{ color: "#2D5541" }}
                      >
                        Rs. {total.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* ✅ Checkout Button */}
                  <button
                    onClick={handleCheckout}
                    className="w-full mt-6 py-4 rounded-xl text-lg font-bold transition-all duration-300 hover:scale-105 shadow-lg"
                    style={{ backgroundColor: "#2D5541", color: "#F5F5DC" }}
                  >
                    Proceed to Checkout
                  </button>

                  <p
                    className="text-xs text-center mt-4"
                    style={{ color: "#2D5541", opacity: 0.7 }}
                  >
                    🔒 Secure checkout with SSL encryption
                  </p>
                </div>

                {/* Promo Code */}
                <div
                  className="rounded-xl shadow-lg p-6"
                  style={{ backgroundColor: "#FFFFFF" }}
                >
                  <h4 className="font-bold mb-3" style={{ color: "#3E2723" }}>
                    Have a Promo Code?
                  </h4>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Enter code"
                      className="flex-1 px-4 py-2 rounded-lg border-2 focus:outline-none focus:ring-2 transition-all"
                      style={{ borderColor: "#2D5541" }}
                    />
                    <button
                      className="px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                      style={{ backgroundColor: "#3E2723", color: "#F5F5DC" }}
                    >
                      Apply
                    </button>
                  </div>
                </div>

                {/* Delivery Info */}
                <div
                  className="rounded-xl shadow-lg p-6"
                  style={{ backgroundColor: "rgba(45, 85, 65, 0.1)" }}
                >
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">🚚</span>
                      <div>
                        <p
                          className="font-semibold text-sm"
                          style={{ color: "#3E2723" }}
                        >
                          Fast Delivery
                        </p>
                        <p
                          className="text-xs"
                          style={{ color: "#2D5541", opacity: 0.8 }}
                        >
                          Delivery within 2-3 business days
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">✓</span>
                      <div>
                        <p
                          className="font-semibold text-sm"
                          style={{ color: "#3E2723" }}
                        >
                          Quality Assured
                        </p>
                        <p
                          className="text-xs"
                          style={{ color: "#2D5541", opacity: 0.8 }}
                        >
                          100% authentic products guaranteed
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">↩️</span>
                      <div>
                        <p
                          className="font-semibold text-sm"
                          style={{ color: "#3E2723" }}
                        >
                          Easy Returns
                        </p>
                        <p
                          className="text-xs"
                          style={{ color: "#2D5541", opacity: 0.8 }}
                        >
                          7-day return policy on all items
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
