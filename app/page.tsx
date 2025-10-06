
"use client";
import Link from "next/link";
import { categories } from "../lib/data";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-beige p-8">
      <h1 className="text-4xl font-bold text-dark-brown mb-8">Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/category/${category.id}`}
            className="relative group rounded-lg overflow-hidden shadow-lg"
          >
            <div className="bg-dark-green h-48 flex items-center justify-center">
              <h2 className="text-beige text-xl font-semibold">
                {category.name}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
