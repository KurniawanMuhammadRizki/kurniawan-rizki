"use client";
import Navbar from "@/components/navbar/Navbar";
import React, { useState, useEffect } from "react";

import { motion, useScroll, useTransform } from "framer-motion";

const Page = () => {
  const { scrollYProgress } = useScroll();

  // Function untuk membuat array control points
  const createControlPoints = (start: any, peak: any, end: any) => [
    [start, 0], // mulai dari 0
    [peak, 1], // naik ke full height
    [end, 0], // turun kembali ke 0
  ];

  // Membuat array transformasi untuk setiap kolom
  const columns = [
    useTransform(
      scrollYProgress,
      [0, 0.65, 0.8], // control points kolom 1
      [0, 0.15, 1]
    ),
    useTransform(
      scrollYProgress,
      [0.05, 0.52, 0.35], // control points kolom 2
      [0, 0.5, 1]
    ),
    useTransform(
      scrollYProgress,
      [0.1, 0.25, 0.4], // control points kolom 3
      [0, 0.7, 1]
    ),
    useTransform(
      scrollYProgress,
      [0.15, 0.35, 0.45], // control points kolom 4
      [0, 0.1, 1]
    ),
    useTransform(
      scrollYProgress,
      [0, 0.2, 0.1],
      // [0.2, 0.35, 0.5], // control points kolom 5
      [0, 0.5, 1]
    ),
  ];

  // Transform untuk section kedua
  //   const secondSetColumns = [
  //     useTransform(scrollYProgress, [0.5, 0.65, 0.8], [0, 1, 0]),
  //     useTransform(scrollYProgress, [0.55, 0.7, 0.85], [0, 1, 0]),
  //     useTransform(scrollYProgress, [0.6, 0.75, 0.9], [0, 1, 0]),
  //     useTransform(scrollYProgress, [0.65, 0.8, 0.95], [0, 1, 0]),
  //     useTransform(scrollYProgress, [0.7, 0.85, 1], [0, 1, 0]),
  //   ];

  return (
    <div className="relative">
      {/* First set of columns (Black) */}
      <motion.div className="fixed top-0 left-0 w-full h-screen flex z-10">
        {columns.map((heightProgress, index) => (
          <motion.div
            key={`black-${index}`}
            className="flex-1 bg-black origin-bottom"
            style={{
              scaleY: heightProgress,
              marginLeft: index > 0 ? "0px" : "0",
            }}
          />
        ))}
      </motion.div>

      {/* Second set of columns (White) */}
      {/* <motion.div className="fixed top-0 left-0 w-full h-screen flex z-10">
        {secondSetColumns.map((heightProgress, index) => (
          <motion.div
            key={`white-${index}`}
            className="flex-1 bg-white origin-bottom"
            style={{
              scaleY: heightProgress,
              marginLeft: index > 0 ? "0px" : "0",
            }}
          />
        ))}
      </motion.div> */}

      {/* Sections */}
      <motion.section
        data-nav-color="black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, margin: "-90%" }}
        className="h-screen bg-white flex items-center justify-center text-2xl font-mono relative z-20">
        Section 1 - White Background
      </motion.section>

      <motion.section
        data-nav-color="white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, margin: "-90%" }}
        className="h-screen bg-black flex items-center justify-center text-2xl text-white font-sans relative z-20">
        Section 2 - Black Background
      </motion.section>

      <motion.section
        data-nav-color="black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, margin: "-90%" }}
        className="h-screen bg-white flex items-center justify-center text-2xl relative z-20">
        Section 3 - White Background
      </motion.section>
    </div>
  );
};

export default Page;
// const Page: React.FC = () => {
//   return (
//     <div>
//       <section
//         data-nav-color="black"
//         className="h-screen bg-white flex items-center justify-center text-2xl font-[family-name:var(--font-geist-mono)]">
//         Section 1 - White Background
//       </section>
//       <section
//         data-nav-color="white"
//         className="h-screen bg-black flex items-center justify-center text-2xl text-white font-[family-name:var(--font-geist-sans)]">
//         Section 2 - Black Background
//       </section>
//       <section
//         data-nav-color="black"
//         className="h-screen bg-white flex items-center justify-center text-2xl">
//         Section 3 - White Background
//       </section>
//       <div className="h-5"></div>
//     </div>
//   );
// };

// export default Page;

// const Page: React.FC = () => {
//   const [navbarColor, setNavbarColor] = useState<"white" | "black">("white");

//   useEffect(() => {
//     const sections = document.querySelectorAll("section");

//     const setInitialNavbarColor = () => {
//       sections.forEach((section) => {
//         const rect = section.getBoundingClientRect();
//         if (rect.top <= 0 && rect.bottom >= 0) {
//           const sectionColor = section.getAttribute("data-nav-color") as
//             | "white"
//             | "black";
//           setNavbarColor(sectionColor);
//         }
//       });
//     };

//     // Jalankan saat pertama kali halaman dimuat
//     setInitialNavbarColor();

//     // Menggunakan Intersection Observer
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting && entry.boundingClientRect.top <= 0) {
//             const sectionColor = entry.target.getAttribute("data-nav-color") as
//               | "white"
//               | "black";
//             setNavbarColor(sectionColor);
//           }
//         });
//       },
//       {
//         threshold: 0,
//         rootMargin: "0px 0px -100% 0px",
//       }
//     );

//     sections.forEach((section) => observer.observe(section));

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div>
//       <Navbar color={navbarColor} />
//       <section
//         data-nav-color="black"
//         className="h-screen bg-white flex items-center justify-center text-2xl font-[family-name:var(--font-geist-mono)]">
//         Section 1 - White Background
//       </section>
//       <section
//         data-nav-color="white"
//         className="h-screen bg-black flex items-center justify-center text-2xl text-white font-[family-name:var(--font-geist-sans)]">
//         Section 2 - Black Background
//       </section>
//       <section
//         data-nav-color="black"
//         className="h-screen bg-white flex items-center justify-center text-2xl">
//         Section 3 - White Background
//       </section>
//     </div>
//   );
// };

// export default Page;
