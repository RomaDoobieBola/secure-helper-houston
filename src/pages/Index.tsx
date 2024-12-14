import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Reviews } from "@/components/Reviews";
import { Inventory } from "@/components/Inventory";
import { CompletedJobs } from "@/components/CompletedJobs";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Inventory />
      <CompletedJobs />
      <Reviews />
    </div>
  );
};

export default Index;