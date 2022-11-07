/* eslint-disable react/no-array-index-key */
import React from "react";
import {
  BarChart, XAxis, YAxis, Tooltip, Bar, Cell
} from "recharts";
import { instanceOf } from "prop-types";
import { COLORS } from "../constants/chartsCostants";

const AnalyticsBarChart = ({ data }) => (
  <BarChart
    width={450}
    height={400}
    data={data}
    margin={{
      top: 10,
      right: -10,
      left: 0,
      bottom: 0
    }}
  >
    <XAxis dataKey="dayOfTheWeek" />
    <YAxis />
    <Tooltip />
    <Bar dataKey="income" fill="#8884d8">
      {data.map((item, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index]} />
      ))}
    </Bar>
  </BarChart>
);

AnalyticsBarChart.propTypes = {
  data: instanceOf(Array).isRequired
};

export default AnalyticsBarChart;
