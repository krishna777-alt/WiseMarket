import { useState } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import API from "../api/axios";

function Signup() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }
  console.log("Form:", formData);

  function validateForm() {
    if (!formData.fullname || !formData.email || !formData.password) {
      toast.warning("All fields are required");
    }

    if (formData.password.length < 6) {
      // return ;
      toast.warning("Password must be at least 6 characters");
    }

    return null;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);

      return;
    }
    try {
      setLoading(true);
      setError("");

      const response = await API.post("/user/signup", formData);
      console.log("response:", response);

      setFormData({
        fullname: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
      });
      // alert("Signup successfull!");

      if (response?.data?.status === 201) {
        navigate("/login", {
          state: { message: "Account registerd successfully" },
        });
      }
      toast.success();
    } catch (err) {
      setError(err.response?.data.message || "Something went wrong");
      toast.error(err.response?.data.message || "Something went wrong");
      console.log("err:", err.message);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div
      className="min-h-screen flex items-center justify-center 
             bg-gradient-to-br from-green-50 via-white to-emerald-100 px-4"
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1671379528670-1c9c98f556fe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md"></div>

      <div
        className="relative z-10 w-full max-w-md 
                  bg-white rounded-3xl p-8 shadow-2xl"
      >
        <div className="flex justify-center mb-6">
          <div
            className="h-12 w-12 rounded-2xl 
                  bg-gradient-to-br from-green-500 to-emerald-600 
                  flex items-center justify-center shadow-md text-white text-xl font-bold"
          >
            W
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">
          Create Your Account 🌿
        </h2>
        {/* {error && <p>{error}</p>} */}
        <p className="text-sm text-center text-gray-500 mb-8">
          Join WiseMarket and start shopping fresh today
        </p>

        <Form
          onChange={handleChange}
          onSubmit={handleSubmit}
          formData={formData}
          loading={loading}
        />
        <p className="text-sm text-center text-gray-500 mt-6">
          Already have an account?
          <NavLink
            to="/login"
            className="ml-2 text-green-600 font-medium hover:underline"
          >
            Login
          </NavLink>
        </p>
      </div>
    </div>
  );
}

function Form({ onChange, onSubmit, formData, loading }) {
  return (
    <form className="space-y-5" onSubmit={onSubmit}>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Full name
        </label>
        <input
          type="text"
          name="fullname"
          onChange={onChange}
          value={formData.fullname}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 
                 focus:ring-2 focus:ring-green-500/40 
                 focus:border-green-500 outline-none transition"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Phone Number
        </label>
        <input
          type="tel"
          name="phone"
          onChange={onChange}
          value={formData.phone}
          placeholder="+1 234 567 890"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 
                 focus:ring-2 focus:ring-green-500/40 
                 focus:border-green-500 outline-none transition"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          onChange={onChange}
          value={formData.email}
          placeholder="you@example.com"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 
                 focus:ring-2 focus:ring-green-500/40 
                 focus:border-green-500 outline-none transition"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <input
          type="password"
          name="password"
          onChange={onChange}
          value={formData.password}
          placeholder="Enter password"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 
                 focus:ring-2 focus:ring-green-500/40 
                 focus:border-green-500 outline-none transition"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Confirm Password
        </label>
        <input
          type="password"
          name="confirmPassword"
          onChange={onChange}
          value={formData.confirmPassword}
          placeholder="Confirm password"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 
                 focus:ring-2 focus:ring-green-500/40 
                 focus:border-green-500 outline-none transition"
          required
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 rounded-xl 
               bg-gradient-to-r from-green-500 to-emerald-600 
               text-white font-semibold 
               shadow-lg hover:shadow-xl 
               hover:scale-[1.02] 
               transition-all duration-300"
      >
        {loading ? "Registering..." : "Sign Up"}
      </button>
    </form>
  );
}

export default Signup;
