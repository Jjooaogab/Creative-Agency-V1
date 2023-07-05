import AboutSection from "@/components/About/index";
import HeroSection from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function landing() {
  return (
    <div className="bg-zinc-100 dark:bg-zinc-800">
      <Navbar/>
      <HeroSection />
      <AboutSection />
    </div>
  )
}