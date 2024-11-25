import React from "react";
import Grid from "@mui/material/Grid";
import { Box, Avatar, LinearProgress, MenuItem } from "@mui/material";

import VuiBox from "components/VuiBox";
import VuiProgress from "components/VuiProgress";
import TrendingFlatOutlinedIcon from "@mui/icons-material/TrendingFlatOutlined";
// Material-UI's styled API
import Card from "@mui/material/Card";
import VuiTypography from "components/VuiTypography";

import { styled } from "@mui/system";

// Importing avatars
import Avatar1 from "../../../../../assets/images/avatar2.png";
import Avatar2 from "../../../../../assets/images/avatar3.png";
import Avatar3 from "../../../../../assets/images/avatar4.png";
import Avatar4 from "../../../../../assets/images/avatar5.png";

function DashboardProfile() {
  return (
    <VuiBox>
      <Card
        sx={{
          p: 5,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                sm={3}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  mx: "auto",
                }}
              >
                <VuiTypography
                  variant="body2"
                  color="white"
                  fontWeight="medium"
                  sx={{
                    paddingTop: "50px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  Weekly Hits
                </VuiTypography>
                <VuiTypography variant="body2" color="white" fontWeight="medium"
                
                sx={{
                  overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                }}
                >
                  0
                </VuiTypography>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",

                    mx: "auto",
                  }}
                >
                  <Avatar
                    src={Avatar1}
                    alt="Profile Picture"
                    sx={{ width: 100, height: 100, borderRadius: "50%" }}
                  />

                  <VuiTypography
                    variant="h3"
                    fontWeight="bold"
                    color="#ffff"
                    sx={{ mb: 0.5, color: "#ffff" ,
                      overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    
                    
                    }}
                  >
                    John Doe
                  </VuiTypography>

                  <VuiTypography variant="h6" fontWeight="bold" color="white"
                  
                  sx={
                    {
                      overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    }
                  }
                  >
                    Weekly Visits
                  </VuiTypography>
                  <VuiTypography variant="h6" color="#ffff" sx={{
                     mb: 0.5, color: "#ffff",
                     overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  
                  
                   }}>
                    102
                  </VuiTypography>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "3px",
                      mx: "auto",
                      mb: 0.5,
                    }}
                  >
                    <VuiTypography
                      variant="h6"
                      fontWeight="bold"
                      wordBreak="no-Wrape"
                      color="white"
                      sx={{
                        overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                      }}
                    >
                      Current Rank -
                    </VuiTypography>

                    <VuiTypography
                      variant="h6"
                      fontWeight="bold"
                      color="red"
                      sx={{
                        overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                        color: "#EA4335",
                      }}
                    >
                      Novice Beemer
                    </VuiTypography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "3px",
                      mx: "auto",
                    }}
                  >
                    <VuiTypography variant="h6" fontWeight="bold"
                    sx={{
                      overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    }}
                    >
                      0/100%
                    </VuiTypography>

                    <VuiTypography
                      variant="h6"
                      fontWeight="bold"
                      color="#ffff"
                      sx={{
                         mb: 0.5, color: "#ffff",
                         overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                       }}
                    >
                      to Rank Up!
                    </VuiTypography>
                  </Box>

                  <Box sx={{
                     width: "100%", textAlign: "center",
                     overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  
                   }}>
                    <VuiProgress
                      value="50"
                      variant="gradient"
                      sx={{
                        height: "12px",
                        "& .MuiLinearProgress-bar": {
                          height: "12px",
                        },
                      }}
                    />
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "3px",
                      mx: "auto",
                    }}
                  >
                    <VuiTypography
                      variant="h6"
                      fontWeight="bold"
                      sx={{ mb: 0.5, whiteSpace: "nowrap", color: "#ffff",
                        overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                      
                       }}
                    >
                      Next Rank
                    </VuiTypography>
                    <TrendingFlatOutlinedIcon sx={{ color: "#ffff", whiteSpace: "nowrap" }} />
                    <VuiTypography variant="h6" fontWeight="bold" sx={{
                      
                      overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",                
                           }}>
                      Competent Pulser
                    </VuiTypography>
                  </Box>
                </Box>
              </Grid>

              <Grid
                item
                xs={12}
                sm={3}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",

                  mx: "auto",
                }}
              >
                <VuiTypography
                  variant="body2"
                  fontWeight="bold"
                  color="white"
                  sx={{ paddingTop: "50px" ,
                  
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  Weekly Clicks
                </VuiTypography>
                <VuiTypography variant="body2" fontWeight="bold" color="white"
                sx={{

                  overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                }}
                >
                  288
                </VuiTypography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </VuiBox>
  );
}

export default DashboardProfile;
