import { string } from "prop-types";
import React from "react";
import { Panel } from "rsuite";

const SmallCard = ({ title, children }) => (
  <Panel header={title} className="bg-white w-3/4 h-[8rem]">
    <div className="text-3xl flex justify-center">
      {children}
    </div>
  </Panel>
);

SmallCard.propTypes = {
  title: string.isRequired,
  children: string.isRequired
};

export default SmallCard;
