import { NavigationMenuItem, NavigationMenuLink } from "../ui/navigation-menu";
import { motion } from "framer-motion";
const DesktopNavItems: React.FC = () => {
  return (
    <div className="flex items-center space-x-8">
      {[
        { label: "Projects", href: "#projects" },
        { label: "About", href: "#about" },
        { label: "Contact", href: "#contact" },
      ].map((item, index) => (
        <motion.div
          key={index}
          whileHover={{
            y: -5, // Bergerak sedikit ke atas
            rotateY: 15, // Sedikit efek rotasi
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 10,
          }}
          className="relative cursor-pointer">
          <a href={item.href} className="text-sm font-medium">
            {item.label}
          </a>
        </motion.div>
      ))}
    </div>
  );
};

export default DesktopNavItems;
