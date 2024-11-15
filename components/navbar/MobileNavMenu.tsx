import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import MobileNavItems from "./MobileNavItems";

const MobileNavMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white">
          <SheetTitle>Menu</SheetTitle>
          <nav className="mt-6">
            <MobileNavItems />
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};
export default MobileNavMenu;
