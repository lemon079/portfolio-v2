import React from "react";
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
