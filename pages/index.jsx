import React from "react";
import { Panel } from "rsuite";
import AreaChart from "../components/AreaChart";
import { generateFakeCardList } from "../mocks/reportMock";

const reportCards = generateFakeCardList(3);

const AnalyticsPage = () => {
  console.log(reportCards);
  return (
    <div className="flex justify-center p-10">
      <div className="space-y-4">
        <div className="text-blue-500 font-bold text-5xl">Check your companys insight!</div>
        <div className="w-full">
          <Panel className="w-full h-[17rem] bg-blue-500" header="hi">
            <AreaChart data={reportCards} />
          </Panel>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
