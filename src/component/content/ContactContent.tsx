import React from "react";

import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const ContactContent: React.FC = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="bg-gray-800 rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-3">Contact</h3>
        <div className="flex overflow-hidden mt-10 justify-center space-x-15">
          <a href="https://github.com/KevinYih" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-blue-400">
            <Github className="mr-2" size={30} />
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/kevin-kun-yi/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-blue-400">
            <Linkedin className="mr-2" size={30} />
            LinkedIn
          </a>
          <a href="mailto:kevinyih2022@gmail.com" className="flex items-center text-gray-300 hover:text-blue-400">
            <Mail className="mr-2" size={30} />
            Email
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactContent;
