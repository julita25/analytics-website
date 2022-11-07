import React from "react";
import {
  AreaChart, XAxis, YAxis, Area, Tooltip
} from "recharts";
import { instanceOf, string } from "prop-types";
import CustomisedTooltip from "./CustomisedTooltip";

const AnalyticsAreaChart = ({ data, dataKey }) => (
  <AreaChart
    width={800}
    height={400}
    data={data}
    margin={{
      top: 10,
      right: -10,
      left: 0,
      bottom: 0
    }}
  >
    <XAxis dataKey={dataKey} />
    <YAxis />
    <Tooltip content={<CustomisedTooltip />} />
    <Area type="monotone" dataKey="sales" stroke="#8884d8" fill="#8884d8" />
  </AreaChart>
);

AnalyticsAreaChart.propTypes = {
  data: instanceOf(Array).isRequired,
  dataKey: string.isRequired
};

export default AnalyticsAreaChart;
