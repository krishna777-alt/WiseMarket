import {
  Carrot,
  Milk,
  Wheat,
  Cookie,
  CupSoda,
  SprayCan,
  Snowflake,
  Sparkles,
} from "lucide-react";

const categories = [
  {
    name: "Fruits & Vegetables",
    icon: Carrot,
    color: "bg-green-50 text-green-600",
  },
  { name: "Dairy & Eggs", icon: Milk, color: "bg-blue-50 text-blue-600" },
  { name: "Rice & Grains", icon: Wheat, color: "bg-amber-50 text-amber-600" },
  { name: "Snacks", icon: Cookie, color: "bg-orange-50 text-orange-600" },
  { name: "Beverages", icon: CupSoda, color: "bg-purple-50 text-purple-600" },
  { name: "Household", icon: SprayCan, color: "bg-teal-50 text-teal-600" },
  { name: "Personal Care", icon: Sparkles, color: "bg-pink-50 text-pink-600" },
  { name: "Frozen Foods", icon: Snowflake, color: "bg-cyan-50 text-cyan-600" },
];

const CategorySection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-green-50/40">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Shop by <span className="text-green-600">Category</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="group bg-white rounded-2xl p-6 text-center 
                     shadow-sm border border-gray-100
                     hover:shadow-lg hover:-translate-y-1
                     transition-all duration-300 cursor-pointer"
            >
              {/* Icon Wrapper */}
              <div
                className="h-16 w-16 rounded-2xl 
                          bg-green-100 
                          flex items-center justify-center 
                          mx-auto mb-4 
                          group-hover:bg-green-600 
                          transition-colors duration-300"
              >
                <cat.icon
                  className="h-8 w-8 text-green-600 
                                 group-hover:text-white 
                                 transition-colors duration-300"
                />
              </div>

              <span
                className="text-sm font-semibold text-gray-800 
                           group-hover:text-green-600 transition"
              >
                {cat.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
