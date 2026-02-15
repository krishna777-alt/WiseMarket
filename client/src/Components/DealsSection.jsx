import { ShoppingCart } from "lucide-react";
import ProductCard from "./ProductCard";

const deals = [
  {
    name: "Organic Bananas",
    weight: "1 dozen",
    price: 45,
    originalPrice: 60,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=300&h=300&fit=crop",
    discount: 25,
  },
  {
    name: "Farm Fresh Tomatoes",
    weight: "500g",
    price: 30,
    originalPrice: 45,
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1546470427-0d4db154ceb8?w=300&h=300&fit=crop",
    discount: 33,
  },
  {
    name: "Whole Wheat Bread",
    weight: "400g",
    price: 38,
    originalPrice: 50,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=300&fit=crop",
    discount: 24,
  },
  {
    name: "Fresh Milk",
    weight: "1 Ltr",
    price: 56,
    originalPrice: 68,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300&h=300&fit=crop",
    discount: 18,
  },
  {
    name: "Basmati Rice",
    weight: "5 kg",
    price: 320,
    originalPrice: 400,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=300&fit=crop",
    discount: 20,
  },
  {
    name: "Red Apples",
    weight: "1 kg",
    price: 120,
    originalPrice: 160,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=300&h=300&fit=crop",
    discount: 25,
  },
];

const DealsSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Today’s Best Deals 🔥
            </h2>
            <p className="text-gray-500 mt-1">Grab them before they're gone</p>
          </div>

          <a
            href="#"
            className="text-green-600 font-medium hover:underline hidden sm:block"
          >
            View All →
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {deals.map((item, key) => (
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition duration-300 overflow-hidden">
              <div className="relative">
                <span className="absolute top-3 left-3 bg-yellow-400 text-xs font-bold px-3 py-1 rounded-full">
                  {item.discount}% OFF
                </span>

                <img
                  src={item.image}
                  key={key}
                  className="w-full h-40 object-cover"
                  alt="Bananas"
                />
              </div>

              <div className="p-4 space-y-2">
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  ⭐ <span>{item.rating}</span>
                </div>

                <h3 className="font-semibold text-gray-800">{item.name}</h3>

                <p className="text-sm text-gray-500">{item.weight}</p>

                <div className="flex items-center justify-between mt-3">
                  <div>
                    <div className="font-bold text-lg text-gray-900">
                      ₹{item.price}
                      <span className="text-sm text-gray-400 line-through ml-1">
                        ₹{item.originalPrice}
                      </span>
                    </div>
                    <p className="text-xs text-green-600 font-medium">
                      You save ₹{item.originalPrice - item.price}
                    </p>
                  </div>

                  <button
                    className="h-9 w-9 rounded-full 
             bg-green-600 
             text-white 
             flex items-center justify-center 
             hover:bg-green-700 
             hover:scale-110
             transition-all duration-300 
             shadow-md"
                  >
                    <ShoppingCart className="h-4 w-4 text-white" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DealsSection;
