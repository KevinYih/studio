import { Menu, Files, BugPlay, Mail, CircleUserRound } from "lucide-react";
import { motion } from "motion/react";
import React from "react";
interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const menu = { icon: <Menu size={24} />, id: "menu", label: "menu" };
  const sidebarItems = [
    { icon: <CircleUserRound size={24} strokeWidth={1.8} />, id: "about", label: "About" },
    { icon: <Files size={24} strokeWidth={1.8} />, id: "projects", label: "projects" },
    { icon: <BugPlay size={24} strokeWidth={1.8} />, id: "skills", label: "Skills" },
    { icon: <Mail size={24} strokeWidth={1.8} />, id: "contact", label: "Contact" },
  ];

  return (
    <div>
      <div className="w-18 bg-gray-900 text-slate-600 h-screen flex flex-col py-5 items-center">
        {menu.icon}
        {sidebarItems.map((item) => (
          <motion.button key={item.id} onClick={() => setActiveTab(item.id)} whileTap={{ scale: 0.95 }} className={`p-3 mb-2 cursor-pointer hover:text-slate-300  ${activeTab == item.id && "text-slate-300 border-l-1"}`}>
            {item.icon}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
