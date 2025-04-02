import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Topbar() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setVisible(true);
      }, 1200);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-8 bg-sidebarbg dark:bg-sidebarbgd text-gray-300 dark:text-gray-700 flex items-center z-50 overflow-hidden">
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ x: 250, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { duration: 2, ease: "easeOut" } }}
            exit={{
              x: 0,
              opacity: 0,
              transition: { duration: 1, ease: "easeInOut" },
            }}
            className="absolute text-sm font-medium pl-19">
            🚀 Welcome to KevinYih's Studio！
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Topbar;
