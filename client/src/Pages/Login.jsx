import { Leaf, Mail, Lock } from "lucide-react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function Login() {
  const location = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.message) {
      toast.success(location.state.message);
      // window.history.replaceState({}, document.title);
      navigate(location.pathname, { replace: true });
    }
    return () => {};
  }, [location, navigate]);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1671379528670-1c9c98f556fe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      <div
        className="w-full max-w-md bg-white/20 backdrop-blur-xl border border-white/30 
                  rounded-3xl p-8 shadow-2xl text-white"
      >
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div
            className="h-12 w-12 rounded-2xl 
                          bg-gradient-to-br from-green-500 to-emerald-600 
                          flex items-center justify-center shadow-md"
          >
            <Leaf className="h-6 w-6 text-white" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">
          Welcome Back 👋
        </h2>

        <p className="text-sm text-center text-gray-500 mb-8">
          Login to continue shopping fresh groceries
        </p>

        {/* Form */}
        <form className="space-y-5">
          {/* Email */}
          <div className="relative">
            <Mail
              className="absolute left-4 top-1/2 -translate-y-1/2 
                              h-4 w-4 text-gray-400"
            />
            <input
              type="email"
              placeholder="Email address"
              className="w-full pl-11 pr-4 py-3 rounded-xl 
                         border border-gray-200 
                         focus:ring-2 focus:ring-green-500/40 
                         focus:border-green-500 
                         outline-none transition"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock
              className="absolute left-4 top-1/2 -translate-y-1/2 
                              h-4 w-4 text-gray-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-11 pr-4 py-3 rounded-xl 
                         border border-gray-200 
                         focus:ring-2 focus:ring-green-500/40 
                         focus:border-green-500 
                         outline-none transition"
            />
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end">
            <a href="#" className="text-xs text-green-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl 
                       bg-gradient-to-r from-green-500 to-emerald-600 
                       text-white font-semibold 
                       shadow-lg hover:shadow-xl 
                       hover:scale-[1.02] 
                       transition-all duration-300"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center gap-3">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="text-xs text-gray-400">OR</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        {/* Sign Up Link */}
        <p className="text-sm text-center text-gray-500">
          Don’t have an account?
          <NavLink
            to="/signup"
            className="ml-2 text-green-600 font-medium hover:underline"
          >
            Sign Up
          </NavLink>
        </p>
      </div>
    </div>
  );
}
