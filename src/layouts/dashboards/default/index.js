/** 

=========================================================
* Vision UI PRO React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Visionware.

*/

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import breakpoints from "assets/theme/base/breakpoints";
// Vision UI Dashboard PRO React base styles
import typography from "assets/theme/base/typography";
// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import Footer from "examples/Footer";
import Globe from "examples/Globe";
// Vision UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import SalesTable from "examples/Tables/SalesTable";
// Data
import salesTableData from "layouts/dashboards/default/data/salesTableData";
import ActiveUsers from "./components/ActiveUsers";
import SalesOverview from "./components/SalesOverview";

// icons
import { FaShoppingCart } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";
import { IoWallet, IoDocumentText } from "react-icons/io5";
import TotalAccounts from "./components/TotalAccounts/TotalAccounts";
import TotalVisits from "./components/TotalVisits/TotalVisits";
import TotalClicks from "./components/TotalClicks/TotalClicks";
import Table from "./components/Leaderboard/Table";
import tableData from "layouts/pages/users/reports/data/tableData";
import Avatar1 from "../../../assets/images/avatar1.png";
import Avatar2 from "../../../assets/images/avatar2.png";
import Avatar3 from "../../../assets/images/avatar3.png";
import Avatar4 from "../../../assets/images/avatar4.png";
import LiveHitsTable from "./components/LiveHitsTable/LiveHitsTable";
import VuiBadgeDot from "components/VuiBadgeDot";
import Table1 from "examples/Tables/Table";
import DashboardProfile from "./components/DashboardProfile/DashboardProfile";
import WeeksCharts from "./components/WeeksCharts/WeeksCharts";

function Default() {
  const { values } = breakpoints;
  const { columns } = tableData;

  const rows = [
    {
      image: { Avatar1 },
      name: "John Doe",
      randomNumber: 42,
    },
    {
      image: { Avatar2 },
      name: "Jane Smith",
      randomNumber: 56,
    },
    {
      image: { Avatar3 },
      name: "Alice Johnson",
      randomNumber: 78,
    },

    {
      image: { Avatar4 },
      name: "John Doe",
      randomNumber: 42,
    },
    {
      image: { Avatar1 },
      name: "Jane Smith",
      randomNumber: 56,
    },
    {
      image: { Avatar2 },
      name: "Alice Johnson",
      randomNumber: 78,
    },

    {
      image: { Avatar3 },
      name: "John Doe",
      randomNumber: 42,
    },
    {
      image: { Avatar4 },
      name: "Jane Smith",
      randomNumber: 56,
    },
    {
      image: { Avatar2 },
      name: "Alice Johnson",
      randomNumber: 78,
    },
  ];

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox
        sx={{
          paddingBlock: "24px",
          "@media (max-width: 1366px)": {
            paddingBlock: "20px",
          },
          "@media (max-width: 1024)": {
            paddingBlock: "15px",
          },
          "@media (max-width: 768px)": {
            paddingBlock: "10px",
          },
        }}
      >
        <Grid container>
          {/* ===================  small graphs=============== */}
          <Grid
            item
            xs={12}
            sx={
              {
                // border:"1px solid red"
              }
            }
          >
            <VuiBox mb={3} p={1}>
              <VuiTypography
                variant={window.innerWidth < values.sm ? "h3" : "h2"}
                textTransform="capitalize"
                fontWeight="bold"
                color="white"
              >
                general statistics
              </VuiTypography>
            </VuiBox>
            <Grid container>
              <Grid item xs={12}>
                <Globe
                  display={{ xs: "none", md: "block" }}
                  position="absolute"
                  top="10%"
                  right={0}
                  mt={{ xs: -12, lg: 1 }}
                  mr={{ xs: 0, md: -10, lg: 10 }}
                  canvasStyle={{ marginTop: "3rem" }}
                />
              </Grid>
            </Grid>

            <Grid
              container
              //  spacing={3}

              spacing={3} // Default spacing for larger screens
              sx={{
                marginTop: "-24px",
                marginLeft: "-24px",
                width: "calc(100% + 24px)",

                // Custom media queries for different screen sizes
                "@media (max-width: 1366px)": {
                  marginTop: "-20px",
                  marginLeft: "-20px",
                  width: "calc(100% + 20px)",
                },
                "@media (max-width:1024px )": {
                  marginTop: "-15px",
                  marginLeft: "-15px",
                  width: "calc(100% + 15px)",
                },

                "@media (max-width:768px )": {
                  marginTop: "-10px",
                  marginLeft: "-10px",
                  width: "calc(100% + 10px)",
                },
              }}
            >
              <Grid
                item
                lg={3}
                md={6}
                xs={12}
                sx={{
                  "@media (max-width:480px )": {
                    paddingLeft:'15px',
                  },
                }}
              >
                <VuiBox mb={3}>
                  <TotalAccounts />
                </VuiBox>
              </Grid>

              <Grid item lg={3} md={6} xs={12}  
              sx={{
                  "@media (max-width:480px )": {
                    paddingLeft:'15px',
                  },
                }}
              
              >
                <VuiBox mb={3}>
                  <TotalVisits />
                </VuiBox>
              </Grid>

              <Grid item lg={3} md={6} xs={12}  
              sx={{
                  "@media (max-width:480px )": {
                    paddingLeft:'15px',
                  },
                }}
              
              >
                <VuiBox mb={3}>
                  <TotalClicks />
                </VuiBox>
              </Grid>

              <Grid item lg={3} md={6} xs={12}  
              sx={{
                  "@media (max-width:480px )": {
                    paddingLeft:'15px',
                  },
                }}
              
              >
                <VuiBox mb={3}>
                  <WeeksCharts />
                </VuiBox>
              </Grid>
            </Grid>
          </Grid>
          {/* ===================  small graphs=============== */}

          <Grid
            sx={{
              display: "flex",
              alignItems: "start",
              justifyContent: "space-between",
              gap: "20px",

              "@media (max-width: 991px)": {
                flexDirection: "column",
                margin: "0px",
              },

              "@media (max-width: 768px)": {
                width: "100%",
              },
            }}
          >
            <Grid
              container
              spacing={2}
              lg={7}
              md={12}
              sm={12}
              xs={12}
              sx={{
                gap: "15px",

                "@media (max-width: 991px)": {
                  margin: "0px",
                },
              }}
            >
              <Grid
                item
                xs={12}
                md={12}
                xl={12}
                lg={12}
                sx={{
                  overflowX: "auto",
                  width: "100%",
                  "@media (max-width: 991px)": {
                    paddingLeft: "10px !important",
                  },

                  "@media (max-width: 480px)": {
                    paddingLeft: "0px !important",
                  },
                }}
              >
                <Card>
                  <LiveHitsTable />
                </Card>
              </Grid>

              <Grid
                item
                xs={12}
                lg={12}
                xl={12}
                sx={{
                  "@media (max-width: 991px)": {
                    paddingLeft: "10px !important",
                  },
                  "@media (max-width: 480px)": {
                    paddingLeft: "0px !important",
                  },
                }}
              >
                <SalesOverview />
              </Grid>
            </Grid>

            <Grid
              container
              spacing={2}
              lg={5}
              md={12}
              sm={12}
              xs={12}
              sx={{
                gap: "15px",
                "@media (max-width: 991px)": {
                  margin: "0px",
                },
              }}
            >
              <Grid
                item
                xs={12}
                md={12}
                xl={12}
                lg={12}
                sx={{
                  "@media (max-width: 991px)": {
                    paddingLeft: "10px !important",
                  },
                  "@media (max-width: 480px)": {
                    paddingLeft: "0px !important",
                  },
                }}
              >
                <Card>
                  <VuiTypography variant="lg" color="white" fontWeight="bold" mb="5px">
                    Loaderboard
                  </VuiTypography>
                  <Table columns={columns} rows={rows} />
                </Card>
              </Grid>
              <Grid
                item
                xs={12}
                md={12}
                xl={12}
                lg={12}
                sx={{
                  "@media (max-width: 991px)": {
                    paddingLeft: "10px !important",
                  },
                  "@media (max-width: 480px)": {
                    paddingLeft: "0px !important",
                  },
                }}
              >
                <DashboardProfile />
              </Grid>
            </Grid>
          </Grid>

          {/* <Grid item xs={12} md={10} lg={8.5} xl={7}>
            <Grid item xs={12} lg={10}>
              <Card sx={{ overflowX: "auto", width: "100%" }} >
                <SalesTable title="Sales by Country" rows={salesTableData} />
              </Card>
            </Grid>
          </Grid> */}
        </Grid>
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Default;
