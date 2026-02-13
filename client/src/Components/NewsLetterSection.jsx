import { Mail } from "lucide-react";

const NewsletterSection = () => {
  return (
    <section className="section-padding bg-accent">
      <div className="container mx-auto text-center max-w-xl">
        <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <Mail className="h-6 w-6 text-primary" />
        </div>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
          Get Exclusive Deals
        </h2>
        <p className="text-muted-foreground mb-6">
          Subscribe and never miss our best offers and fresh arrivals.
        </p>
        <form
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-xl bg-card border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 placeholder:text-muted-foreground"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:shadow-lg hover:shadow-primary/25 transition-all duration-200"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
