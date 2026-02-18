"use client";

import { HackerBackground } from "../ui/hacker-background";

export function WebLandingBG({ children }) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden rounded-lg border border-gray-700 bg-black flex flex-col items-center justify-center">
      {/* Hacker matrix background */}
      <HackerBackground
        color="#22d3ee"
        fontSize={12}
        speed={1.5}
        className="absolute top-0 left-0 h-full w-full opacity-90"
      />

      {/* Overlay content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center text-white p-4">
        {children}
      </div>
    </div>
  );
}

export default WebLandingBG;
