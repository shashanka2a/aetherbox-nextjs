import { Hero } from "@/components/Hero";
import { Vision } from "@/components/Vision";
import { Concept } from "@/components/Concept";
import { WhyNow } from "@/components/WhyNow";
import { Advantages } from "@/components/Advantages";
import { BusinessModel } from "@/components/BusinessModel";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0F1229]">
      <Hero />
      <Vision />
      <Concept />
      <WhyNow />
      <Advantages />
      <BusinessModel />
      <Footer />
    </div>
  );
}
