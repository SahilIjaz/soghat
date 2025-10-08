"use client";
import Link from "next/link";
import Image from "next/image";
import { categories } from "../lib/data";
import { useState } from "react";
import Logo from "../icon/WhatsApp Image 2025-10-08 at 00.25.03.jpeg";
import { motion, AnimatePresence } from "framer-motion";
// import logo from "../floating/WhatsApp Image 2025-10-08 at 00.13.12.jpeg";
import Img1 from "../floating/WhatsApp Image 2025-10-08 at 00.05.13.jpeg";
import Img2 from "../floating/WhatsApp Image 2025-10-08 at 00.06.21.jpeg";
import Img3 from "../floating/WhatsApp Image 2025-10-08 at 00.06.39.jpeg";
import Img4 from "../floating/WhatsApp Image 2025-10-08 at 00.13.12.jpeg";

const galleryImages = [Img1, Img2, Img3, Img4];

export default function HomePage() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

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
              <div className="flex-shrink-0">
                {/* Logo Image */}
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
              </div>
              <div className="hidden md:block ml-10">
                <div className="flex items-baseline space-x-4">
                  <a
                    href="#"
                    className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 hover:bg-opacity-80"
                    style={{
                      color: "#F5F5DC",
                      backgroundColor: "rgba(45, 85, 65, 0.4)",
                    }}
                  >
                    Home
                  </a>
                  <a
                    href="#categories"
                    className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                    style={{ color: "#F5F5DC" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        "rgba(45, 85, 65, 0.4)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "transparent")
                    }
                  >
                    Categories
                  </a>
                  <a
                    href="#"
                    className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                    style={{ color: "#F5F5DC" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        "rgba(45, 85, 65, 0.4)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "transparent")
                    }
                  >
                    About
                  </a>
                  <a
                    href="#"
                    className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                    style={{ color: "#F5F5DC" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        "rgba(45, 85, 65, 0.4)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "transparent")
                    }
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
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
      {/* Header/Hero Section */}
      <section className="relative w-full h-[auto] md:h-[600px]">
        {/* Image Carousel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 flex justify-center items-center"
          >
            <Image
              src={galleryImages[currentIndex]}
              alt={`Gallery Image ${currentIndex + 1}`}
              width={1200}
              height={800}
              className="object-cover w-3/4 md:w-1/2 rounded-lg mx-auto"
              priority
            />

            {/* <Image
              src={galleryImages[currentIndex]}
              alt={`Gallery Image ${currentIndex + 1}`}
              fill // <-- makes image fill parent
              className="object-cover w-full h-full rounded-lg"
              priority
            /> */}
          </motion.div>
        </AnimatePresence>

        {/* Overlay Text with Blur */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-32 mt-40 max-w-20xl mx-auto"
          style={{ top: "40%" }}
        >
          <div
            className="px-6 py-4 rounded-lg"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
            }}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4 text-[#080808]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 20 }}
              transition={{ duration: 1 }}
            >
              Connecting you to Pakistan's Heritage
            </motion.h1>
            <motion.p
              className="text-lg md:text-2xl text-[#3E2723] opacity-90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Savor the flavors of tradition with every bite
            </motion.p>
          </div>
        </div>

        {/* Floating Shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-10 left-10 w-32 h-32 rounded-full bg-[#F5F5DC] opacity-20"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-[#F5F5DC] opacity-20"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/2 left-1/4 w-20 h-20 rounded-full bg-[#3E2723] opacity-20"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Arrows */}
        <button
          onClick={prevImage}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-[#3E2723] text-[#F5F5DC] px-4 py-2 rounded-r-lg hover:bg-[#2D5541] transition"
        >
          &#10094;
        </button>
        <button
          onClick={nextImage}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#3E2723] text-[#F5F5DC] px-4 py-2 rounded-l-lg hover:bg-[#2D5541] transition"
        >
          &#10095;
        </button>
      </section>
      {/* //// */}

      {/* Floating Images */}
      {/* Categories Section */}
      <main
        className="flex-1 w-full mx-auto px-4 sm:px-6 lg:px-8 py-16"
        id="categories"
      >
        <div className="text-center mb-12 mt-20" style={{ marginTop: "150px" }}>
          <h2 className="text-4xl font-bold mb-4 text-[#3E2723]">
            Browse Categories
          </h2>
          <p className="text-lg text-[#2D5541] opacity-80">
            Hover a category to explore details
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative max-w-7xl mx-auto">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative w-full"
              style={{ paddingBottom: "100%" }}
              onMouseEnter={() => setHoveredId(category.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Link
                href={`/category/${category.id}`}
                className={`absolute inset-0 rounded-xl shadow-lg transition-all duration-500 overflow-hidden ${
                  hoveredId === category.id ? "z-50" : "z-10"
                }`}
                style={{
                  boxShadow:
                    hoveredId === category.id
                      ? "0 25px 50px -12px rgba(0,0,0,0.5)"
                      : "0 10px 15px -3px rgba(0,0,0,0.1)",
                  transform:
                    hoveredId === category.id ? "scale(1.15)" : "scale(1)",
                }}
              >
                {/* Category Image */}
                <div className="absolute inset-0">
                  <Image
                    src={category.categoryImage}
                    alt={category.name}
                    fill
                    unoptimized
                    className="object-cover"
                    style={{
                      filter:
                        hoveredId === category.id
                          ? "brightness(0.4)"
                          : "brightness(0.7)",
                    }}
                  />
                </div>

                {/* Category Name Overlay - Always Visible */}
                {hoveredId !== category.id && (
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ backgroundColor: "rgba(45, 85, 65, 0.6)" }}
                  >
                    <h2 className="text-2xl font-bold text-center px-4 text-[#F5F5DC]">
                      {category.name}
                    </h2>
                  </div>
                )}

                {/* Details overlay on hover */}
                <div
                  className={`absolute inset-0 p-6 flex flex-col justify-between transition-all duration-500 rounded-xl`}
                  style={{
                    backgroundColor:
                      hoveredId === category.id
                        ? "rgba(62,39,35,0.95)"
                        : "transparent",
                    opacity: hoveredId === category.id ? 1 : 0,
                    pointerEvents: hoveredId === category.id ? "auto" : "none",
                  }}
                >
                  <div className="space-y-3">
                    <div
                      className="border-b pb-2"
                      style={{ borderColor: "rgba(245,245,220,0.3)" }}
                    >
                      <p className="text-sm font-semibold text-[#F5F5DC]">
                        📦 Shelf Life
                      </p>
                      <p className="text-sm text-[#F5F5DC] opacity-90">
                        {category.shelfLife}
                      </p>
                    </div>
                    <div
                      className="border-b pb-2"
                      style={{ borderColor: "rgba(245,245,220,0.3)" }}
                    >
                      <p className="text-sm font-semibold text-[#F5F5DC]">
                        📍 City Focus
                      </p>
                      <p className="text-sm text-[#F5F5DC] opacity-90">
                        {category.cityFocus.join(", ")}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#F5F5DC]">
                        🛍️ Items Available
                      </p>
                      <p className="text-sm text-[#F5F5DC] opacity-90">
                        {category.items.length} products
                      </p>
                    </div>
                  </div>

                  {hoveredId === category.id && (
                    <div className="mt-4 flex flex-col gap-2">
                      <button className="w-full px-4 py-2 rounded-lg text-sm font-semibold border-2 border-[#F5F5DC] text-[#F5F5DC] bg-[#2D5541] hover:scale-105 transition-transform">
                        View Products →
                      </button>
                      <h2 className="text-center text-lg font-bold text-[#F5F5DC]">
                        {category.name}
                      </h2>
                    </div>
                  )}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </main>
      {/* Why Choose Us Section */}
      <section className="py-16" style={{ backgroundColor: "#2D5541" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-4xl font-bold text-center mb-12"
            style={{ color: "#F5F5DC" }}
          >
            Why Choose Soghat?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="text-center p-6 rounded-xl transition-transform duration-300 hover:scale-105"
              style={{ backgroundColor: "rgba(245, 245, 220, 0.1)" }}
            >
              <div className="text-5xl mb-4">🚚</div>
              <h3
                className="text-xl font-bold mb-3"
                style={{ color: "#F5F5DC" }}
              >
                Fast Delivery
              </h3>
              <p style={{ color: "#F5F5DC", opacity: 0.8 }}>
                Same-day delivery available in most cities. Your groceries
                arrive fresh at your doorstep.
              </p>
            </div>
            <div
              className="text-center p-6 rounded-xl transition-transform duration-300 hover:scale-105"
              style={{ backgroundColor: "rgba(245, 245, 220, 0.1)" }}
            >
              <div className="text-5xl mb-4">✓</div>
              <h3
                className="text-xl font-bold mb-3"
                style={{ color: "#F5F5DC" }}
              >
                Quality Guaranteed
              </h3>
              <p style={{ color: "#F5F5DC", opacity: 0.8 }}>
                We source only the freshest products from trusted suppliers.
                100% satisfaction guaranteed.
              </p>
            </div>
            <div
              className="text-center p-6 rounded-xl transition-transform duration-300 hover:scale-105"
              style={{ backgroundColor: "rgba(245, 245, 220, 0.1)" }}
            >
              <div className="text-5xl mb-4">💰</div>
              <h3
                className="text-xl font-bold mb-3"
                style={{ color: "#F5F5DC" }}
              >
                Best Prices
              </h3>
              <p style={{ color: "#F5F5DC", opacity: 0.8 }}>
                Competitive pricing with regular discounts and offers. Save more
                on bulk orders.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Customer Reviews Section */}
      <section className="py-16" style={{ backgroundColor: "#F5F5DC" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-4xl font-bold text-center mb-4"
            style={{ color: "#3E2723" }}
          >
            What Our Customers Say
          </h2>
          <p
            className="text-center text-lg mb-12"
            style={{ color: "#2D5541", opacity: 0.8 }}
          >
            Real reviews from real customers
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="p-6 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
              style={{ backgroundColor: "#FFFFFF" }}
            >
              <div className="flex items-center mb-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold"
                  style={{ backgroundColor: "#2D5541", color: "#F5F5DC" }}
                >
                  S
                </div>
                <div className="ml-3">
                  <h4 className="font-bold" style={{ color: "#3E2723" }}>
                    Sarah Ahmed
                  </h4>
                  <div style={{ color: "#2D5541" }}>★★★★★</div>
                </div>
              </div>
              <p style={{ color: "#3E2723", opacity: 0.8 }}>
                The quality of products is outstanding! Fresh vegetables and
                fruits delivered right on time. Soghat has become my go-to
                grocery store.
              </p>
            </div>

            <div
              className="p-6 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
              style={{ backgroundColor: "#FFFFFF" }}
            >
              <div className="flex items-center mb-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold"
                  style={{ backgroundColor: "#2D5541", color: "#F5F5DC" }}
                >
                  M
                </div>
                <div className="ml-3">
                  <h4 className="font-bold" style={{ color: "#3E2723" }}>
                    Muhammad Ali
                  </h4>
                  <div style={{ color: "#2D5541" }}>★★★★★</div>
                </div>
              </div>
              <p style={{ color: "#3E2723", opacity: 0.8 }}>
                Fast delivery and great customer service. The prices are very
                competitive and the variety of products is impressive. Highly
                recommended!
              </p>
            </div>

            <div
              className="p-6 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
              style={{ backgroundColor: "#FFFFFF" }}
            >
              <div className="flex items-center mb-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold"
                  style={{ backgroundColor: "#2D5541", color: "#F5F5DC" }}
                >
                  A
                </div>
                <div className="ml-3">
                  <h4 className="font-bold" style={{ color: "#3E2723" }}>
                    Ayesha Khan
                  </h4>
                  <div style={{ color: "#2D5541" }}>★★★★★</div>
                </div>
              </div>
              <p style={{ color: "#3E2723", opacity: 0.8 }}>
                I love the convenience of ordering online and having everything
                delivered fresh. The packaging is excellent and products always
                arrive in perfect condition.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer style={{ backgroundColor: "#3E2723" }}>
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
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#2D5541")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#F5F5DC")
                    }
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm transition-colors duration-300"
                    style={{ color: "#F5F5DC", opacity: 0.8 }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#2D5541")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#F5F5DC")
                    }
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm transition-colors duration-300"
                    style={{ color: "#F5F5DC", opacity: 0.8 }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#2D5541")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#F5F5DC")
                    }
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
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#2D5541")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#F5F5DC")
                    }
                  >
                    Shipping Info
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm transition-colors duration-300"
                    style={{ color: "#F5F5DC", opacity: 0.8 }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#2D5541")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#F5F5DC")
                    }
                  >
                    Returns
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm transition-colors duration-300"
                    style={{ color: "#F5F5DC", opacity: 0.8 }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#2D5541")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#F5F5DC")
                    }
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
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes floatDelay {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
      `}</style>
    </div>
  );
}
