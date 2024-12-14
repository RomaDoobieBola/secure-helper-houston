import { Shield, Key, House } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "Residential Locksmith",
    description: "Home security solutions, lock installation & repair",
    icon: House,
  },
  {
    title: "Commercial Security",
    description: "Business security systems & access control",
    icon: Shield,
  },
  {
    title: "Emergency Services",
    description: "24/7 emergency lockout assistance",
    icon: Key,
  },
];

export const Services = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">
          Commercial & Residential Locksmith
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="border-2 border-primary/10 hover:border-primary-gold transition-colors">
              <CardHeader>
                <service.icon className="h-12 w-12 text-primary-gold mb-4" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};