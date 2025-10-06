"use client";
import Link from "next/link";
import { categories } from "../../lib/data";
import { useState } from "react";

export default function HomePage() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

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
                <h1 className="text-2xl font-bold" style={{ color: "#F5F5DC" }}>
                  🍽️ FoodMart
                </h1>
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
      <header
        className="relative overflow-hidden"
        style={{ backgroundColor: "#2D5541" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{ color: "#F5F5DC", animation: "fadeInUp 1s ease-out" }}
          >
            Fresh Food, Delivered Fast
          </h1>
          <p
            className="text-xl md:text-2xl mb-8"
            style={{
              color: "#F5F5DC",
              opacity: 0.9,
              animation: "fadeInUp 1s ease-out 0.3s forwards",
            }}
          >
            Explore our wide range of fresh groceries and get them delivered to
            your doorstep
          </p>
          <button
            className="px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-110 hover:shadow-2xl"
            style={{
              backgroundColor: "#F5F5DC",
              color: "#3E2723",
              animation: "fadeInUp 1s ease-out 0.6s forwards",
              opacity: 0,
            }}
          >
            Shop Now
          </button>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div
            className="absolute top-10 left-10 w-32 h-32 rounded-full"
            style={{
              backgroundColor: "#F5F5DC",
              animation: "float 3s ease-in-out infinite",
            }}
          ></div>
          <div
            className="absolute bottom-10 right-10 w-24 h-24 rounded-full"
            style={{
              backgroundColor: "#F5F5DC",
              animation: "floatDelay 4s ease-in-out infinite",
            }}
          ></div>
          <div
            className="absolute top-1/2 left-1/4 w-20 h-20 rounded-full"
            style={{
              backgroundColor: "#3E2723",
              animation: "float 3s ease-in-out infinite",
            }}
          ></div>
        </div>
      </header>

      <main
        className="flex-1 w-full mx-auto px-4 sm:px-6 lg:px-8 py-16"
        id="categories"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-[#3E2723]">
            Browse Categories
          </h2>
          <p className="text-lg text-[#2D5541] opacity-80">
            Hover a category to explore details
          </p>
        </div>

        {/* Grid: 4 per row */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative max-w-7xl mx-auto">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative w-full"
              style={{ paddingBottom: "100%" }}
              onMouseEnter={() => setHoveredId(category.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Card */}
              <Link
                href={`/category/${category.id}`}
                className={`absolute inset-0 rounded-xl shadow-lg transition-all duration-500 overflow-hidden ${
                  hoveredId === category.id ? "z-50" : "z-10"
                }`}
                style={{
                  backgroundColor: "#2D5541",
                  boxShadow:
                    hoveredId === category.id
                      ? "0 25px 50px -12px rgba(0,0,0,0.5)"
                      : "0 10px 15px -3px rgba(0,0,0,0.1)",
                  transform:
                    hoveredId === category.id ? "scale(1.15)" : "scale(1)",
                }}
              >
                {/* Category Image */}
                <img
                  src={category.categoryImage} // your image URL
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover rounded-xl opacity-0 transition-opacity duration-1000"
                  style={{
                    animation: "fadeInImage 1s ease forwards",
                  }}
                />

                {/* Category Name on top when not hovered */}
                {hoveredId !== category.id && (
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <h2 className="text-2xl font-bold text-center px-4 text-[#F5F5DC]">
                      {category.name}
                    </h2>
                  </div>
                )}

                {/* Overlay details */}
                <div
                  className={`absolute inset-0 p-6 flex flex-col justify-between transition-all duration-500 rounded-xl z-30`}
                  style={{
                    backgroundColor:
                      hoveredId === category.id
                        ? "rgba(62,39,35,0.95)"
                        : "transparent",
                    opacity: hoveredId === category.id ? 1 : 0,
                    pointerEvents: hoveredId === category.id ? "auto" : "none",
                  }}
                >
                  {/* existing overlay content */}
                </div>
              </Link>

              {/* <Link
                href={`/category/${category.id}`}
                className={`absolute inset-0 rounded-xl shadow-lg transition-all duration-500 overflow-hidden ${
                  hoveredId === category.id ? "z-50" : "z-10"
                }`}
                style={{
                  backgroundColor: "#2D5541",
                  boxShadow:
                    hoveredId === category.id
                      ? "0 25px 50px -12px rgba(0,0,0,0.5)"
                      : "0 10px 15px -3px rgba(0,0,0,0.1)",
                  transform:
                    hoveredId === category.id ? "scale(1.15)" : "scale(1)",
                }}
              >
                {/* Category Name on top when not hovered */}
              {/* {/* {hoveredId !== category.id && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="text-2xl font-bold text-center px-4 text-[#F5F5DC]">
                      {category.name}
                    </h2>
                  </div>
                )}

                {/* Overlay details */}
              {/* <div
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
                  </div> */}

              {/* Button + Name at bottom */}
              {/* {hoveredId === category.id && (
                    <div className="mt-4 flex flex-col gap-2">
                      <button className="w-full px-4 py-2 rounded-lg text-sm font-semibold border-2 border-[#F5F5DC] text-[#F5F5DC] bg-[#2D5541] hover:scale-105 transition-transform">
                        View Products →
                      </button>
                      <h2 className="text-center text-lg font-bold text-[#F5F5DC]">
                        {category.name}
                      </h2>
                    </div>
                  )} */}
              {/* </div> */}
              {/* </Link> */}
              {/* } } */}
            </div>
          ))}
        </div>
      </main>

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
