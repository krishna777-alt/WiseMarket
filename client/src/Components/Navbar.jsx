import {
  Search,
  MapPin,
  User,
  Heart,
  ShoppingCart,
  Leaf,
  Menu,
  X,
} from "lucide-react";
import AuthModal from "../Auth/AuthModel";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-3 flex items-center gap-4">
        <a
          href="/"
          className="flex items-center gap-3 shrink-0 group transition-all duration-300"
        >
          {/* Icon Badge */}
          <div
            className="
      relative h-10 w-10
      rounded-2xl
      bg-gradient-to-br from-green-500 to-emerald-600
      flex items-center justify-center
      shadow-md
      transition-all duration-300
      group-hover:shadow-lg
      group-hover:scale-105
    "
          >
            {/* Soft Glow */}
            <div className="absolute inset-0 rounded-2xl bg-green-400 blur-xl opacity-0 group-hover:opacity-30 transition duration-300"></div>

            <Leaf className="relative h-5 w-5 text-white transition-transform duration-300 group-hover:rotate-12" />
          </div>

          {/* Brand Text */}
          <span className="font-bold text-xl tracking-tight text-gray-900 hidden sm:block">
            Wise
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">
              Market
            </span>
          </span>
        </a>

        {/* Search */}
        <div className="flex-1 max-w-xl hidden md:block">
          <div className="relative group">
            {/* Search Icon */}
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 
                      text-gray-400 group-focus-within:text-green-600 
                      transition-colors duration-300"
            />

            <input
              type="text"
              placeholder="Search for fruits, vegetables, dairy..."
              className="
        w-full
        pl-11 pr-4 py-3
        rounded-2xl
        bg-white/70
        backdrop-blur-md
        border border-gray-200
        text-sm text-gray-700
        shadow-sm
        transition-all duration-300
        placeholder:text-gray-400
        focus:outline-none
        focus:ring-2 focus:ring-green-500/40
        focus:border-green-500
        focus:shadow-md
        focus:scale-[1.02]
      "
            />
          </div>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-1 sm:gap-3 ml-auto">
          <a className="hidden lg:flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors px-2 py-1.5 rounded-lg hover:bg-muted">
            <MapPin className="h-4 w-4" />
            <span>Location</span>
          </a>
          <NavLink
            to="/login"
            className="hidden sm:flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors px-2 py-1.5 rounded-lg hover:bg-muted"
          >
            <User className="h-4 w-4" />
            Login
          </NavLink>
          <a className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted relative">
            <Heart className="h-5 w-5" />
          </a>

          <ShopingCart />
          <button
            className="p-2 md:hidden text-muted-foreground hover:text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile search */}
      {mobileOpen && (
        <div className="md:hidden px-4 pb-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search for fruits, vegetables, dairy..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-muted border-0 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 placeholder:text-muted-foreground"
            />
          </div>
        </div>
      )}
    </nav>
  );
};

function ShopingCart() {
  return (
    <a
      href="/cart"
      className="relative flex items-center justify-center p-2.5 
      rounded-xl 
             text-gray-600 
             transition-all duration-300 
             hover:text-green-600 
             hover:bg-green-50 
             hover:scale-105 
             group"
    >
      {/* Soft Hover Glow */}
      <span
        className="absolute inset-0 rounded-xl bg-green-400/10 opacity-0 
        group-hover:opacity-100 transition duration-300 blur-md"
      ></span>

      {/* Cart Icon */}
      <ShoppingCart className="relative h-5 w-5 transition-transform duration-300 group-hover:scale-110" />

      {/* Badge */}
      <span
        className="absolute -top-1 -right-1 
        min-w-[18px] h-[18px] 
                   px-1 
                   rounded-full 
                   bg-gradient-to-r from-green-500 to-emerald-600 
                   text-white text-[10px] font-semibold 
                   flex items-center justify-center 
                   shadow-md 
                   transition-transform duration-300 
                   group-hover:scale-110"
      >
        3
      </span>
    </a>
  );
}

export default Navbar;
