import React from "react";
import Animation from "./Animation/Animation";

const CollapseComponent = () => {
  return (
    <div className="bg-gray-800 text-blue-200 w-screen border-4 mt-2 p-4">
      <div className="border-4 mt-2 p-4 text-blue-200">
        <h2 className="font-bold text-xl">About CPU Preferences</h2>
        <br />

        <ul className="list-disc pl-5 space-y-4">
          <li>
            <strong>Introduction:</strong>
            <p>
              When it comes to building or upgrading a computer, one of the most
              critical components to consider is the CPU (Central Processing
              Unit). The CPU serves as the brain of the computer, executing
              instructions and processing data. Understanding CPU preferences is
              essential for users who want to optimize performance based on
              their specific needs.
            </p>
          </li>

          <li>
            <strong>Performance Needs:</strong>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Gaming:</strong> Gamers often prefer CPUs with higher
                clock speeds and multiple cores to ensure smooth gameplay and
                quick response times.
              </li>
              <li>
                <strong>Content Creation:</strong> Users involved in video
                editing, 3D rendering, or graphic design benefit from CPUs with
                more cores and threads to handle multitasking efficiently.
              </li>
              <li>
                <strong>Everyday Use:</strong> For basic tasks like web browsing
                and document editing, mid-range CPUs with decent clock speeds
                are usually sufficient.
              </li>
            </ul>
          </li>

          <li>
            <strong>Price vs. Performance:</strong>
            <p>
              It's important to find the right balance between price and
              performance when choosing a CPU. Higher-end CPUs offer more power
              but may not be necessary for everyday users.
            </p>
          </li>

          <li>
            <strong>Brands and Models:</strong>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Intel Core series (i5, i7, i9) are popular for a range of use
                cases.
              </li>
              <li>
                AMD Ryzen series (Ryzen 5, 7, 9) are known for offering more
                cores at competitive prices.
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <Animation />
    </div>
  );
};

export default CollapseComponent;
