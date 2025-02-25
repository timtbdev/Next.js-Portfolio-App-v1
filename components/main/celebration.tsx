"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";

export default function Celebration() {
  const path = usePathname();
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    // Set width & height once
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    // Hide confetti after 3 seconds
    const timer = setTimeout(() => setShowConfetti(false), 5000);

    return () => clearTimeout(timer); // Cleanup
  }, []);

  return showConfetti && path === "/" ? (
    <Confetti
      width={dimensions.width}
      height={dimensions.height}
      numberOfPieces={20}
      gravity={0.2}
    />
  ) : null;
}
