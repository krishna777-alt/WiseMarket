import { ShoppingCart, Gift } from "lucide-react";
// import heroImage from "@/assets/hero-groceries.jpg";

const HeroSection = () => {
  return (
    <section class="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-100">
      <div class="absolute -top-20 -left-20 w-72 h-72 bg-green-300 rounded-full blur-3xl opacity-30"></div>
      <div class="absolute -bottom-20 -right-20 w-96 h-96 bg-yellow-200 rounded-full blur-3xl opacity-30"></div>

      <div class="relative max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div class="space-y-8 text-center md:text-left">
          <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Fresh Groceries
            <span class="text-green-600 block">Delivered Smarter</span>
          </h1>

          <p class="text-lg text-gray-600 max-w-xl mx-auto md:mx-0">
            Discover farm-fresh vegetables, juicy fruits, dairy essentials, and
            daily needs delivered straight to your doorstep with unbeatable
            savings.
          </p>

          <div class="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
            <a
              href="#shop"
              className="relative inline-flex items-center justify-center
             px-8 py-4
             font-semibold text-white
             rounded-2xl
             bg-gradient-to-r from-green-500 to-emerald-600
             shadow-lg
             overflow-hidden
             transition-all duration-300
             hover:shadow-2xl hover:scale-105
             group"
            >
              {/* Shine effect */}
              <span
                className="absolute inset-0 bg-white/20 
                   translate-x-[-100%] 
                   group-hover:translate-x-[100%] 
                   transition-transform duration-700"
              ></span>

              {/* Content */}
              <span className="relative flex items-center gap-3">
                <ShoppingCart className="h-5 w-5 text-white" />
                Shop Now
              </span>
            </a>
            <a
              href="#offers"
              class="inline-flex items-center justify-center
            px-8 py-4
            font-semibold
            rounded-2xl
            border-2 border-green-600
            text-green-600
            bg-white
            shadow-md
            transition-all duration-300
            hover:bg-green-600 hover:text-white
            hover:shadow-xl hover:scale-105"
            >
              <span class="flex items-center gap-2">🎁 View Offers</span>
            </a>
          </div>

          <div class="flex flex-wrap justify-center md:justify-start gap-6 text-sm text-gray-600 pt-6">
            <div class="flex items-center gap-2">
              🚚 <span>Free Delivery Above ₹499</span>
            </div>
            <div class="flex items-center gap-2">
              ⚡ <span>30 Min Express Delivery</span>
            </div>
            <div class="flex items-center gap-2">
              🥬 <span>100% Fresh Guarantee</span>
            </div>
          </div>
        </div>

        <div class="relative flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1542838132-92c53300491e"
            alt="Fresh Groceries"
            class="rounded-3xl shadow-2xl w-full max-w-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
