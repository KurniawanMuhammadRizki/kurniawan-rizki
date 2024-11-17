"use client";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ImageAnimationWrapperProps {
  children: React.ReactNode;
  transition?: {
    duration?: number;
    ease?: string | number[];
    delay?: number;
  };
  initialScale?: number;
  className?: string;
}

const ImageAnimationWrapper: React.FC<ImageAnimationWrapperProps> = ({
  children,
  transition = {
    duration: 0.8,
    ease: "easeOut",
  },
  initialScale = 0.1,
  className = "",
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        scale: 1,
        transition: {
          ...transition,
          opacity: { duration: transition.duration! * 0.8 },
        },
      });
    } else {
      controls.start({
        opacity: 0,
        scale: initialScale,
      });
    }
  }, [controls, inView, transition, initialScale]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: initialScale }}
      animate={controls}>
      {children}
    </motion.div>
  );
};

export default ImageAnimationWrapper;
