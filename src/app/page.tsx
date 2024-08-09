import HeroSection from "~/components/Hero";
import AboutAndProject from "~/components/AboutAndProject";
import ServiceSection from "~/components/ServiceSection";

export default function Home() {
  return (
    <div className="pt-48 md:pt-0">
      <HeroSection />
      <AboutAndProject />
      <ServiceSection />
    </div>
  );
}
