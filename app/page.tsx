"use client";
import Link from "next/link";
import { categories } from "../lib/data";

export default function HomePage() {
  return (
    <div className="min-h-screen p-8" style={{ backgroundColor: "#F5F5DC" }}>
      <h1 className="text-4xl font-bold mb-8" style={{ color: "#4B2E2B" }}>
        Categories
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/category/${category.id}`}
            className="relative group rounded-lg overflow-hidden shadow-lg"
          >
            <div
              className="h-48 flex items-center justify-center transition duration-300 hover:brightness-90"
              style={{ backgroundColor: "#2F4F4F" }}
            >
              <h2
                className="text-xl font-semibold text-center px-2"
                style={{ color: "#F5F5DC" }}
              >
                {category.name}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
