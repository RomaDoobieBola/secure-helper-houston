import { Package, Lock, Key, Shield } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const inventoryItems = [
  {
    icon: Lock,
    title: "High-Security Locks",
    description: "Commercial and residential grade locks from trusted brands",
  },
  {
    icon: Key,
    title: "Keys & Key Blanks",
    description: "Wide variety of key types and duplicating services",
  },
  {
    icon: Shield,
    title: "Security Systems",
    description: "Modern security solutions for homes and businesses",
  },
  {
    icon: Package,
    title: "Door Hardware",
    description: "Quality door handles, hinges, and accessories",
  },
];

export const Inventory = () => {
  return (
    <section className="py-16 px-4 md:px-6 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Inventory</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {inventoryItems.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};