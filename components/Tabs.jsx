import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import { func } from "prop-types";

const Tabs = ({ onChange }) => {
  const [selectedTab, setSelectedTab] = useState("Area Chart");

  const onSelectTab = (selected) => {
    onChange(selected);
    setSelectedTab(selected);
  };

  const chartTypes = ["Area Chart", "Bar Chart", "Pie Chart"];

  return (
    <div className="w-full max-w-md px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {chartTypes.map((tab) => (
            <Tab
              key={tab}
              onClick={() => onSelectTab(tab)}
              className={
                `w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 
                ${selectedTab === tab ? "bg-white shadow" : "text-blue-100 hover:bg-white/[0.12] text-white"}`
              }
            >
              {tab}
            </Tab>
          ))}
        </Tab.List>
      </Tab.Group>
    </div>
  );
};

Tabs.propTypes = {
  onChange: func.isRequired
};

export default Tabs;
