import React, { useState } from "react";
import { SelectPicker } from "rsuite";
import Analytics from "../components/Analytics";
import Tabs from "../components/Tabs";
import { pickerData } from "../constants/chartsCostants";

const AnalyticsPage = () => {
  const [selected, setSelected] = useState("Area Chart");
  const [value, setValue] = useState("Weekly");

  return (
    <div className="flex w-screen justify-center p-10 bg-gray-100 h-screen">
      <div className="w-[55rem] space-y-10">
        <div className="text-blue-500 font-bold text-5xl">Company performance</div>
        <div className="space-y-2">
          <Tabs onChange={setSelected} />
          <div className="flex items-center space-x-5">
            <div>Filter data</div>
            <SelectPicker
              disabled={selected === "Pie Chart"}
              className="w-1/4"
              searchable={false}
              value={value}
              onChange={setValue}
              data={pickerData}
            />
          </div>
        </div>
        <div className="h-[30rem] ">
          <Analytics selected={selected} dateFilter={value} />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
