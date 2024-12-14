import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative bg-primary py-24 px-6 sm:px-12 animate-fade-in">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Allegiance Lock & Door Service
        </h1>
        <p className="text-xl md:text-2xl text-primary-gold mb-8">
          Your Trusted Security Specialists in Houston, Texas
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            size="lg"
            className="bg-primary-gold hover:bg-yellow-500 text-primary"
            onClick={() => window.location.href = "tel:+12819249714"}
          >
            <Phone className="mr-2 h-5 w-5" />
            (281) 924-9714
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary-gold text-primary-gold hover:bg-primary-gold hover:text-primary"
          >
            Schedule Appointment
          </Button>
        </div>
      </div>
    </div>
  );
};