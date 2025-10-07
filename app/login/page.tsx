// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function LoginPage() {
//   console.log("  Login page rendered");
//   const router = useRouter();
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");

//   const handleSubmit = async (e: any) => {
//     console.log("before prevent default");
//     e.preventDefault();
//     console.log("after prevent default");
//     const res = await fetch("/api/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(form),
//       credentials: "include",
//     });
//     console.log("form is:");
//     console.log("response is:", res);
//     const data = await res.json();

//     if (res.ok) {
//       //   window.location.href = "/cart";
//       router.push("/cart");
//     } else {
//       setError(data.error || "Invalid credentials");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#F5F5DC]">
//       <div
//         className="p-8 rounded-2xl shadow-lg w-full max-w-md"
//         style={{ backgroundColor: "#131212ff" }}
//       >
//         <h2
//           className="text-3xl font-bold mb-6 text-center"
//           style={{ color: "#3E2723" }}
//         >
//           Welcome Back
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="email"
//             placeholder="Email"
//             className="w-full p-3 rounded-md border"
//             value={form.email}
//             onChange={(e) => setForm({ ...form, email: e.target.value })}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             className="w-full p-3 rounded-md border"
//             value={form.password}
//             onChange={(e) => setForm({ ...form, password: e.target.value })}
//             required
//           />
//           {error && <p className="text-red-600 text-sm text-center">{error}</p>}
//           <button
//             type="submit"
//             className="w-full py-3 rounded-md font-bold"
//             style={{ backgroundColor: "#2D5541", color: "#F5F5DC" }}
//           >
//             Log In
//           </button>
//         </form>
//         <p className="text-center mt-4 text-sm" style={{ color: "#3E2723" }}>
//           Don’t have an account?{" "}
//           <span
//             onClick={() => router.push("/signup")}
//             className="cursor-pointer font-semibold"
//             style={{ color: "#2D5541" }}
//           >
//             Sign Up
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// }
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth(); // ✅ Import login from AuthContext
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
        credentials: "include", // ✅ So cookie is stored
      });

      const data = await res.json();
      console.log("Login response:", data);

      if (res.ok) {
        // ✅ Save user in context and localStorage
        login(data.user);

        // ✅ Redirect to main page (home)
        router.push("/");
      } else {
        setError(data.error || "Invalid credentials");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Network error occurred");
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
          Welcome Back
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
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
            Log In
          </button>
        </form>

        <p className="text-center mt-4 text-sm" style={{ color: "#3E2723" }}>
          Don’t have an account?{" "}
          <span
            onClick={() => router.push("/signup")}
            className="cursor-pointer font-semibold"
            style={{ color: "#2D5541" }}
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}
