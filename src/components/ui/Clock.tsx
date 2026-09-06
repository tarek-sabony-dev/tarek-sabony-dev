"use client";

import { useState, useEffect } from "react";

export default function Clock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      // Format: 12-hour with seconds, e.g., "3:45:22 PM"
      setTime(now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }));
    };

    update(); // Set immediately so there's no delay
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return <span className="w-full secondary-dark sm:text-lg text-right font-sans">{time}</span>;
}