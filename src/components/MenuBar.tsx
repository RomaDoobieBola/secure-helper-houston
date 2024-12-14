import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Lock, Shield, House, Calendar, File, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const MenuBar = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Menubar className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 px-4">
      <MenubarMenu>
        <MenubarTrigger className="flex items-center gap-2">
          <Lock className="h-4 w-4" />
          Services
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem onClick={() => scrollToSection("services")}>
            View Our Services
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger className="flex items-center gap-2">
          <Shield className="h-4 w-4" />
          Inventory
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem onClick={() => scrollToSection("inventory")}>
            Browse Inventory
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger className="flex items-center gap-2">
          <File className="h-4 w-4" />
          Projects
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem onClick={() => scrollToSection("completed-jobs")}>
            Completed Jobs
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger className="flex items-center gap-2">
          <Users className="h-4 w-4" />
          Reviews
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem onClick={() => scrollToSection("reviews")}>
            Customer Reviews
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger className="flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          Schedule
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem onClick={() => scrollToSection("appointments")}>
            Book Appointment
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger className="flex items-center gap-2">
          <House className="h-4 w-4" />
          About
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem onClick={() => scrollToSection("about")}>
            About Us
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};