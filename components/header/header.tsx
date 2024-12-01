import DesktopNavigation from "./desktop-navigation";
import MobileNavigation from "./mobile-navigation";

export default function Header() {
  return (
    <div className="sticky top-0 z-50 border-b-[1.2px] border-gray-200 bg-white shadow-sm dark:border-gray-600 dark:bg-gray-800">
      <DesktopNavigation />
      <MobileNavigation />
    </div>
  );
}
