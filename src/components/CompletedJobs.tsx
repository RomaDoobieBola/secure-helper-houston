import { CheckCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const completedJobs = [
  {
    title: "Commercial Lock Installation",
    description: "Installed high-security locks for a local business complex",
    date: "March 2024",
  },
  {
    title: "Emergency Residential Service",
    description: "24/7 emergency lockout assistance for residential customers",
    date: "March 2024",
  },
  {
    title: "Security System Upgrade",
    description: "Complete security system installation for retail store",
    date: "February 2024",
  },
  {
    title: "Master Key System",
    description: "Implemented master key system for apartment complex",
    date: "February 2024",
  },
];

export const CompletedJobs = () => {
  return (
    <section className="py-16 px-4 md:px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Completed Jobs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {completedJobs.map((job, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-green-100 mb-4">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">{job.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{job.description}</CardDescription>
                <p className="text-sm text-muted-foreground mt-2">{job.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};