import React from "react";
import { Typography } from "@mui/material";
import { FontFamily, Colors } from "../../../constants/styles";

function Contact({ icon, alt, children }) {
  return (
    <>
      <img src={icon} alt={alt} style={contactIcon} />
      <Typography sx={[FontFamily.caption, footerText, contactText]}>
        {children}
      </Typography>
    </>
  );
}

export default Contact;

const contactIcon = {
  height: 21
};

const footerText = {
  cursor: "pointer",
  color: Colors.white,
  fontWeight: 500,
  "&:hover": {
    color: Colors.grey300
  }
};

const contactText = {
  marginLeft: 1
};
