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
    <section id="completed-jobs" className="py-16 px-4 md:px-6">
      <h2 className="text-2xl font-bold mb-4">Completed Jobs</h2>
      <div className="grid grid-cols-1 gap-4">
        {completedJobs.map((job, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{job.title}</CardTitle>
              <CardDescription>{job.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-sm text-gray-500">{job.date}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
