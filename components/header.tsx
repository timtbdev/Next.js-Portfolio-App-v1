import DesktopNavigation from "@/components/navigation/desktopNavigation";
import MobileNavigation from "@/components/navigation/mobileNavigation";

export default function Header() {
  return (
    <div className="sticky top-0 z-50 border-b-[1.2px] border-gray-300 bg-white shadow-sm dark:border-gray-500 dark:bg-gray-800">
      {/* Desktop navigation component */}
      <DesktopNavigation />
      {/* Mobile navigation component */}
      <MobileNavigation />
    </div>
  );
}
