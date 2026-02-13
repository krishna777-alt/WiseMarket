import { ShoppingCart } from "lucide-react";

const PromoBanner = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="promo-gradient rounded-3xl p-8 md:p-12 text-center text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxLjUiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] opacity-50" />
          <div className="relative z-10">
            <span className="inline-block offer-badge text-sm font-bold px-4 py-1.5 rounded-full mb-4">
              Limited Time Offer
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-3">
              Buy 2 Get 1 Free on All Snacks! 🍿
            </h2>
            <p className="text-lg opacity-90 mb-6 max-w-lg mx-auto">
              Stock up on your favorite snacks and treats. Offer valid today
              only.
            </p>
            <button className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-card text-foreground font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200">
              <ShoppingCart className="h-5 w-5" />
              Grab the Deal
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
