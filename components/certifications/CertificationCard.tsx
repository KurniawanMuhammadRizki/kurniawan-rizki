"use client";
import Image from "next/image";
import { motion, useTransform, useScroll, MotionValue } from "framer-motion";
import React, { useRef } from "react";

type CertificationCardProps = {
  i: number;
  title: string;
  imgUrl: string;
  color: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  issuer: string;
  issued: string;
  credential?: string;
};

const CertificationCard: React.FC<CertificationCardProps> = ({
  i,
  title,
  imgUrl,
  color,
  progress,
  range,
  targetScale,
  issuer,
  issued,
  credential,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="min-h-screen flex items-center justify-center sticky top-0">
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="relative flex flex-col rounded-3xl p-6 w-full max-w-4xl h-[450px] md:h-[300px] mx-4 lg:mx-auto shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">{title}</h2>

        <div className="flex flex-row gap-12 h-full">
          <div className="w-2/5 flex flex-col justify-start">
            <p className="text-2xl font-medium text-gray-900">{issuer}</p>
            <p className="text-gray-600 mt-2 text-lg">{issued}</p>
            <p className="text-gray-700 mt-1">{credential}</p>
          </div>

          <div className="relative w-3/5 h-full rounded-3xl overflow-hidden bg-gray-100">
            <motion.div className="w-full h-full" style={{ scale: imageScale }}>
              <Image fill src={imgUrl} alt={title} className="object-cover" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CertificationCard;
