import { Card } from "@mui/material";
import Grid from "@mui/material/Grid";
import colors from "assets/theme/base/colors";
import linearGradient from "assets/theme/functions/linearGradient";
import VuiBox from "components/VuiBox";
import VuiProgress from "components/VuiProgress";
import VuiTypography from "components/VuiTypography";
import BarChart from "examples/Charts/BarCharts/BasicBarChart/index";
import { FaShoppingCart, FaWallet } from "react-icons/fa";
import { IoIosRocket } from "react-icons/io";
import { IoBuild } from "react-icons/io5";
import CookieOutlinedIcon from "@mui/icons-material/CookieOutlined";
import { barChartDataDashboard, barChartOptionsDashboard } from "../../data/barChart";
import SimpleBarChart from "../SimpleBarChart/SimpleBarChart";
import borders from "assets/theme/base/borders";

const TotalAccounts = () => {
  const { gradients } = colors;
  const { cardContent } = gradients;

  return (
    <Card
      sx={{
        padding: "24px", // Default
        "@media (max-width: 1440px)": { padding: "20px" }, // For screens smaller than 900px
        "@media (max-width: 1024px)": { padding: "15px" }, // For screens smaller than 600px
        "@media (max-width: 800px)": { padding: "12px" }
      }}
    >
      <VuiBox>
        <VuiBox mb="5px">
          <VuiBox display="flex" alignItems="center" width="100%" justifyContent="space-between">
            <VuiTypography variant="body2" color="white" fontWeight="medium">
              Total Accounts
            </VuiTypography>
            <CookieOutlinedIcon sx={{ color: "white", marginRight: "8px" }} />
          </VuiBox>
        </VuiBox>
        <VuiTypography variant="lg" color="white" display="block" fontWeight="bold" mb="5px">
          1
        </VuiTypography>

        <VuiBox
          mb="0px"
          height="80px"
          padding="0px"
          margin="0px"
          sx={{
            background: linearGradient(cardContent.main, cardContent.state, cardContent.deg),
            padding: "0px",
            margin: "0px",
            borderRadius: "5px",
            border: "0px solid red",
          }}
        >
          <SimpleBarChart
            barChartData={barChartDataDashboard}
            barChartOptions={barChartOptionsDashboard}
            customStyles={{
              border: "0px solid white",
              padding: "0",
              margin: "0",
              overflow: "hidden",
            }}
          />
        </VuiBox>
        <VuiBox display="flex">
          <VuiBox display="flex" alignItems="center" mb="5px">
            <VuiTypography variant="button" color="text" fontWeight="bold">
              +0{" "}
              <VuiTypography variant="button" color="text" fontWeight="regular">
                Today
              </VuiTypography>
            </VuiTypography>
          </VuiBox>
          <VuiBox display="flex" alignItems="center" mb="5px">
            <VuiTypography variant="button" color="text" fontWeight="bold">
              * 0{" "}
              <VuiTypography variant="button" color="text" fontWeight="regular">
                Daily
              </VuiTypography>
            </VuiTypography>
          </VuiBox>
        </VuiBox>
      </VuiBox>
    </Card>
  );
};

export default TotalAccounts;
