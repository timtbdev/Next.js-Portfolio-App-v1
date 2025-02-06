"use client";

import React from "react";
import ScrollToTop from "react-scroll-to-top";

const ScrollToTopButton = () => {
  return (
    <>
      <ScrollToTop
        style={{
          height: "40px",
          width: "40px",
          borderRadius: "50%",
        }}
        className="!bottom-5 !right-5 rounded-full bg-gray-50 p-2.5 !shadow-sm !ring-1 !ring-gray-300 dark:bg-zinc-800 dark:!ring-zinc-700"
        smooth
        component={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            className="h-5 w-5 rotate-90 text-gray-600 dark:text-zinc-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        }
      />
    </>
  );
};

export default ScrollToTopButton;
