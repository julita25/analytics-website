import React, { useState } from "react";
import Analytics from "../components/Analytics";
import Tabs from "../components/Tabs";

const AnalyticsPage = () => {
  const [selected, setSelected] = useState("Area Chart");

  return (
    <div className="flex w-screen justify-center p-10 bg-gray-100 h-screen">
      <div className="space-y-4">
        <div className="text-blue-500 font-bold text-5xl">Company performance</div>
        <Tabs onChange={setSelected} />
        <div className="w-full h-[23rem] ">
          <Analytics selected={selected} />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
