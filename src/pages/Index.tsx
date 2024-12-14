import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Reviews } from "@/components/Reviews";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Reviews />
    </div>
  );
};

export default Index;