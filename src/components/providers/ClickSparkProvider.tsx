"use client";

import React, { useState, useEffect } from "react";
import ClickSpark from "@/components/ui/ClickSpark";

interface ClickSparkProviderProps {
  children: React.ReactNode;
  sparkColor?: string | string[];
  sparkSize?: number;
  sparkRadius?: number;
  sparkCount?: number;
  duration?: number;
}

const ClickSparkProvider: React.FC<ClickSparkProviderProps> = ({
  children,
  sparkColor = "#fff",
  sparkSize = 10,
  sparkRadius = 20,
  sparkCount = 8,
  duration = 400,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile (screen width < 768px)
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Listen for resize events
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Don't render ClickSpark on mobile
  if (isMobile) {
    return <>{children}</>;
  }

  return (
    <ClickSpark
      sparkColor={sparkColor as string}
      sparkSize={sparkSize}
      sparkRadius={sparkRadius}
      sparkCount={sparkCount}
      duration={duration}
    >
      {children}
    </ClickSpark>
  );
};

export default ClickSparkProvider;
