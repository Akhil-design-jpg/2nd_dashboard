import React, { useState } from "react";
import { FiInfo } from "react-icons/fi";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import Chart from "./Chart/Chart";

function Home() {
  const [query, setQuery] = useState(false);
  const [text, setText] = useState("");
  const handleChange = (event) => {
    setText(event.target.value);
    console.log("Helo");
  };

  const button = () => {
    setQuery(!query);
  };

  const data = [
    { name: "2004", usage: 20 },
    { name: "2008", usage: 35 },
    { name: "2012", usage: 45 },
    { name: "2016", usage: 60 },
    { name: "2020", usage: 75 },
    { name: "2024", usage: 50 },
  ];

  return (
    <div className="w-full align bg-gray-800">
      <div className="bg-gray-800 h-12 justify-end flex items-center">
        <input
          className="border-2 mr-2 h-8 w-56 mb-2 mt-3 text-white bg-black"
          text=""
          placeholder=" Search here..."
        ></input>
        <button className="mr-2 bg-gray-600 text-white w-16 mt-2 rounded-lg h-9">
          Submit
        </button>
      </div>

      <div className="flex-row">
        <div className="bg-gray-700  w-full flex h-14">
          <select
            className=" w-48 text-center form-select ml-4 mt-2 w-24 mr-4 h-10 rounded-md border-2 text-white bg-black"
            aria-label="Default select example"
          >
            <option selected>Classes</option>
            <option value="1">Class 1</option>
            <option value="2">Class 2</option>
            <option value="3">Class 3</option>
          </select>
          <input
            className="w-96 mt-2 rounded-md border-2 h-10 text-white bg-black"
            text=""
            placeholder=" Enter Product Serial Number..."
          />
        </div>
        <div className="flex gap-8">
          <button className="border-2 bg-black text-gray-200 w-36 h-10 mt-2 hover:text-blue-200 ml-16">
            Query Type
          </button>
          <button className=" ml-4 border-2 bg-black text-gray-200 w-36 h-10 mt-2 hover:text-blue-200">
            Range
          </button>
          <button className=" ml-4 border-2 bg-black text-gray-200 w-36 h-10 mt-2 hover:text-blue-200">
            Instant
          </button>
          <button
            className=" ml-4 border-2 bg-black text-gray-200 w-36 h-10 mt-2 hover:text-blue-200"
            onClick={button}
          >
            <p className="button">Query</p>
          </button>

          <button className=" ml-4 border-2 bg-black text-gray-200 w-36 h-10 mt-2 hover:text-blue-200">
            <div className="ml-2 gap-2 flex">
              <FiInfo size={24} color="gray" /> Info
            </div>
          </button>
        </div>
        <div className="mt-16">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="usage"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
          <p className="text-gray-200 text-center text-2xl">
            <i>Growth of Processors over these years</i>
          </p>
        </div>
      </div>
      {/* <div className="flex ml-2 mr-2">
         <div className="border-2">
          <Chart />
         </div>
         <div className=" ml-16 border-2 w-96 h-52">
<img className  = 'h-64 w-64 mt-8 mr-2'  src = "/file.png" alt = "IMG"></img>
</div>
      </div>
         
      
      */}
      <div className="ml-4 flex gap-24">
        <div className="flex">
          <div className="ml-10 w-full border-4 border-cyan-400">
            <Chart />
          </div>
        </div>
        <div className="w-full border-4 text-blue-200 text-center text-xl">
          <strong className="text-xl mb-4"> Architexture Introduction: </strong>
          <br></br>
          <strong className="mt-2">
            <i>Intel vs. AMD:</i>
          </strong>
          <br></br>
          The ongoing rivalry between Intel and AMD has led to significant
          advancements in CPU technology. Intel CPUs typically excel in
          single-threaded performance, making them suitable for tasks requiring
          high clock speeds. In contrast, AMD processors often offer more cores
          at competitive prices, which can be beneficial for multitasking and
          parallel processing.
          <hr></hr>
          More on About
        </div>
      </div>
      <div className="flex-row">
        {query && (
          <textarea
            className="mt-4 w-full h-20 border-2 text-blue-200 bg-gray-800"
            value={text} // Bind the textarea value to state
            onChange={handleChange} // Update state on change
            placeholder="Type your message here..."
          />
        )}
        {query && (
          <button className="border-4 w-24 h-10 mt-6 ml-2 text-blue-200">
            Submit
          </button>
        )}
      </div>
    </div>
  );
}

export default Home;
