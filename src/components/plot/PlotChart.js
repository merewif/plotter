import React, { useState } from "react";
import { Chart } from "react-google-charts";
import $ from "jquery";

const PlotChart = ({ setFetchBook, chartData, setChartData, saveChart }) => {
  const [stakes, setStakes] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [comment, setComment] = useState("");

  function addStakes(event) {
    event.preventDefault();
    for (let i = 1; i < chartData.length; i++) {
      if (chartData[i][0] > percentage) {
        const newData = [
          // Items before the insertion point:
          ...chartData.slice(0, i),
          // New item:
          [Number(percentage), Number(stakes), comment],
          // Items after the insertion point:
          ...chartData.slice(i),
        ];
        setChartData(newData);
        setFetchBook(newData);
        setStakes(0);
        setPercentage(0);
        $("input").val("");
        i = chartData.length;
      }
    }
  }

  function clearStakes(event) {
    event.preventDefault();

    setChartData([
      [
        "Time",
        "Stakes",
        { role: "tooltip", type: "string", p: { html: true } },
      ],
      [0, 0, "Startpoint"],
      [100, 0, "Endpoint"],
    ]);
    setStakes(0);
    setPercentage(0);
    $("input").val("");
  }

  const options = {
    title: "Story Arc",
    titleTextStyle: {
      bold: false,
      italic: true,
    },
    curveType: "function",
    legend: { position: "bottom" },
    width: "100%",
    height: "100%",
    colors: ["#000", "#000"],
    vAxis: {
      baseline: 100,
      title: "Stakes & Tension",
    },
    fontName: "Cormorant Garamond",
    fontSize: 25,
    tooltip: {
      trigger: "hover",
      textStyle: {
        fontName: "Montserrat",
        fontSize: 15,
      },
    },
    selectionMode: "multiple",
    aggregationTarget: "series",
    animation: {
      duration: 1000,
      easing: "inAndOut",
    },
    enableInteractivity: true,
    hAxis: {
      gridlines: {
        color: "#fff",
      },
    },
    pointShape: "polygon",
    pointSize: 10,
    pointsVisible: true,
  };

  return (
    <div>
      <div id="chart-container">
        <Chart
          chartType="LineChart"
          data={chartData}
          options={options}
          id="chart"
        />
        <form id="chart-input">
          <label>
            Add
            <input
              type="text"
              onChange={(event) => setStakes(event.target.value)}
            />
            Relative Stakes Value at the
            <input
              type="text"
              onChange={(event) => setPercentage(event.target.value)}
            />
            % mark of the plot with the following comment:{" "}
            <input
              type="text"
              onChange={(event) => setComment(event.target.value)}
              id="comment-input"
            />
          </label>
          <button onClick={addStakes}>Add</button>
          <button onClick={clearStakes}>Clear</button>
        </form>
        <button id="savechart" onClick={saveChart}>
          Save
        </button>
      </div>
    </div>
  );
};

export default PlotChart;
