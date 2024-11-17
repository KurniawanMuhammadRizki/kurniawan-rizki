"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import Carousel from "./Carousel";

const ProjectsSection: React.FC = () => {
  // Membuat ref untuk container
  const containerRef = useRef<HTMLDivElement>(null);

  // Menggunakan container sebagai target scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Transform yang sama seperti sebelumnya
  const translateX = useTransform(
    scrollYProgress,
    [0, 0.25, 0.35, 0.55, 0.65, 0.85, 0.95, 1],
    ["0%", "0%", "-100%", "-100%", "-200%", "-200%", "-200%", "-200%"]
  );

  const backgroundOpacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.35, 0.55, 0.65, 0.85],
    [0, 0, 1, 1, 0, 0]
  );

  return (
    <div ref={containerRef} className="relative w-full h-[400vh]">
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
        {/* Background overlay */}
        <motion.div
          className="absolute inset-0 bg-black pointer-events-none"
          style={{ opacity: backgroundOpacity }}
        />

        {/* Container untuk slides */}
        <motion.div className="flex h-full" style={{ x: translateX }}>
          {/* Section 1 */}
          <section className="min-w-full h-full flex flex-col items-center justify-center bg-white text-black">
            <div className="max-w-4xl w-full p-8">
              <h2 className="text-4xl font-bold mt-2 mb-2 flex items-center">
                <Link
                  href="https://your-link.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:underline">
                  Rooms
                  <ArrowUpRight className="w-5 h-5 text-current" />
                </Link>
              </h2>
              <ul className="list-disc pl-5">
                {" "}
                {/* Tambahkan list-disc dan padding */}
                <li>
                  Property rental platform developed collaboratively with a
                  partner
                </li>
                <li>Frontend: Next.js | Backend: Spring with GraphQL</li>
                <li>
                  Role: Full-stack developer, worked on both frontend and
                  backend implementations
                </li>
              </ul>
              {/* <p className="text-xl mb-4">White Background Content</p> */}
              <div className="w-full rounded-lg">
                <Carousel projectsName="rooms" imageNumber={6} />
              </div>
            </div>
          </section>

          {/* Section 2 */}
          {/* <section className="min-w-full h-full flex flex-col items-center justify-center text-white">
            <div className="max-w-4xl w-full p-8">
              <h2 className="text-4xl font-bold mb-4">Section 2</h2>
              <p className="text-xl mb-4">Black Background Content</p>
              <div className="w-full h-64 bg-gray-800 rounded-lg"></div>
            </div>
          </section> */}
          <section className="min-w-full h-full flex flex-col items-center justify-center bg-white text-black">
            <div className="max-w-4xl w-full p-8">
              <h2 className="text-4xl font-bold mt-2 mb-2 flex items-center">
                <Link
                  href="https://your-link.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:underline">
                  Kukivent
                  <ArrowUpRight className="w-5 h-5 text-current" />
                </Link>
              </h2>
              <ul className="list-disc pl-5">
                {" "}
                {/* Tambahkan list-disc dan padding */}
                <li>Event management platform</li>
                <li>Built and maintained Spring REST API architecture</li>
                <li>Role: Backend developer</li>
              </ul>
              {/* <p className="text-xl mb-4">White Background Content</p> */}
              <div className="w-full rounded-lg">
                <Carousel projectsName="kukivent" imageNumber={5} />
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="min-w-full h-full flex flex-col items-center justify-center bg-white text-black">
            <div className="max-w-4xl w-full p-8">
              <h2 className="text-4xl font-bold mt-2 mb-2 flex items-center">
                <Link
                  href="https://your-link.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:underline">
                  Kukilabs
                  <ArrowUpRight className="w-5 h-5 text-current" />
                </Link>
              </h2>
              <ul className="list-disc pl-5">
                {" "}
                {/* Tambahkan list-disc dan padding */}
                <li>Solo project: Company profile website</li>
                <li>Fully developed using Next.js and Typescript</li>
                <li>Handled complete development lifecycle</li>
              </ul>
              {/* <p className="text-xl mb-4">White Background Content</p> */}
              <div className="w-full rounded-lg">
                <Carousel projectsName="kukilabs" imageNumber={6} />
              </div>
            </div>
          </section>
        </motion.div>

        {/* Progress indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          <motion.div
            className="w-3 h-3 rounded-full bg-black"
            style={{
              opacity: useTransform(scrollYProgress, [0, 0.35], [1, 0.3]),
            }}
          />
          <motion.div
            className="w-3 h-3 rounded-full bg-black"
            style={{
              opacity: useTransform(
                scrollYProgress,
                [0.35, 0.55, 0.65],
                [0.3, 1, 0.3]
              ),
            }}
          />
          <motion.div
            className="w-3 h-3 rounded-full bg-black"
            style={{
              opacity: useTransform(scrollYProgress, [0.65, 0.85], [0.3, 1]),
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
