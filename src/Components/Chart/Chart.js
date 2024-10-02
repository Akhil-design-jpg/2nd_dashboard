import React from "react";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Core 1", value: 25 },
  { name: "Core 2", value: 30 },
  { name: "Core 3", value: 20 },
  { name: "Core 4", value: 25 },
  { name: "Core 5", value: 35 },
  { name: "Core 6", value: 30 },
];

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#FE1001",
  "#EEEEEE",
];

const CpuCoreDistribution = () => {
  return (
    <div className=" ml-4 w-96">
      <ResponsiveContainer className="mt-2" width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index} ${entry}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CpuCoreDistribution;
