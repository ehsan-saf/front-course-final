import * as motion from "motion/react-client";

export default function PendingDots() {
  return (
    <div className="flex w-fit items-center gap-2">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="h-3 w-3 rounded-full bg-brand-1"
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
