import { motion } from "framer-motion";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const modalVariants = {
  hidden: {
    rotateX: -90,
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    rotateX: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 14,
    },
  },
  exit: {
    rotateX: 90,
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.4,
      ease: "easeIn",
    },
  },
};

const AboutModal = ({ onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={onClose}
      style={{ perspective: 1200 }}
    >
      <motion.div
        className="bg-white rounded-2xl p-6 max-w-lg w-[90%] relative"
        variants={modalVariants}
        onClick={(e) => e.stopPropagation()}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Close button */}
        <button
          className="absolute top-3 right-3 text-xl font-bold"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className="text-3xl font-Bebas mb-4 text-[#5551e3]">
          More About Me
        </h2>

        <p className="font-Gruppo text-lg mb-3">
          I'm a passionate full-stack developer building modern, scalable, and user-friendly web applications.
          I enjoy blending frontend creativity with backend logic and exploring AI-powered solutions.
        </p>

        <ul className="font-Gruppo text-lg space-y-2">
          <li>🚀 React.js, Tailwind CSS, and Framer Motion</li>
          <li>⚡ Spring Boot, Java, MySQL for robust backends</li>
          <li>🧠 AI & ML integration for intelligent apps</li>
          <li>💻 Chrome Extensions & productivity tools</li>
          <li>🎯 Gamification & reinforcement learning for user engagement</li>
          <li>📈 Always experimenting with new technologies</li>
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default AboutModal;
