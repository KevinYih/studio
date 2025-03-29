import React from "react";

import AboutContent from "./content/AboutContent";
import ProjectsContent from "./content/ProjectsContent";
import SkillsContent from "./content/SkillsContent";
import ContactContent from "./content/ContactContent";

interface ContentProps {
  activeTab: string;
}

const Content: React.FC<ContentProps> = ({ activeTab }) => {
  return (
    <div className="p-6">
      {activeTab === "about" && <AboutContent />}
      {activeTab === "projects" && <ProjectsContent />}
      {activeTab === "skills" && <SkillsContent />}
      {activeTab === "contact" && <ContactContent />}
    </div>
  );
};

export default Content;
