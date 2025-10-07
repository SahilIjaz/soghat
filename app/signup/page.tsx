// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function SignUpPage() {
//   const router = useRouter();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     // Normally you'd send this to your backend
//     localStorage.setItem("token", "fake-signup-token");
//     alert("Account created successfully!");
//     router.push("/cart"); // redirect after signup
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#F5F5DC]">
//       <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
//         <h2
//           className="text-3xl font-bold mb-6 text-center"
//           style={{ color: "#2D5541" }}
//         >
//           Create Account
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-5">
//           <input
//             type="text"
//             name="name"
//             placeholder="Full Name"
//             required
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#2D5541]"
//           />

//           <input
//             type="email"
//             name="email"
//             placeholder="Email Address"
//             required
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#2D5541]"
//           />

//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             required
//             value={formData.password}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#2D5541]"
//           />

//           <button
//             type="submit"
//             className="w-full py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-md"
//             style={{ backgroundColor: "#2D5541", color: "#F5F5DC" }}
//           >
//             Sign Up
//           </button>
//         </form>

//         <p className="text-center mt-4 text-gray-600">
//           Already have an account?{" "}
//           <button
//             onClick={() => router.push("/login")}
//             className="text-[#2D5541] font-semibold hover:underline"
//           >
//             Log In
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// }
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (res.ok) {
      router.push("/cart");
    } else {
      setError(data.error || "Something went wrong");
    }
  };

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
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Password"
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
