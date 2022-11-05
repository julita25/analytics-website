import React, { useState } from "react";
import { Panel } from "rsuite";
import AnalyticsChart from "../components/AnalyticsAreaChart";
import AnalyticsBarChart from "../components/AnalyticsBarChart";
import AnalyticsPieChart from "../components/AnalyticsPieChart";
import Tabs from "../components/Tabs";
import { generateFakeProductList } from "../mocks/productsSold";
import { generateFakeCardList } from "../mocks/reportMock";

const reportCards = generateFakeCardList(3);
const products = generateFakeProductList(5);

const AnalyticsPage = () => {
  const [selected, setSelected] = useState("Area Chart");

  const key = `${selected[0].toLowerCase()}${selected.replace(" ", "").slice(1)}`;
  console.log(key);

  const ChartTypes = {
    areaChart: {
      header: "Income",
      Component: <AnalyticsChart data={reportCards} />
    },
    barChart: {
      header: "Items sold",
      Component: <AnalyticsBarChart data={reportCards} />
    },
    pieChart: {
      header: "Most sold products",
      Component: <AnalyticsPieChart data={products} />
    }
  };
  console.log(Object.keys(ChartTypes).map((item) => item));
  return (
    <div className="flex w-full justify-center p-10">
      <div className="space-y-4">
        <div className="text-blue-500 font-bold text-5xl">Check your companys insight!</div>
        <Tabs onChange={setSelected} />
        <div className="w-full h-[23rem] ">
          {
            Object.keys(ChartTypes).includes(key) && (
              <Panel className="w-full border" header={ChartTypes[key].header}>
                {ChartTypes[key].Component}
              </Panel>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
