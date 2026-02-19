import ProductCard from "./ProductCard";

const trending = [
  {
    name: "Greek Yogurt",
    weight: "400g",
    price: 85,
    originalPrice: 99,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=300&h=300&fit=crop",
    discount: 14,
  },
  {
    name: "Avocado",
    weight: "2 pcs",
    price: 150,
    originalPrice: 180,
    rating: 4.2,
    image:
      "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=300&h=300&fit=crop",
    discount: 17,
  },
  {
    name: "Orange Juice",
    weight: "1 Ltr",
    price: 95,
    originalPrice: 120,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=300&h=300&fit=crop",
    discount: 21,
  },
  {
    name: "Dark Chocolate",
    weight: "100g",
    price: 75,
    originalPrice: 90,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=300&h=300&fit=crop",
    discount: 17,
  },
  {
    name: "Fresh Spinach",
    weight: "250g",
    price: 25,
    originalPrice: 35,
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=300&h=300&fit=crop",
    discount: 29,
  },
  {
    name: "Granola Mix",
    weight: "500g",
    price: 199,
    originalPrice: 250,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1517093728432-a0440f8d45af?w=300&h=300&fit=crop",
    discount: 20,
  },
  {
    name: "Granola Mix",
    weight: "500g",
    price: 199,
    originalPrice: 250,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1517093728432-a0440f8d45af?w=300&h=300&fit=crop",
    discount: 20,
  },
];

const TrendingSection = () => {
  return (
    // <section className="section-padding bg-background">
    //   <div className="container mx-auto">
    //     <div className="flex items-center justify-between mb-10">
    //       <div>
    //         <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
    //           Trending in Your Area 📍
    //         </h2>
    //         <p className="text-muted-foreground mt-1">Popular picks near you</p>
    //       </div>
    //       <a
    //         href="#"
    //         className="text-primary font-semibold text-sm hover:underline hidden sm:block"
    //       >
    //         View All →
    //       </a>
    //     </div>
    //     <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
    //       {trending.map((item) => (
    //         <ProductCard key={item.name} {...item} />
    //       ))}
    //     </div>
    //   </div>
    // </section>

    <section className="relative section-padding overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-green-100">
      {/* Soft background accents */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-green-300/20 blur-3xl"></div>
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 gap-4">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight">
              Trending in Your Area <span className="inline-block">📍</span>
            </h2>
            <p className="text-muted-foreground mt-1">
              Popular picks near you, updated today
            </p>
          </div>

          <a
            href="#"
            className="group inline-flex items-center gap-1 text-primary font-semibold text-sm 
                   hover:text-primary/80 transition hidden sm:flex"
          >
            View All
            <span className="inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
          {trending.map((item) => (
            <div
              key={item.name}
              className="group rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 
                hover:-translate-y-1 hover:scale-[1.01]"
            >
              <ProductCard {...item} />
            </div>
          ))}
        </div>
      </div>
      <br />
    </section>
  );
};

export default TrendingSection;
