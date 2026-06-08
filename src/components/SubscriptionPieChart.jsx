import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "Active", value: 85 },
  { name: "Pending", value: 20 },
  { name: "Expired", value: 15 }
];

const COLORS = [
  "#22c55e",
  "#f59e0b",
  "#ef4444"
];

function SubscriptionPieChart({ darkMode }) {

  return (

    <div
      className={`p-6 rounded-xl shadow ${
        darkMode
          ? "bg-slate-800 text-white"
          : "bg-white text-black"
      }`}
    >

      <h2 className="text-xl font-bold mb-4">
        Subscription Status
      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >

        <PieChart>

          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={100}
            label
          >

            {data.map((entry, index) => (

              <Cell
                key={index}
                fill={COLORS[index]}
              />

            ))}

          </Pie>

          <Tooltip />

          <Legend />

        </PieChart>

      </ResponsiveContainer>

    </div>

  );

}

export default SubscriptionPieChart;