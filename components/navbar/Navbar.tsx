"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import DesktopNavMenu from "./DesktopNavMenu";
import MobileNavMenu from "./MobileNavMenu";

interface NavbarProps {
  initialColor: "white" | "black";
}

// const Navbar: React.FC<NavbarProps> = ({ initialColor }) => {
//   const [navbarColor, setNavbarColor] = useState<"white" | "black">(
//     initialColor
//   );

//   useEffect(() => {
//     const sections = document.querySelectorAll<HTMLElement>("section");

//     const handleScroll = () => {
//       let targetColor: "white" | "black" = "white";
//       for (const section of sections) {
//         const rect = section.getBoundingClientRect();
//         if (rect.top <= 0 && rect.bottom >= 0) {
//           targetColor = section.getAttribute("data-nav-color") as
//             | "white"
//             | "black";
//           break;
//         }
//       }
//       setNavbarColor(targetColor);
//     };

//     const setInitialNavbarColor = () => {
//       handleScroll();
//     };

//     window.addEventListener("scroll", handleScroll);
//     window.addEventListener("load", setInitialNavbarColor);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       window.removeEventListener("load", setInitialNavbarColor);
//     };
//   }, []);

//   return (
//     <motion.nav
//       initial={false}
//       animate={{
//         borderBottomColor: navbarColor === "white" ? "#FFFFFF" : "#000000",
//         color: navbarColor === "white" ? "#FFFFFF" : "#000000",
//       }}
//       transition={{ duration: 0.3 }}
//       className={`fixed top-0 left-0 w-full p-4 font-bold transition-all ${
//         navbarColor === "white"
//           ? "text-white border-white"
//           : "text-black border-black"
//       } border-b bg-transparent`}>
//       <ul className="flex justify-around space-x-4">
//         <li className="hover:text-gray-400 cursor-pointer">Home</li>
//         <li className="hover:text-gray-400 cursor-pointer">About</li>
//         <li className="hover:text-gray-400 cursor-pointer">Contact</li>
//       </ul>
//     </motion.nav>
//   );
// };

// export default Navbar;
const Navbar: React.FC<NavbarProps> = ({ initialColor }) => {
  const [navbarColor, setNavbarColor] = useState<"white" | "black">(
    initialColor
  );

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("section");

    //     const handleScroll = () => {
    //       let targetColor: "white" | "black" = "white";
    //       for (const section of sections) {
    //         const rect = section.getBoundingClientRect();
    //         if (rect.top <= 0 && rect.bottom >= 0) {
    //           targetColor = section.getAttribute("data-nav-color") as
    //             | "white"
    //             | "black";
    //           break;
    //         }
    //       }
    //       setNavbarColor(targetColor);
    //     };
    const handleScroll = () => {
      let targetColor: "white" | "black" = "white";
      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom >= 0) {
          const color = section.getAttribute("data-nav-color");
          console.log(`Detected section color: ${color}`); // Debugging
          targetColor = color as "white" | "black";
          break;
        }
      }
      setNavbarColor(targetColor);
    };

    const setInitialNavbarColor = () => {
      handleScroll();
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("load", setInitialNavbarColor);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("load", setInitialNavbarColor);
    };
  }, []);

  return (
    <motion.nav
      initial={false}
      animate={{
        borderBottomColor: navbarColor === "white" ? "#FFFFFF" : "#000000",
        color: navbarColor === "white" ? "#FFFFFF" : "#000000",
      }}
      transition={{ duration: 0.2 }}
      className={`fixed top-0 left-0 w-full p-4 font-bold transition-all mx-auto px-5 sm:px-10 z-30  ${
        navbarColor === "white"
          ? "text-white border-white"
          : "text-black border-black"
      } border-b bg-transparent`}>
      <div>
        <div className="flex justify-between  items-center">
          <div className="flex-shrink-0 ">
            <div className="w-[130px]">kuki</div>
          </div>
          <DesktopNavMenu />
          <MobileNavMenu />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
