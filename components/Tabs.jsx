import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import { func } from "prop-types";
import { tabSections } from "../constants/chartsCostants";

const Tabs = ({ onChange }) => {
  const [selectedTab, setSelectedTab] = useState("Area Chart");

  const onSelectTab = (selected) => {
    onChange(selected);
    setSelectedTab(selected);
  };

  return (
    <div className="w-full px-2 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {tabSections.map((tab) => (
            <Tab
              key={tab.chartType}
              onClick={() => onSelectTab(tab.chartType)}
              className={
                `w-full rounded-lg py-2.5 text-sm font-medium leading-5 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 
                ${selectedTab === tab.chartType ? "bg-white shadow text-blue-700" : "text-white hover:bg-white/[0.12]"}`
              }
            >
              {tab.title}
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
