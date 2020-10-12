import React from "react";

const Diagram = ({ list }) => {
  const size = 500;
  const center = size / 2;
  const radius = center - 1;
  // const total = list.reduce((sum, current) => {
  //     return sum + current.number;
  // },0);
  return (
    <>
      <svg height="500" width="500" viewBox="0 0 500 500">
        <circle r="250" cx="250" cy="250" fill="white" />
        <circle
          r="125"
          cx="250"
          cy="250"
          fill="transparent"
          stroke="tomato"
          strokeWidth="250"
          strokeDasharray="100% 800"
        />
      </svg>
    </>
  );
};

export default Diagram;
