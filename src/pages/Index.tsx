import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Reviews } from "@/components/Reviews";
import { Inventory } from "@/components/Inventory";
import { CompletedJobs } from "@/components/CompletedJobs";
import { MenuBar } from "@/components/MenuBar";

const Index = () => {
  return (
    <div className="min-h-screen pt-16">
      <MenuBar />
      <Hero />
      <div id="services">
        <Services />
      </div>
      <div id="inventory">
        <Inventory />
      </div>
      <div id="completed-jobs">
        <CompletedJobs />
      </div>
      <div id="reviews">
        <Reviews />
      </div>
    </div>
  );
};

export default Index;