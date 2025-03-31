import React from "react";

import { useState } from "react";
import { Folder, FolderOpen, Monitor, Server, Workflow, GraduationCap, Briefcase, UserPlus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { projects } from "../data/projects";
import techIcons from "../data/techIcons";

interface FolderItemProps {
  label: string;
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}

const FolderItem: React.FC<FolderItemProps> = ({ label, children, active, onClick }) => {
  const [open, setOpen] = useState(false);

  console.log("label: " + label);
  console.log("active: " + active);

  const toggle = () => {
    setOpen(!open);
    onClick?.();
  };

  return (
    <div>
      <button onClick={toggle} className={`flex items-center px-2 py-1 w-full text-left hover:bg-slate-600 dark:hover:bg-slate-200 ${active ? "bg-slate-500 dark:bg-slate-300  text-gray-300 dark:text-gray-700 " : "text-slate-300 dark:text-slate-700"}`}>
        {open ? <FolderOpen size={16} className="mr-2" /> : <Folder size={16} className="mr-2" />}
        {label}
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="ml-6">
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface ExplorerProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Explorer: React.FC<ExplorerProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="hidden sm:block w-64 bg-explorerbg dark:bg-explorerbgd text-slate-300 dark:text-slate-700 text-sm p-3  overflow-auto">
      <div className="text-xs mb-2">EXPLORER</div>
      <div className="text-xs mb-1 flex">
        <FolderOpen size={16} className="mr-2" />
        KevinYih
      </div>

      <div className="ml-1 space-y-1">
        <FolderItem label="about" active={activeTab === "about"} onClick={() => setActiveTab("about")}>
          <div className=" pl-6 py-1 flex items-center gap-2">
            <Briefcase size={16} />
            Experience
          </div>
          <div className=" pl-6 py-1 flex items-center gap-2">
            <GraduationCap size={16} />
            Education
          </div>
        </FolderItem>

        <FolderItem label="projects" active={activeTab === "projects"} onClick={() => setActiveTab("projects")}>
          <div className="space-y-2">
            {projects.map((project) => {
              const match = techIcons.find((t) => t.name === project.technologies[0]);
              if (!match) return null;
              return (
                <div className=" pl-6 py-0.5 lowercase flex items-center gap-2">
                  {" "}
                  <img src={match.icon} alt={match.name} className="w-5 h-5" style={{ filter: "drop-shadow(0 0 1px rgba(255,255,255,0.5))" }} />
                  {project.title}
                </div>
              );
            })}
          </div>
        </FolderItem>

        <FolderItem label="skills" active={activeTab === "skills"} onClick={() => setActiveTab("skills")}>
          <div className=" pl-6 py-1 flex items-center gap-2">
            <Monitor size={16} />
            <span>Frontend</span>
          </div>
          <div className=" pl-6 py-1 flex items-center gap-2">
            <Server size={16} />
            <span>Backend</span>
          </div>
          <div className=" pl-6 py-1 flex items-center gap-2">
            <Workflow size={16} />
            <span>Devops</span>
          </div>
        </FolderItem>

        <FolderItem label="contact" active={activeTab === "contact"} onClick={() => setActiveTab("contact")}>
          <div className=" pl-6 py-1 flex items-center gap-2">
            <UserPlus size={16} />
            <span>Connect</span>
          </div>
        </FolderItem>
      </div>
    </div>
  );
};

export default Explorer;
