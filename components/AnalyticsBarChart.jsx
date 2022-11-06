import React from "react";
import {
  BarChart, XAxis, YAxis, Tooltip, Bar
} from "recharts";
import { instanceOf } from "prop-types";

const AnalyticsBarChart = ({ data }) => (
  <BarChart
    width={500}
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
    <Bar dataKey="income" fill="#8884d8" />
  </BarChart>
);

AnalyticsBarChart.propTypes = {
  data: instanceOf(Array).isRequired
};

export default AnalyticsBarChart;
