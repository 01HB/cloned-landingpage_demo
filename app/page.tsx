import HomeHeroSection from "@/components/home-hero/home-hero-section";
import PoweringSection from "@/components/powering-section/powering-section";
import PhilosophySection from "@/components/philosophy-section/philosophy-section";
import FutureOfFinanceSection from "@/components/future-of-finance-section/futureofinancesection";

const HomePage = () => {
  return (
      <div className="w-full h-fit">
        <HomeHeroSection />
        <PoweringSection />
        <PhilosophySection />
        <FutureOfFinanceSection />
      </div>
  );
}

export default HomePage;
