import React from "react";

import videoBack from "../assets/beachVid.mp4";

export default function Hero() {
  return (
    <div className="w-full h-screen relative">
      <video
        className="w-full h-full object-cover"
        src={videoBack}
        autoPlay
        loop
        muted
      />
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/30"></div>
    </div>
  );
}
