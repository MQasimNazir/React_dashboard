import React from "react";
import VerticalBarChart from "examples/Charts/BarCharts/VerticalBarChart";

function FridayChart() {
  return (
    <div style={{ width: "100%", height: "60px",
     }}>
      <VerticalBarChart
        sx={{
          width: "100%",
          height: "60px",
        }}
        data={[
          {
            name: "Sales by age",
            data: [100, 100, 100],
          },
        ]}
        options={{
          chart: {
            toolbar: {
              show: false,
            },
           
          },
          title: {
            text: "FRI", 
            style: {
              fontSize: "10px", 
              fontWeight: "bold", 
              color: "#1976d2", 
            },
            align: "center", 
            margin: 0, 
            offsetY: 50, 
            floating: true, 
          },
          tooltip: {
            style: {
              fontSize: "7px",
              fontFamily: undefined,
            },
            onDatasetHover: {
              style: {
                fontSize: "7px",
                fontFamily: undefined,
              },
            },
            theme: "dark",
          },
          xaxis: {
            categories: ["16-20", "21-25", "26-30"],
            show: false,
            labels: {
              show: false,
              style: {
                colors: "#A0AEC0",
                fontSize: "6px",
              },
            },
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
          },
          yaxis: {
            show: false, 
            color: "black",
            labels: {
              show: false,
              style: {
                colors: "#A0AEC0",
                fontSize: "6px",
              },
            },
          },
          grid: {
            strokeDashArray: 5,
            borderColor: "#56577A",
            yaxis: {
              lines: {
                show: false,
              },
            },
            xaxis: {
              lines: {
                show: false,
              },
            },
          },
          fill: {
            type: "solid",
            colors: "#1976d2",
          },
          dataLabels: {
            enabled: false,
          },
          plotOptions: {
            bar: {
              borderRadius: 2,
              columnWidth: "5px", 
             
            },
          },
        }}
      />
    </div>
  );
}

export default FridayChart;
