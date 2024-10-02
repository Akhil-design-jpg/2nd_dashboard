import React from "react";
import "./cpuAnimation.css"; // Import the CSS file for animations

const CpuAnimation = () => {
  return (
    // <div className="flex gap-56">
    <div className="flex ml-2 justify-center mt-4 border-2 h-82 gap-48">
      <div className="bg-gray-800 rounded-lg p-5 shadow-lg w-1/4 h-72">
        <h2 className="text-blue-200 text-center text-lg mb-4">CPU</h2>

        <div className="space-y-2">
          <div className="cpu-bar bg-blue-500 animate-bar1"></div>
          <div className="cpu-bar bg-blue-400 animate-bar2"></div>
          <div className="cpu-bar bg-blue-300 animate-bar3"></div>
        </div>

        <div className="bg-gray-600 mt-5 p-2 rounded text-center text-blue-200">
          Processing...
        </div>
      </div>
      <div className="cpu-container">
        <div className="cpu-icon">
          <div className="cpu-core" />
          <div className="cpu-core" />
          <div className="cpu-core" />
        </div>
        <h2 className="cpu-title">CPU Load</h2>
        <p className="cpu-status">Loading...</p>
      </div>
    </div>
  );
};

export default CpuAnimation;
