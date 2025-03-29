import React from "react";

import AboutExplorer from "./explorer/AboutExplorer";
import ProjectsExplorer from "./explorer/ProjectsExplorer";
import SkillsExplorer from "./explorer/SkillsExplorer";
import ContactExplorer from "./explorer/ContactExplorer";

interface ExplorerProps {
  activeTab: string;
}

const Explorer: React.FC<ExplorerProps> = ({ activeTab }) => {
  return (
    <div className="w-64 bg-slate-800 p-4 overflow-auto">
      {activeTab === "about" && <AboutExplorer />}
      {activeTab === "projects" && <ProjectsExplorer />}
      {activeTab === "skills" && <SkillsExplorer />}
      {activeTab === "contact" && <ContactExplorer />}
    </div>
  );
};

{
  /* <div className="bg-gray-700 h-screen overflow-auto">
<div className="p-2">
  <div className="text-sm tracking-wide text-gray">EXPLORER</div>
</div>
</div> */
}

export default Explorer;
