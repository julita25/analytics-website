import React from "react";
import {
  PieChart, Pie, Tooltip
} from "recharts";
import { instanceOf } from "prop-types";

const AnalyticsPieChart = ({ data }) => (
  <PieChart width={400} height={400}>
    <Pie
      dataKey="quantitySold"
      isAnimationActive={false}
      data={data}
      cx="50%"
      cy="50%"
      outerRadius={80}
      fill="#8884d8"
      label
    />
    <Tooltip />
  </PieChart>
);

AnalyticsPieChart.propTypes = {
  data: instanceOf(Array).isRequired
};

export default AnalyticsPieChart;
