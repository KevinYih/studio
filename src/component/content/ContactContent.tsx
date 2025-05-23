import React from "react";

import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const ContactContent: React.FC = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="bg-explorerbg dark:bg-explorerbgd rounded-lg p-6">
        <h3 className="text-xl text-gray-300 dark:text-gray-700 font-semibold mb-3">Contact</h3>
        <div className="flex overflow-hidden mt-10 justify-center space-x-15  text-gray-300 dark:text-gray-700">
          <div>
            <a href="https://github.com/KevinYih" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-500">
              <Github className="m-6" size={30} />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/kevin-kun-yi/" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-500">
              <Linkedin className="m-6" size={30} />
              LinkedIn
            </a>
            <a href="mailto:kevinyih2022@gmail.com" className="flex items-center hover:text-blue-500">
              <Mail className="m-6" size={30} />
              Email
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactContent;
