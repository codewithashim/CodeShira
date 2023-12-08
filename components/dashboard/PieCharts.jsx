"use client";

const {
  Pie,
  Tooltip,
  Legend,
  PieChart,
  Cell,
  ResponsiveContainer,
} = require("recharts");

const data = [
  { name: "Direct", value: 400 },
  { name: "Referal", value: 300 },
  { name: "Organic", value: 300 },
];
const COLORS = ["#336CFB", "#336CFB", "#336CFB", "#336CFB"];
const PieChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart width={350} height={350}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={75}
          fill="#336CFB"
        />

        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};
export default PieChartComponent;
