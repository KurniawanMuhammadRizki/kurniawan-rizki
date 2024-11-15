import { NavigationMenu, NavigationMenuList } from "../ui/navigation-menu";
import DesktopNavItems from "./DesktopNavItems";

const DesktopNavMenu: React.FC = () => {
  return (
    <div className="flex items-center px-2  justify-between">
      <div className="hidden md:block">
        <NavigationMenu className="bg-transparent">
          <NavigationMenuList>
            <DesktopNavItems />
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};
export default DesktopNavMenu;
