import React from "react";
import {
  BarChart, XAxis, YAxis, Tooltip, Bar, Legend
} from "recharts";
import { instanceOf } from "prop-types";

const AnalyticsBarChart = ({ data }) => (
  <BarChart
    width={500}
    height={300}
    data={data}
    margin={{
      top: 5,
      right: 30,
      left: 20,
      bottom: 5
    }}
  >
    <XAxis dataKey="dayOfTheWeek" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="income" fill="#8884d8" />
  </BarChart>
);

AnalyticsBarChart.propTypes = {
  data: instanceOf(Array).isRequired
};

export default AnalyticsBarChart;
