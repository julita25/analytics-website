import React, { useState } from "react";
import { SelectPicker, Toggle } from "rsuite";
import { FaSun, FaMoon } from "react-icons/fa";
import Analytics from "../components/Analytics";
import Tabs from "../components/Tabs";
import { pickerData } from "../constants/chartsCostants";
import SmallCard from "../components/SmallCard";

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
      <div className="flex flex-col justify-center p-10 space-y-14">
        <div className="w-full flex justify-center">
          <div className={`font-bold text-5xl ${isDarkMode ? "text-white" : "text-blue-500"}`}>Company performance</div>
        </div>
        <div className="flex justify-between space-x-10 px-10">
          <div className="space-y-5">
            <div className="space-y-2 w-[65rem]">
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
            <div className="h-[30rem] w-[65rem] justify-center">
              <Analytics selected={selected} dateFilter={value} />
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-center space-y-5 xl:visible invisible">
            <SmallCard title="Profit margin">
              {Math.floor(Math.random() * 100) + 1}
              %
            </SmallCard>
            <SmallCard title="Customer satisfaction">
              {Math.floor(Math.random() * 100) + 1}
              %
            </SmallCard>
            <SmallCard title="# orders on hold">
              {Math.floor(Math.random() * 20) + 1}
            </SmallCard>
            <SmallCard title="# failed orders">
              {Math.floor(Math.random() * 10) + 1}
            </SmallCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
