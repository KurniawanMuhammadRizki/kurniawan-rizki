import { goToDiv } from "@/utils/scroll/goToDiv";
import { motion } from "framer-motion";

const DesktopNavItems: React.FC = () => {
  return (
    <div className="flex items-center space-x-8">
      {[
        { label: "Projects", href: "projects" },
        { label: "About", href: "about" },
        { label: "Contact", href: "contact" },
      ].map((item, index) => (
        <motion.div
          key={index}
          whileHover={{
            y: -5,
            rotateY: 15,
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 10,
          }}
          className="relative cursor-pointer"
          onClick={() => goToDiv(item.href)}>
          <a className="text-sm font-medium">{item.label}</a>
        </motion.div>
      ))}
    </div>
  );
};

export default DesktopNavItems;
