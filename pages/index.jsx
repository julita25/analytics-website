import React, { useState } from "react";
import Analytics from "../components/Analytics";
import Tabs from "../components/Tabs";

const AnalyticsPage = () => {
  const [selected, setSelected] = useState("Area Chart");

  return (
    <div className="flex w-full justify-center p-10">
      <div className="space-y-4">
        <div className="text-blue-500 font-bold text-5xl">Check your companys insight!</div>
        <Tabs onChange={setSelected} />
        <div className="w-full h-[23rem] ">
          <Analytics selected={selected} />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
