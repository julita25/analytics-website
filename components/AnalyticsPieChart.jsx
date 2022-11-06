/* eslint-disable react/no-array-index-key */
import React from "react";
import {
  PieChart, Pie, Tooltip, Cell
} from "recharts";
import { instanceOf } from "prop-types";

const COLORS = ["#151965", "#570A57", "#C06014", "#379237", "#911F27"];

const AnalyticsPieChart = ({ data }) => (
  <PieChart width={550} height={400}>
    <Pie
      dataKey="quantitySold"
      data={data}
      cx="50%"
      cy="50%"
      outerRadius={120}
      label
    >
      {data.map((item, index) => {
        console.log(index);
        return (
          <Cell key={`cell-${index}`} fill={COLORS[index]} />
        );
      })}
    </Pie>
    <Tooltip />
  </PieChart>
);

AnalyticsPieChart.propTypes = {
  data: instanceOf(Array).isRequired
};

export default AnalyticsPieChart;
