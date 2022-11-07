/* eslint-disable no-promise-executor-return */
import React, { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import { Panel } from "rsuite";
import { string } from "prop-types";
import loadable from "@loadable/component";
import { generateFakeProductList } from "../mocks/productsSold";
import { generateFakeMonthlyReportCards, generateFakeWeeklyReportCards } from "../mocks/reportMock";

const AreaChart = loadable(() => import("./AnalyticsAreaChart"));
const BarChart = loadable(() => import("./AnalyticsBarChart"));
const PieChart = loadable(() => import("./AnalyticsPieChart"));

const reportCardsWeekly = generateFakeWeeklyReportCards();
const reportCardsMonthly = generateFakeMonthlyReportCards();
const products = generateFakeProductList(5);

const Analytics = ({ selected, dateFilter }) => {
  const key = `${selected[0].toLowerCase()}${selected.replace(" ", "").slice(1)}`;
  const [reportCards, setReportCards] = useState();
  const [transition, setTransition] = useState(true);
  const dataKey = dateFilter === "Weekly" ? "dayOfTheWeek" : "month";

  const ChartTypes = {
    areaChart: {
      header: `${dateFilter} sales`,
      body: <AreaChart data={reportCards} dataKey={dataKey} />
    },
    barChart: {
      header: "# Items sold",
      body: <BarChart data={reportCards} dataKey={dataKey} />
    },
    pieChart: {
      header: "Most sold products",
      body: <PieChart data={products} />
    }
  };

  useEffect(() => {
    if (dateFilter === "Weekly") {
      setReportCards(reportCardsWeekly);
    } else {
      setReportCards(reportCardsMonthly);
    }
  }, [dateFilter]);

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
  selected: string.isRequired,
  dateFilter: string.isRequired
};

export default Analytics;
