import { BorderTop } from "@mui/icons-material";
import React from "react";
import Grid from "@mui/material/Grid";
import { Card } from "@mui/material";

import { Box, Avatar, LinearProgress } from "@mui/material";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import SundayChart from "../SundayChart/SundayChart";
import MondayChart from "../MondayChart/MondayChart";
import TuesdayChart from "../TuesdayChart/TuesdayChart";
import WednesdayChart from "../WednesdayChart/WednesdayChart";
import ThursdayChart from "../ThursdayChart/ThursdayChart";
import FridayChart from "../FridayChart/FridayChart";
import SaturdayChart from "../SaturdayChart/SaturdayChart";

function WeeksCharts() {
  return (
    <Card
     

      sx={{
        paddingBlock: "15px",
        "@media (max-width: 1440px)": { padding: "15px" }, 
        "@media (max-width: 1024px)": { padding: "15px" }, 
        "@media (max-width: 800px)": { padding: "12px" }
      }}
    >
      <VuiBox>
        <Grid container>
          <Grid item xs={12}>
            <Grid
              container
              sx={{
                color: "#ffff",
                borderTop: "1px solid #1976d2",
                display: "flex",
                alignItem: "center",
                justifyContent: "start",
                flexWrap: "nowrap",
                paddingBottom: "10px",
              }}
            >
              <Box
                sx={{
                  height: "60px",
                  overflow: "hidden",
                  width: "50px",
                  border: "0px solid red",

                  position: "relative",
                  ".MuiBox-root": {
                    minHeight: "60px !important", // Override min-height
                  },

                  "#apexchartsprarfa9r": {
                    height: "60px !important", // Force ApexCharts container height
                  },

                  ".apexcharts-canvas.apexcharts-theme-": {
                    height: "60px !important", // Force ApexCharts container height
                  },
                  svg: {
                    height: "60px !important", // Force SVG height
                  },
                }}
              >
                <SundayChart
                  sx={{
                    width: "100%",
                    height: "100",
                  }}
                />
                <VuiTypography
                  variant="button"
                  textAlign="center"
                  fontSize="8px"
                  color="text"
                  fontWeight="regular"
                  sx={{
                    bottom: "-17px",
                    left: "15px",
                    position: "absolute",
                  }}
                ></VuiTypography>
              </Box>

              <Box
                sx={{
                  height: "60px",
                  overflow: "hidden",
                  width: "50px",
                  border: "0px solid red",

                  position: "relative",
                  ".MuiBox-root": {
                    minHeight: "60px !important", // Override min-height
                  },

                  "#apexchartsprarfa9r": {
                    height: "60px !important", // Force ApexCharts container height
                  },

                  ".apexcharts-canvas.apexcharts-theme-": {
                    height: "60px !important", // Force ApexCharts container height
                  },
                  svg: {
                    height: "60px !important", // Force SVG height
                  },
                }}
              >
                <MondayChart
                  sx={{
                    width: "100%",
                    height: "100%",
                  }}
                />
                <VuiTypography
                  variant="button"
                  textAlign="center"
                  fontSize="8px"
                  color="text"
                  fontWeight="regular"
                  sx={{
                    bottom: "-17px",
                    left: "15px",
                    position: "absolute",
                  }}
                ></VuiTypography>
              </Box>

              <Box
                sx={{
                  height: "60px",
                  overflow: "hidden",
                  width: "50px",
                  border: "0px solid red",

                  position: "relative",
                  ".MuiBox-root": {
                    minHeight: "60px !important",
                  },

                  "#apexchartsprarfa9r": {
                    height: "60px !important",
                  },

                  ".apexcharts-canvas.apexcharts-theme-": {
                    height: "60px !important",
                  },
                  svg: {
                    height: "60px !important",
                  },
                }}
              >
                <TuesdayChart
                  sx={{
                    width: "100%",
                    height: "100",
                  }}
                />
                <VuiTypography
                  variant="button"
                  textAlign="center"
                  fontSize="8px"
                  color="text"
                  fontWeight="regular"
                  sx={{
                    bottom: "-17px",
                    left: "15px",
                    position: "absolute",
                  }}
                ></VuiTypography>
              </Box>

              <Box
                sx={{
                  height: "60px",
                  overflow: "hidden",
                  width: "50px",
                  border: "0px solid red",

                  position: "relative",
                  ".MuiBox-root": {
                    minHeight: "60px !important",
                  },

                  "#apexchartsprarfa9r": {
                    height: "60px !important",
                  },

                  ".apexcharts-canvas.apexcharts-theme-": {
                    height: "60px !important",
                  },
                  svg: {
                    height: "60px !important",
                  },
                }}
              >
                <WednesdayChart
                  sx={{
                    width: "100%",
                    height: "100",
                  }}
                />
                <VuiTypography
                  variant="button"
                  textAlign="center"
                  fontSize="8px"
                  color="text"
                  fontWeight="regular"
                  sx={{
                    bottom: "-17px",
                    left: "15px",
                    position: "absolute",
                  }}
                ></VuiTypography>
              </Box>

              <Box
                sx={{
                  height: "60px",
                  overflow: "hidden",
                  width: "50px",
                  border: "0px solid red",

                  position: "relative",
                  ".MuiBox-root": {
                    minHeight: "60px !important",
                  },

                  "#apexchartsprarfa9r": {
                    height: "60px !important",
                  },

                  ".apexcharts-canvas.apexcharts-theme-": {
                    height: "60px !important",
                  },
                  svg: {
                    height: "60px !important",
                  },
                }}
              >
                <ThursdayChart
                  sx={{
                    width: "100%",
                    height: "100",
                  }}
                />
                <VuiTypography
                  variant="button"
                  textAlign="center"
                  fontSize="8px"
                  color="text"
                  fontWeight="regular"
                  sx={{
                    bottom: "-17px",
                    left: "15px",
                    position: "absolute",
                  }}
                ></VuiTypography>
              </Box>

              <Box
                sx={{
                  height: "60px",
                  overflow: "hidden",
                  width: "50px",
                  border: "0px solid red",

                  position: "relative",
                  ".MuiBox-root": {
                    minHeight: "60px !important",
                  },

                  "#apexchartsprarfa9r": {
                    height: "60px !important",
                  },

                  ".apexcharts-canvas.apexcharts-theme-": {
                    height: "60px !important",
                  },
                  svg: {
                    height: "60px !important",
                  },
                }}
              >
                <FridayChart
                  sx={{
                    width: "100%",
                    height: "100",
                  }}
                />
                <VuiTypography
                  variant="button"
                  textAlign="center"
                  fontSize="8px"
                  color="text"
                  fontWeight="regular"
                  sx={{
                    bottom: "-17px",
                    left: "15px",
                    position: "absolute",
                  }}
                ></VuiTypography>
              </Box>

              <Box
                sx={{
                  height: "60px",
                  overflow: "hidden",
                  width: "50px",
                  border: "0px solid red",

                  position: "relative",
                  ".MuiBox-root": {
                    minHeight: "60px !important",
                  },

                  "#apexchartsprarfa9r": {
                    height: "60px !important",
                  },

                  ".apexcharts-canvas.apexcharts-theme-": {
                    height: "60px !important",
                  },
                  svg: {
                    height: "60px !important",
                  },
                }}
              >
                <SaturdayChart
                  sx={{
                    width: "100%",
                    height: "100",
                  }}
                />
                <VuiTypography
                  variant="button"
                  textAlign="center"
                  fontSize="8px"
                  color="text"
                  fontWeight="regular"
                  sx={{
                    bottom: "-17px",
                    left: "15px",
                    position: "absolute",
                  }}
                ></VuiTypography>
              </Box>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid
              container
              sx={{
                color: "#ffff",
                textAlign: "center",
                borderTop: "1px solid #1976d2",
                paddingTop: "10px",
              }}
            >
              <Grid
                item
                xs={4}
                sx={{
                  padding: 0,

                  textAlign: "center",
                  borderRight: "1px solid #1976d2",
                }}
              >
                <VuiTypography
                  variant="button"
                  color="text"
                  fontWeight="regular" sx={{whiteSpace: "nowrap",overflow: "hidden",}} >
                  SUMMARY
                </VuiTypography>

                <VuiTypography variant="h4" color="#ffff" fontWeight="bold" sx={{whiteSpace: "nowrap",overflow: "hidden",}} >
                  0
                </VuiTypography>
                <VuiTypography variant="button" color="text" fontWeight="regular" sx={{whiteSpace: "nowrap",overflow: "hidden",}}>
                  + 0 Today
                </VuiTypography>
              </Grid>

              <Grid item xs={4}>
                <VuiTypography variant="button" color="text" fontWeight="regular" sx={{whiteSpace: "nowrap",overflow: "hidden",}}>
                  RAP
                </VuiTypography>

                <VuiTypography variant="h4" color="#ffff" fontWeight="bold" sx={{whiteSpace: "nowrap",overflow: "hidden",}}>
                  0
                </VuiTypography>
                <VuiTypography variant="button" color="text" fontWeight="regular" sx={{whiteSpace: "nowrap",overflow: "hidden",}}>
                  + 0 Today
                </VuiTypography>
              </Grid>

              <Grid
                item
                xs={4}
                sx={{
                  textAlign: "center",
                  borderLeft: "1px solid #1976d2",
                }}
              >
                <VuiTypography variant="button" color="text" fontWeight="regular" sx={{whiteSpace: "nowrap",overflow: "hidden",}}>
                  BALANCE
                </VuiTypography>

                <VuiTypography variant="h4" color="#ffff" fontWeight="bold" sx={{whiteSpace: "nowrap",overflow: "hidden",}}>
                  0
                </VuiTypography>
                <VuiTypography variant="button" color="text" fontWeight="regular" sx={{whiteSpace: "nowrap",overflow: "hidden",}}>
                  + 0 Today
                </VuiTypography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </VuiBox>
    </Card>
  );
}

export default WeeksCharts;
