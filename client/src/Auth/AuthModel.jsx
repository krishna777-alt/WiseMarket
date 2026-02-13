import { useState } from "react";
import { X } from "lucide-react";

export default function AuthModal({ open, setOpen }) {
  const [isLogin, setIsLogin] = useState(true);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-fadeIn"
      ></div>

      {/* Modal Box */}
      <div className="relative bg-white w-[90%] max-w-md rounded-3xl shadow-2xl p-8 animate-scaleIn">
        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition"
        >
          <X size={20} />
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-6">
          {isLogin ? "Welcome Back 👋" : "Create Account 🌿"}
        </h2>

        {/* Form */}
        <form className="space-y-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 outline-none"
            />
          )}

          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 outline-none"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        {/* Toggle */}
        <p className="text-sm text-center mt-6 text-gray-500">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="ml-2 text-green-600 font-medium hover:underline"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}
