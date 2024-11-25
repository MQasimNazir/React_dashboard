import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

import { styled } from "@mui/system";
import "./LiveHitsTable.css";

import Avatar1 from "../../../../../assets/images/avatar2.png";
import Avatar2 from "../../../../../assets/images/avatar3.png";
import Avatar3 from "../../../../../assets/images/avatar4.png";
import Avatar4 from "../../../../../assets/images/avatar5.png";

const ScrollableBox = styled(VuiBox)(({ theme }) => ({
  maxHeight: "300px",
  minHeight: "300px",
  overflowY: "auto",
  "::-webkit-scrollbar": {
    width: "8px",
  },
  "::-webkit-scrollbar-track": {
    background: "white",
    borderRadius: "4px",
  },
  "::-webkit-scrollbar-thumb": {
    background: "#2E32B2",
    borderRadius: "4px",
  },
  "::-webkit-scrollbar-thumb:hover": {
    background: "#2CD9FF",
  },
}));

const AvatarWithText = ({ imgSrc, altText, name, isReversed, sx }) => (
  <VuiBox
    display="flex"
    alignItems="center"
    justifyContent={isReversed ? "flex-end" : "flex-start"}
    sx={sx} 
  >
    {!isReversed && (
      <img
        src={imgSrc}
        alt={altText}
        style={{ width: "32px", height: "32px", borderRadius: "50%", marginRight: "8px" }}
      />
    )}
    <VuiTypography sx={{ color: sx?.color || "inherit" }}>{name}</VuiTypography>
    {isReversed && (
      <img
        src={imgSrc}
        alt={altText}
        style={{ width: "32px", height: "32px", borderRadius: "50%", marginLeft: "8px" }}
      />
    )}
  </VuiBox>
);

AvatarWithText.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isReversed: PropTypes.bool,
  sx: PropTypes.object, 
};

// Main component
function LiveHitsTable() {
  const [rows, setRows] = useState([]);

  // Table columns
  const columns = [
    { name: "user", align: "left" },
    { name: "time", align: "left" },
    { name: "balance", align: "left" },
    { name: "summary", align: "center" },
    { name: "rap", align: "center" },
    { name: "hitter", align: "center" },
  ];

  const dummyVisitors = [
    {
      user: <AvatarWithText imgSrc={Avatar1} altText="John Micheal" name="John Micheal" sx={{ color: "#fff" }} />,
      time: "12:00 PM",
      balance: "10",
      summary: "12.1k",
      rap: "0",
      hitter: <AvatarWithText imgSrc={Avatar2} altText="Alexa Liras" name="Alexa Liras" isReversed sx={{ color: "#fff" }} />,
    },
    {
      user: <AvatarWithText imgSrc={Avatar2} altText="Alexa Liras" name="Alexa Liras" sx={{ color: "#fff" }} />,
      time: "1:00 PM",
      balance: "15",
      summary: "14.2k",
      rap: "2",
      hitter: <AvatarWithText imgSrc={Avatar3} altText="Michael Levi" name="Michael Levi" isReversed sx={{ color: "#fff" }} />,
    },
    {
      user: <AvatarWithText imgSrc={Avatar3} altText="Michael Levi" name="Michael Levi" sx={{ color: "#fff" }} />,
      time: "2:00 PM",
      balance: "25",
      summary: "18.5k",
      rap: "5",
      hitter: <AvatarWithText imgSrc={Avatar4} altText="Richard Gran" name="Richard Gran" isReversed sx={{ color: "#fff" }} />,
    },
    {
      user: <AvatarWithText imgSrc={Avatar4} altText="Richard Gran" name="Richard Gran" sx={{ color: "#fff" }} />,
      time: "3:00 PM",
      balance: "30",
      summary: "22.3k",
      rap: "8",
      hitter: <AvatarWithText imgSrc={Avatar1} altText="John Micheal" name="John Micheal" isReversed sx={{ color: "#fff" }} />,
    },
  ];

  useEffect(() => {
    let visitorIndex = 0;

    const interval = setInterval(() => {
      if (visitorIndex < dummyVisitors.length) {
        const newRow = { ...dummyVisitors[visitorIndex], className: "fade-in" };
        setRows((prevRows) => [...prevRows, newRow]);
        visitorIndex++;
      } else {
        clearInterval(interval);
      }
    }, 2000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <VuiBox>
      <VuiBox mb={2}>
        <VuiTypography variant="lg" color="white" fontWeight="bold">
          Live Hits (GLOBAL)
        </VuiTypography>
      </VuiBox>

      <ScrollableBox>
        <table className="custom-table">
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th key={index} align={column.align}>
                  {column.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index} className={row.className}>
                {columns.map((column, colIndex) => (
                  <td key={colIndex} align={column.align}>
                    {row[column.name]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </ScrollableBox>
    </VuiBox>
  );
}

export default LiveHitsTable;
