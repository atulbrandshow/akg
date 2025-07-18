"use client";
import { useState } from "react";
import { API_NODE_URL } from "@/configs/config";
import { useRouter } from "next/navigation";

export default function Login({setTrigger}) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null); // For error/success message
  const [userData, setUserData] = useState(null); // For storing user data

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null); // Reset message state before submission
    setUserData(null); // Reset user data before submission

    try {

      const response = await fetch(`${API_NODE_URL}auth`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Fixed Content-Type
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();
      if (data.status) {
        localStorage.setItem("user", JSON.stringify(data.data));
        alert("You have successfully logged in.");
        setUserData(data.data);
        setMessage({ type: "success", text: "Login successful!" });
        setTrigger(true);
      } else {
        setMessage({ type: "error", text: data.message });
      }
    } catch (error) {
      setMessage({ type: "error", text: "Something went wrong. Please try again." });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient-x"></div>
      </div>
      <div className="w-full max-w-md relative z-10 bg-white/80 backdrop-blur-md rounded-lg shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Welcome Back
        </h2>

        {/* Display message */}
        {message && (
          <div
            className={`p-4 mb-4 text-sm rounded ${
              message.type === "success"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition duration-200 ease-in-out"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition duration-200 ease-in-out"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-200 ease-in-out"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
