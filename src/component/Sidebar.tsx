import { Menu, Files, BugPlay, Mail, CircleUserRound } from "lucide-react";
import React from "react";

const Sidebar: React.FC = () => {
  const menu = { icon: <Menu size={24} />, id: "menu", label: "menu" };
  const sidebarItems = [
    { icon: <CircleUserRound size={24} />, id: "about", label: "About" },
    { icon: <Files size={24} />, id: "projects", label: "projects" },
    { icon: <BugPlay size={24} />, id: "skills", label: "Skills" },
    { icon: <Mail size={24} />, id: "contact", label: "Contact" },
  ];

  return (
    <div>
      <div className="w-16 bg-gray-900 h-screen flex flex-col py-5 items-center">
        {menu.icon}
        {sidebarItems.map((item) => (
          <button className="p-3 mb-2">{item.icon}</button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
