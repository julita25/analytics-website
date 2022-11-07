import React from "react";
import {
  AreaChart, XAxis, YAxis, Area, Tooltip
} from "recharts";
import { instanceOf } from "prop-types";

const AnalyticsAreaChart = ({ data }) => (
  <AreaChart
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
    <Area type="monotone" dataKey="itemsSold" stroke="#8884d8" fill="#8884d8" />
  </AreaChart>
);

AnalyticsAreaChart.propTypes = {
  data: instanceOf(Array).isRequired
};

export default AnalyticsAreaChart;
