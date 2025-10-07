"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";

export default function SignUpPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
        credentials: "include",
      });

      const data = await res.json();
      console.log("Signup response:", data);

      if (res.ok) {
        // ✅ Save user to localStorage
        login(data.user, false);

        // ✅ Redirect manually on the client (not via middleware)
        router.push("/cart");
      } else {
        setError(data.error || "Something went wrong");
      }
    } catch (error) {
      console.error("Signup error:", error);
      setError("Network error occurred");
    }
  };

  //   const handleSubmit = async (e: React.FormEvent) => {
  //     e.preventDefault();
  //     setError(""); // Clear previous errors

  //     try {
  //       const res = await fetch("/api/signup", {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify(form),
  //         credentials: "include",
  //       });

  //       const data = await res.json();
  //       console.log("Signup response:", data);

  //       if (res.ok) {
  //         // Update auth context with the user data
  //         login(data.user, false);

  //         window.location.href = "/cart";
  //       } else {
  //         setError(data.error || "Something went wrong");
  //       }
  //     } catch (error) {
  //       console.error("Signup error:", error);
  //       setError("Network error occurred");
  //     }
  //   };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F5DC]">
      <div
        className="p-8 rounded-2xl shadow-lg w-full max-w-md"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <h2
          className="text-3xl font-bold mb-6 text-center"
          style={{ color: "#3E2723" }}
        >
          Create Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            style={{ color: "#0b0b09ff" }}
            className="w-full p-3 rounded-md border"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-md border"
            value={form.email}
            style={{ color: "#0b0b09ff" }}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Password"
            style={{ color: "#0b0b09ff" }}
            className="w-full p-3 rounded-md border"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />
          {error && <p className="text-red-600 text-sm text-center">{error}</p>}
          <button
            type="submit"
            className="w-full py-3 rounded-md font-bold"
            style={{ backgroundColor: "#2D5541", color: "#F5F5DC" }}
          >
            Sign Up
          </button>
        </form>
        <p className="text-center mt-4 text-sm" style={{ color: "#3E2723" }}>
          Already have an account?{" "}
          <span
            onClick={() => router.push("/login")}
            className="cursor-pointer font-semibold"
            style={{ color: "#2D5541" }}
          >
            Log In
          </span>
        </p>
      </div>
    </div>
  );
}
