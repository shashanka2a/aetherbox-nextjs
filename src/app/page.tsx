import { Hero } from "@/components/Hero";
import { Vision } from "@/components/Vision";
import { Concept } from "@/components/Concept";
import { Reliability } from "@/components/Reliability";
import { Advantages } from "@/components/Advantages";
import { BusinessModel } from "@/components/BusinessModel";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0F1229]">
      <Hero />
      <Vision />
      <Concept />
      <Reliability />
      <Advantages />
      <BusinessModel />
      <Footer />
    </div>
  );
}
