import React from "react";
import { Box, Typography } from "@mui/material";
import { FontFamily, Colors } from "../../../constants/styles";

function FooterBrandDetail() {
  return (
    <Box sx={footerBrandDetail}>
      <Typography sx={[FontFamily.body2, footerText]}>
        Multi - Jual Beli Online
      </Typography>
      <Typography sx={[FontFamily.caption, footerText]}>
        Multi adalah platform jual beli online yang menjual barang mulai dari
        buku sampai dengan elektronik.
      </Typography>
    </Box>
  );
}

export default FooterBrandDetail;

const footerText = {
  color: Colors.white,
  fontWeight: 500
};

const footerBrandDetail = {
  margin: 4
};
