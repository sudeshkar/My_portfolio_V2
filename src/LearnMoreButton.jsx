import React from "react";
import { motion } from "framer-motion";

const Button = ({ onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{
        scale: 1.08,
        boxShadow: "0px 0px 20px rgba(59,130,246,0.6)",
      }}
      whileTap={{ scale: 0.9 }}
      className="md:mt-5 md:w-1/5 w-[150px] mt-2 relative md:p-2 p-1 text-black text-base font-bold rounded-full overflow-hidden bg-white transition-all duration-400 ease-in-out shadow-md hover:text-black"
    >
      
      <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-300 -z-10 translate-x-[-100%] hover:translate-x-0 transition-transform duration-500 ease-in-out rounded-full" />

      <span className="relative z-10">Learn More ➡️</span>
    </motion.button>
  );
};

export default Button;
