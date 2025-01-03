import { Button } from "@/components/ui/button";
import { CircleArrowDownIcon } from "lucide-react";
import HorizontalLine from "./horizontal-line";
import VerticalLine from "./vertical-line";

export default function SelectedProjectsButton() {
  return (
    <div className="mt-16 flex flex-col justify-center">
      <div className="relative mx-auto w-full">
        <HorizontalLine />
        {/* Button */}
        <div className="relative flex justify-center">
          <Button
            asChild
            variant="outline"
            className="text-gray-600 dark:text-zinc-400"
          >
            <a href="#selected-projects">
              <CircleArrowDownIcon className="mr-1.5 h-4 w-4" /> Selected
              Projects
            </a>
          </Button>
        </div>
      </div>
      <VerticalLine />
    </div>
  );
}
