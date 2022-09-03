import React from "react";
import { Button } from "@mui/material";
import { FontFamily, Colors } from "../../../constants/styles";

function SubKategoriButton({ children, onHoverSubKategori }) {
  return (
    <Button
      disableElevation
      disableRipple
      variant="contained"
      sx={[FontFamily.caption, subKategoriButton]}
      onClick={onHoverSubKategori}
    >
      {children}
    </Button>
  );
}

export default SubKategoriButton;

const subKategoriButton = {
  backgroundColor: Colors.blue700,
  justifyContent: "flex-start",
  fontWeight: "500",
  "&:hover": {
    backgroundColor: Colors.blue800
  }
};
