"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide loading screen once the page is fully loaded
    const handleLoad = () => {
      setIsLoading(false);
    };

    // Check if document is already loaded
    if (document.readyState === "complete") {
      setIsLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (!isLoading) return null;

  return <div className="fixed inset-0 z-50 backdrop-blur-md bg-black/50" />;
}
