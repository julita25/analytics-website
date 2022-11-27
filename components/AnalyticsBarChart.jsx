/* eslint-disable react/no-array-index-key */
import React from "react";
import {
  BarChart, XAxis, YAxis, Tooltip, Bar
} from "recharts";
import { instanceOf, string } from "prop-types";
import CustomisedTooltip from "./CustomisedTooltip";

const AnalyticsBarChart = ({ data, dataKey }) => (
  <BarChart
    width={950}
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
    <Tooltip content={<CustomisedTooltip hideCurrency />} />
    <Bar dataKey="sold" fill="#8884d8" />
  </BarChart>
);

AnalyticsBarChart.propTypes = {
  data: instanceOf(Array).isRequired,
  dataKey: string.isRequired
};

export default AnalyticsBarChart;
