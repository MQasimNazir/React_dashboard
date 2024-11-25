import React from "react";
import BarChart from "examples/Charts/BarCharts/BasicBarChart/index";
import { Margin } from "@mui/icons-material";

const SimpleBarChart = ({ barChartData, barChartOptions, customStyles }) => {
  const limitedBarData = barChartData.slice(0, 7); 
  const dummyData = new Array(7 - limitedBarData.length).fill(0); 
  const finalData = [...limitedBarData, ...dummyData]; 

  const updatedOptions = {
    ...barChartOptions,
    plugins: {
      ...barChartOptions.plugins,
      title: {
        display: false, 
      },
    },
    yaxis: {
      ...barChartOptions.yaxis,
      labels: {
        show: false, 
      },
    },
    chart: {
      ...barChartOptions.chart,
      height: 90, 
      toolbar: {
        show: false, 
      },
      padding: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      },
      margin: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 2,
        columnWidth: "80%", 
        dataLabels: {
          position: "top", 
        },
      },
    },
    grid: {
      ...barChartOptions.grid,
      borderColor: "#383a3c", 
      borderWidth: 1, 
      show: true, 
    },
    xaxis: {
      ...barChartOptions.xaxis,
      categories: finalData.map((_, index) => `Bar ${index + 1}`), 
      axisBorder: {
        show: false, 
      },
    },
  };

  return (
    <div
      style={{
        ...customStyles,
        height: "80px",
        width: "100%",
        boxSizing: "border-box", 
        padding: 0,
        margin: 0,
      }}
    >
      <BarChart barChartData={finalData} barChartOptions={updatedOptions} />
    </div>
  );
};

export default SimpleBarChart;
