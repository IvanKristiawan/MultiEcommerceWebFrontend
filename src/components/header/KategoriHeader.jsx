import React from "react";
import { Button } from "@mui/material";
import { FontFamily, Colors } from "../../constants/styles";

function KategoriHeader({ children, handleHover }) {
  return (
    <Button
      disableRipple
      sx={[FontFamily.caption, kategoriButton]}
      onClick={handleHover}
    >
      {children}
    </Button>
  );
}

export default KategoriHeader;

const kategoriButton = {
  color: Colors.grey500,
  "&:hover": {
    backgroundColor: Colors.grey100,
    color: Colors.blue500
  }
};
