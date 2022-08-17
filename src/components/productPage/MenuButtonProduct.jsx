import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import { Colors } from "../../constants/styles";

function MenuButtonProduct() {
  return (
    <Box sx={menuButtonContainer}>
      <Box sx={[menuButton, pickedMenuButton]}>
        <Typography>Deskripsi</Typography>
      </Box>
      <Divider orientation="vertical" flexItem sx={verticalDivider} />
      <Box sx={menuButton}>
        <Typography>Review</Typography>
      </Box>
    </Box>
  );
}

export default MenuButtonProduct;

const menuButtonContainer = {
  borderTop: "1px solid",
  borderBottom: "1px solid",
  borderColor: Colors.grey300,
  height: 42,
  display: "flex",
  alignItems: "center"
};

const menuButton = {
  height: "100%",
  width: "120px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  color: Colors.grey500,
  "&:hover": {
    color: Colors.blue500,
    backgroundColor: Colors.grey100
  }
};

const pickedMenuButton = {
  borderBottom: "3px solid",
  borderColor: Colors.blue500
};

const verticalDivider = {
  backgroundColor: Colors.grey300,
  borderRightWidth: 2
};
