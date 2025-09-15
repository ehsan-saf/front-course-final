import { motion } from "motion/react";

export default function PendingDots() {
  return (
    <div className="flex items-center gap-2">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="h-3 w-3 rounded-full bg-blue-500"
          animate={{
            scale: [1, 1.5, 1],
            transition: {
              repeat: Infinity,
              duration: 0.8,
              delay: i * 0.2, // stagger each circle
              ease: "easeInOut",
            },
          }}
        />
      ))}
    </div>
  );
}
