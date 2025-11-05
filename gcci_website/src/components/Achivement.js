"use client";

import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Saira } from "next/font/google";

// ✅ Import Saira font
const saira = Saira({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const Achivement = () => {
  const dataSets = [
    {
      title: "Supported for 43 JIPM Awards",
      subtitle: "Present: (Post July 2017)",
      color: "#0A36A1",
      centerValue: 43,
      data: [
        { name: "Excellence Cat. A Award", value: 31, color: "#0A36A1" },
        { name: "Const. in Excellence Award", value: 9, color: "#3f51b5" },
        { name: "Special Award", value: 3, color: "#1a237e" },
      ],
    },
    {
      title: "Supported for 21 JIPM Awards",
      subtitle: "Historical: (Prior July 2017)",
      color: "#0A36A1",
      centerValue: 21,
      data: [
        { name: "Excellence Cat. A Award", value: 16, color: "#0A36A1" },
        { name: "Excellence Cat. B Award", value: 3, color: "#3f51b5" },
        { name: "Const. in Excellence Award", value: 2, color: "#1a237e" },
      ],
    },
    {
      title: "In Progress 16 JIPM Awards",
      subtitle: "Future: (Post July 2024)",
      color: "#0A36A1",
      centerValue: 16,
      data: [
        { name: "Excellence Cat. A Award", value: 3, color: "#0A36A1" },
        { name: "Const. in Excellence Award", value: 7, color: "#3f51b5" },
        { name: "Special Award", value: 5, color: "#1a237e" },
        { name: "Advanced Special Award", value: 1, color: "#0d47a1" },
      ],
    },
  ];

  return (
    <section
      className={`py-20 px-6 md:px-16 bg-white ${saira.className}`} // ✅ Font applied here
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-[#040404]">
          Our Achievements
        </h2>
        <p className="text-xl text-gray-800 mt-3">
          <span className="font-bold text-black">64</span>{" "}
          <span className="text-[#c0392b] font-semibold">JIPM Awards</span> with{" "}
          <span className="font-bold text-black">128</span>{" "}
          <span className="text-[#c0392b] font-semibold">Assessments</span>
        </p>
      </motion.div>

      {/* Donut Charts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {dataSets.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className="text-center"
          >
            <h3 className="font-semibold text-lg text-[#363737]">{item.title}</h3>
            <p className="text-sm mt-1 text-gray-700">{item.subtitle}</p>

            <div className="relative w-[250px] h-[250px] mx-auto mt-6">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={item.data}
                    innerRadius={70}
                    outerRadius={100}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {item.data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-5xl font-extrabold text-black">
                  {item.centerValue}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer Legend */}
      <div className="text-center mt-16">
        <p className="text-sm text-gray-700 font-medium">
          <span className="text-[#3f51b5] font-bold">■</span> Excellence Cat. B Award &nbsp;
          <span className="text-[#e3e72e] font-bold">■</span> Excellence Cat. A Award &nbsp;
          <span className="text-[#43c6e3] font-bold">■</span> Const. in Excellence Award &nbsp;
          <span className="text-[#790781] font-bold">■</span> Special Award &nbsp;
          <span className="text-[#0f5406] font-bold">■</span> Advanced Special Award
        </p>

        <p className="mt-6 text-sm uppercase tracking-wide text-[#f97316] font-semibold">
          TRUST | PRINCIPLE | METICULOUSNESS
        </p>
      </div>
    </section>
  );
};

export default Achivement;
