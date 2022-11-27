import React, { useState } from "react";
import { SelectPicker, Toggle } from "rsuite";
import { FaSun, FaMoon } from "react-icons/fa";
import Analytics from "../components/Analytics";
import Tabs from "../components/Tabs";
import { pickerData } from "../constants/chartsCostants";

const AnalyticsPage = () => {
  const [selected, setSelected] = useState("Area Chart");
  const [value, setValue] = useState("Weekly");
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`flex flex-col w-screen h-screen ${isDarkMode ? "bg-gray-900" : "bg-gray-200"}`}>
      <div className="w-full flex justify-end p-5">
        <Toggle
          checked={isDarkMode}
          onChange={(checked) => setIsDarkMode(checked)}
          size="lg"
          checkedChildren={<FaMoon className="mt-2 text-gray-300" />}
          unCheckedChildren={<FaSun className="mt-2 text-yellow-500" />}
        />
      </div>
      <div className="flex justify-center p-10">
        <div className="w-[55rem] space-y-10">
          <div className={`font-bold text-5xl ${isDarkMode ? "text-white" : "text-blue-500"}`}>Company performance</div>
          <div className="space-y-2">
            <Tabs onChange={setSelected} />
            <div className="flex items-center space-x-5">
              <div className={`${isDarkMode ? "text-white" : "text-black"}`}>Filter data</div>
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
    </div>
  );
};

export default AnalyticsPage;
