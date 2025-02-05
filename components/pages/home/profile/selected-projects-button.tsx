"use client";

import ScrollIntoView from "react-scroll-into-view";

const SelectedProjectsButton: React.FC = () => (
  <div className="flex flex-col justify-center">
    <ScrollIntoView selector="#selected-projects">
      <button className="hover:shine mt-4 inline-flex h-14 w-full max-w-xs items-center justify-center rounded-md bg-gradient-to-br from-blue-500 to-blue-600 font-semibold text-white shadow-xl transition hover:scale-[0.98] active:scale-[0.95] dark:from-orange-400 dark:to-orange-500 dark:text-white dark:ring-zinc-700">
        Selected Projects ↓
      </button>
    </ScrollIntoView>
  </div>
);

export default SelectedProjectsButton;
