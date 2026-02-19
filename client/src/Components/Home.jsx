import AnnouncementBar from "./AnnouncementBar";
import CategorySection from "./CategorySection";
import DealsSection from "./DealsSection";
import HeroSection from "./HeroSection";
import NewsletterSection from "./NewsLetterSection";
import TrendingSection from "./TrendingSection";

function Home() {
  return (
    <div>
      <AnnouncementBar />
      <HeroSection />
      <CategorySection />
      <DealsSection />
      <NewsletterSection />
      <TrendingSection />
    </div>
  );
}

export default Home;
