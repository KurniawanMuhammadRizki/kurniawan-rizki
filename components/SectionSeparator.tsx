import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Background from "../public/1.jpg";

interface SectionSeparatorProps {
  imgUrl: string;
  title: string;
  subTitle: string;
  id: string;
}
const SectionSeparator: React.FC<SectionSeparatorProps> = ({
  imgUrl,
  title,
  subTitle,
  id,
}) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div
      id={id}
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}>
      <div className="relative z-10 p-20 mix-blend-difference text-white w-full h-full flex flex-col justify-between">
        <p className="w-[50vw] text-[2vw] font-bold self-end uppercase mix-blend-difference">
          {subTitle}
        </p>
        <p className="text-[5vw] font-extrabold uppercase mix-blend-difference">
          {title}
        </p>
      </div>
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <Image
            src={imgUrl}
            fill
            alt="Background image"
            style={{ objectFit: "cover" }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default SectionSeparator;
