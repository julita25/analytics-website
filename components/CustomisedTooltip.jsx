import React from "react";
import { bool, instanceOf, string } from "prop-types";

const CustomisedTooltip = ({
  active, payload, label, hideCurrency
}) => {
  if (active && payload.length) {
    return (
      <div className="bg-white opacity-75 p-5 rounded-lg">
        <div className="font-bold">{label}</div>
        {
          payload.map((data) => (
            <div key={data.id} className="flex">
              <div>
                {data.name}
                :
              </div>
              {!hideCurrency && "$"}
              {data.value}
            </div>
          ))
        }
      </div>
    );
  }

  return null;
};

CustomisedTooltip.propTypes = {
  active: bool,
  payload: instanceOf(Array),
  label: string,
  hideCurrency: bool
};

CustomisedTooltip.defaultProps = {
  active: false,
  payload: [],
  label: "",
  hideCurrency: false
};

export default CustomisedTooltip;
