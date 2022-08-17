import React from "react";
import { Box, Typography } from "@mui/material";

function DescriptionProduct({ data }) {
  return (
    <Box sx={descriptionContainer}>
      {data.map((val) => (
        <>
          <Typography>{val}</Typography>
          <br />
        </>
      ))}
    </Box>
  );
}

export default DescriptionProduct;

const descriptionContainer = {
  marginTop: 3
};
