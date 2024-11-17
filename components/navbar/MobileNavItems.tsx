import Link from "next/link";

const MobileNavItems: React.FC = () => {
  return (
    <div className="flex flex-col space-y-4">
      <Link
        href="#projects"
        className="text-sm font-medium hover:text-greenr hover:font-medium">
        Projects
      </Link>
      <Link
        href={"#about"}
        className="text-sm font-medium hover:text-greenr hover:font-medium">
        About
      </Link>
      <Link
        href={"#contact"}
        className="text-sm font-medium hover:text-greenr hover:font-medium">
        Contact
      </Link>
    </div>
  );
};
export default MobileNavItems;
