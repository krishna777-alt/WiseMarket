import AnnouncementBar from "./AnnouncementBar";
import CategorySection from "./CategorySection";
import DealsSection from "./DealsSection";
import HeroSection from "./HeroSection";

function Home() {
  return (
    <div>
      <AnnouncementBar />
      <HeroSection />
      <CategorySection />
      <DealsSection />
    </div>
  );
}

export default Home;
