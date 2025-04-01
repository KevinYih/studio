import { Menu, Files, BugPlay, Mail, CircleUserRound } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";
import { useEffect, useState } from "react";
import { CiSun } from "react-icons/ci";
import { GiMoon } from "react-icons/gi";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleDark = () => {
    const newMode = !isDark;
    setIsDark(newMode);
  };

  const sidebarItems = [
    { icon: <CircleUserRound size={28} strokeWidth={1.8} />, id: "about", label: "About" },
    { icon: <Files size={28} strokeWidth={1.8} />, id: "projects", label: "projects" },
    { icon: <BugPlay size={28} strokeWidth={1.8} />, id: "skills", label: "Skills" },
    { icon: <Mail size={28} strokeWidth={1.8} />, id: "contact", label: "Contact" },
  ];

  return (
    <div>
      <div className="w-18 bg-sidebarbg dark:bg-sidebarbgd text-slate-600 dark:text-slate-400 h-screen flex flex-col py-5 items-center">
        {<Menu size={25} strokeWidth={1.3} className="mb-2" />}
        {sidebarItems.map((item) => (
          <motion.button key={item.id} onClick={() => setActiveTab(item.id)} whileTap={{ scale: 0.95 }} className={`p-3 mb-2 cursor-pointer hover:text-slate-300 dark:hover:text-slate-700  ${activeTab == item.id && "text-slate-300 border-l-1 dark:text-slate-700"}`}>
            {item.icon}
          </motion.button>
        ))}
        <motion.div
          className="fixed bottom-15 left-4 origin-center"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "linear",
          }}>
          <button onClick={toggleDark} className="mt-3 cursor-pointer  text-gray-100 dark:text-gray-900 hover:text-blue-500">
            {isDark ? <GiMoon size={35} /> : <CiSun size={40} />}
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Sidebar;
