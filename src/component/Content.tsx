import React from "react";

import AboutContent from "./content/AboutContent";
import ProjectsContent from "./content/ProjectsContent";
import SkillsContent from "./content/SkillsContent";
import ContactContent from "./content/ContactContent";

interface ContentProps {
  activeTab: string;
}

//max-w-8xl

const Content: React.FC<ContentProps> = ({ activeTab }) => {
  console.log("content: " + activeTab);
  return (
    <div className="w-full h-full  justify-center">
      <div className="p-2 bg-contentbg">
        {activeTab === "about" && <AboutContent />}
        {activeTab === "projects" && <ProjectsContent />}
        {activeTab === "skills" && <SkillsContent />}
        {activeTab === "contact" && <ContactContent />}
      </div>
    </div>
  );
};

export default Content;
