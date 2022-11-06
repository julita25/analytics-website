/* eslint-disable no-promise-executor-return */
import React, { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import { Panel } from "rsuite";
import { string } from "prop-types";
import loadable from "@loadable/component";
import { generateFakeProductList } from "../mocks/productsSold";
import { generateFakeCardList } from "../mocks/reportMock";

const AreaChart = loadable(() => import("./AnalyticsAreaChart"));
const BarChart = loadable(() => import("./AnalyticsBarChart"));
const PieChart = loadable(() => import("./AnalyticsPieChart"));

const reportCards = generateFakeCardList(3);
const products = generateFakeProductList(5);

const ChartTypes = {
  areaChart: {
    header: "Income",
    body: <AreaChart data={reportCards} />
  },
  barChart: {
    header: "Items sold",
    body: <BarChart data={reportCards} />
  },
  pieChart: {
    header: "Most sold products",
    body: <PieChart data={products} />
  }
};

const Analytics = ({ selected }) => {
  const key = `${selected[0].toLowerCase()}${selected.replace(" ", "").slice(1)}`;
  const [transition, setTransition] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setTransition(true);
    }, 500);
    setTransition(false);
  }, [selected]);

  return (
    Object.keys(ChartTypes).includes(key) && (
      <Transition
        show={transition}
        enter="transform transition duration-[300ms]"
        enterFrom="opacity-500 rotate-[-120deg] scale-50"
        enterTo="opacity-100 rotate-0 scale-100"
      >
        {transition && (
          <Panel className="w-full border bg-white" header={ChartTypes[key].header}>
            {ChartTypes[key].body}
          </Panel>
        )}
      </Transition>
    )
  );
};

Analytics.propTypes = {
  selected: string.isRequired
};

export default Analytics;
