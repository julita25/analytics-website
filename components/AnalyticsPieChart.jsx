/* eslint-disable react/no-array-index-key */
import React from "react";
import {
  PieChart, Pie, Tooltip, Cell
} from "recharts";
import { instanceOf } from "prop-types";
import { COLORS } from "../constants/chartsCostants";

const AnalyticsPieChart = ({ data }) => (
  <PieChart width={800} height={400}>
    <Pie
      dataKey="quantitySold"
      data={data}
      cx="50%"
      cy="50%"
      outerRadius={120}
      label
    >
      {data.map((item, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index]} />
      ))}
    </Pie>
    <Tooltip />
  </PieChart>
);

AnalyticsPieChart.propTypes = {
  data: instanceOf(Array).isRequired
};

export default AnalyticsPieChart;
