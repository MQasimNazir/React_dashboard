import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { Table as MuiTable } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import Grid from "@mui/material/Grid";

import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined"; 

import VuiBox from "components/VuiBox";
import VuiAvatar from "components/VuiAvatar";
import VuiTypography from "components/VuiTypography";

import typography from "assets/theme/base/typography";

function Table({ rows }) {
  const { fontWeightMedium } = typography;

  const renderRows = rows.map((row, key) => {
    const rowKey = `row-${key}`;

    const firstColumn = (
      <VuiBox key={uuidv4()} component="td" py={0.5} sx={{ width: "50%" }}>
        <VuiBox display="flex" alignItems="center">
          <VuiBox mr={2}>
            <VuiAvatar src={row.image} name={row.name} variant="rounded" size="sm" />
          </VuiBox>
          <VuiTypography
            variant="button"
            color="white"
            fontWeight="medium"
            sx={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxWidth: "150px",
            }}
          >
            {row.name}
          </VuiTypography>
        </VuiBox>
      </VuiBox>
    );

    const secondColumn = (
      <VuiBox key={uuidv4()} component="td" py={1} sx={{ width: "30%" }} textAlign="center">
        <VuiBox display="flex" alignItems="center" justifyContent="center">
          <Groups2OutlinedIcon style={{ marginRight: "8px", color: "white" }} />
          <VuiTypography
            variant="button"
            fontWeight="regular"
            color="white"
            sx={{ display: "inline-block", width: "max-content" }}
          >
            {row.randomNumber}
          </VuiTypography>
        </VuiBox>
      </VuiBox>
    );

    return (
      <TableRow key={rowKey}>
        {firstColumn}
        {secondColumn}
      </TableRow>
    );
  });

  return useMemo(
    () => (
      <VuiBox
        sx={{
          maxHeight: "250px", 
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
        }}
      >
        <MuiTable sx={{ tableLayout: "fixed", width: "100%" }}>
          <TableBody>{renderRows}</TableBody>
        </MuiTable>
      </VuiBox>
    ),
    [rows]
  );
}

Table.defaultProps = {
  rows: [{}],
};

Table.propTypes = {
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired, 
      name: PropTypes.string.isRequired,
      randomNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, 
    })
  ),
};

export default Table;
