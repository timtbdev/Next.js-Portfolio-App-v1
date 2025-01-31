"use client";

import { Button } from "@/components/ui/button";
import { CircleArrowDownIcon } from "lucide-react";
import ScrollIntoView from "react-scroll-into-view";
import HorizontalLine from "./horizontal-line";
import VerticalLine from "./vertical-line";

const SelectedProjectsButton: React.FC = () => (
  <div className="mt-16 flex flex-col justify-center">
    <div className="relative mx-auto w-full">
      <HorizontalLine />
      <div className="relative flex justify-center">
        <ScrollIntoView selector="#selected-projects">
          <Button
            variant="outline"
            className="border border-gray-300 bg-gray-50 text-gray-600 hover:bg-gray-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800"
          >
            <CircleArrowDownIcon className="mr-1.5 h-4 w-4" />
            Selected Projects
          </Button>
        </ScrollIntoView>
      </div>
    </div>
    <VerticalLine />
  </div>
);

export default SelectedProjectsButton;
