

import { Card } from "@mui/material";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import BasicLineChart from "examples/Charts/LineCharts/BasicLineChart";
import { lineChartDataDashboard, lineChartOptionsDashboard } from "../../data/lineChart";

const SalesOverview = () => {
  return (
    <Card>
      <VuiBox sx={{ height: "100%" }}>
        <VuiTypography variant="lg" color="white" fontWeight="bold" mb="5px">
          Sales Overview
        </VuiTypography>
        <VuiBox display="flex" alignItems="center" mb="40px">
          <VuiTypography variant="button" color="success" fontWeight="bold">
            +5% more{" "}
            <VuiTypography variant="button" color="text" fontWeight="regular">
              in 2021
            </VuiTypography>
          </VuiTypography>
        </VuiBox>
        <VuiBox sx={{ height: "310px" }}>
          <BasicLineChart
            lineChartData={lineChartDataDashboard}
            lineChartOptions={lineChartOptionsDashboard}
          />
        </VuiBox>
      </VuiBox>
    </Card>
  );
};

export default SalesOverview;
