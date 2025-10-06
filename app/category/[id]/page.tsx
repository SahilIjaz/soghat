"use client";
import { categories } from "../../../lib/data";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";

export default function CategoryPage() {
  const params = useParams();
  const router = useRouter();
  const category = categories.find((cat) => cat.id === Number(params.id));

  if (!category) return <p>Category not found</p>;

  return (
    <div className="min-h-screen bg-beige p-8">
      <button
        onClick={() => router.back()}
        className="mb-6 px-4 py-2 bg-dark-brown text-beige rounded"
      >
        ← Back
      </button>
      <h1 className="text-3xl font-bold text-dark-brown mb-6">
        {category.name}
      </h1>
      <p className="mb-4 text-dark-brown">
        Shelf Life: {category.shelfLife} | City Focus:{" "}
        {category.cityFocus.join(", ")}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.items.map((item, index) => (
          <div
            key={index}
            className="relative group rounded-lg overflow-hidden shadow-lg cursor-pointer"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={400}
              height={300}
              className="w-full h-64 object-cover transition duration-300 group-hover:brightness-75"
            />
            <div className="absolute inset-0 p-4 opacity-0 group-hover:opacity-100 transition duration-300 bg-dark-brown bg-opacity-70 text-beige flex flex-col justify-center">
              <h2 className="text-xl font-bold mb-2">{item.name}</h2>
              <p className="text-sm mb-1">{item.description}</p>
              {item.packaging && (
                <p className="text-sm italic">{item.packaging}</p>
              )}
              <p className="text-sm mt-1 font-semibold">{item.city}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
