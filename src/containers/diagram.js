import React, { Component } from "react";
import { connect } from "react-redux";

const Diagram = ({ list }) => {
  function get_rand_color() {
    var color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
    while (color.length < 6) {
      color = "0" + color;
    }
    return "#" + color;
  }
  const total = list.reduce((sum, current) => {
    console.log("Current", current.number);
    console.log("Sum", sum);
    return sum + current.number;
  }, 0);
  console.log(total);
  const percent = list.map((item) => {
    return (item.number / total) * 100;
  }).sort((a,b) => {
      return b - a;
  });
  console.log(percent);
  return (
    <>
      <svg height="500" width="500" viewBox="0 0 500 500">
        {percent.map((value) => {
          const calcPercent = (value * (3.1416 * 250)) / 100;
          const calcRad = 3.1415 * 250;
          return (
            <circle
              r="125"
              cx="250"
              cy="250"
              fill="transparent"
              stroke={get_rand_color()}
              strokeWidth="250"
              strokeDasharray={`${calcPercent} ${calcRad}`}
              transform="rotate(-90) translate(-500)"
            />
          );
        })}
      </svg>
    </>
  );
};

class DiagramConrainer extends Component {
  render() {
    const { list } = this.props;
    return <Diagram list={list} />;
  }
}

const mapStateToProps = (state) => ({
  list: state.list,
});

export default connect(mapStateToProps, null)(DiagramConrainer);
