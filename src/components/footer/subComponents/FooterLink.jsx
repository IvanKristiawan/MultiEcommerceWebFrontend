import React from "react";
import { Box, Typography } from "@mui/material";
import { FontFamily, Colors } from "../../../constants/styles";

function FooterLink({ children, arrayLink }) {
  return (
    <>
      <Typography sx={[FontFamily.caption, footerLinkTitle]}>
        {children}
      </Typography>
      <Box sx={footerLinkTopBody}>
        {arrayLink &&
          arrayLink.map((val) => (
            <>
              <Typography sx={[FontFamily.caption, footerLinkText]}>
                {val.name}
              </Typography>
            </>
          ))}
      </Box>
    </>
  );
}

export default FooterLink;

const footerLinkTitle = {
  color: Colors.brown200,
  fontWeight: 500
};

const footerLinkTopBody = {
  marginTop: 0.5
};

const footerLinkText = {
  cursor: "pointer",
  color: Colors.white,
  fontWeight: 500,
  "&:hover": {
    color: Colors.grey300
  }
};
