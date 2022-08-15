import React from "react";
import { useStateContext } from "../../contexts/ContextProvider";
import { Box, Typography, Divider } from "@mui/material";
import { FontFamily, Colors } from "../../constants/styles";
import StayCurrentPortraitIcon from "@mui/icons-material/StayCurrentPortrait";
import FacebookIcon from "../../icons/uiIcon/FacebookIcon.svg";
import InstagramIcon from "../../icons/uiIcon/InstagramIcon.svg";
import WhatsAppIcon from "../../icons/uiIcon/WhatsAppIcon.svg";

function InfoHeader() {
  const { screenSize } = useStateContext();

  const mobileIcon = {
    color: Colors.grey500,
    paddingLeft: screenSize >= 650 && 2
  };

  const infoWrapper = {
    display: "flex",
    flexDirection: screenSize <= 650 && "column",
    flex: 1
  };

  return (
    <Box sx={infoContainer}>
      <Box sx={infoWrapper}>
        <Box sx={{ display: "flex" }}>
          <StayCurrentPortraitIcon sx={mobileIcon} />
          <Typography sx={[FontFamily.caption, infoText, { paddingRight: 1 }]}>
            Download Multi App
          </Typography>
        </Box>
        {screenSize >= 650 && <Divider orientation="vertical" />}
        <Box sx={{ display: "flex" }}>
          <Typography sx={[FontFamily.caption, hubungiText]}>
            Hubungi Kami di
          </Typography>
          <img src={FacebookIcon} alt="facebook-icon" style={facebookIcon} />
          <img src={InstagramIcon} alt="facebook-icon" style={hubungiIcon} />
          <img src={WhatsAppIcon} alt="facebook-icon" style={hubungiIcon} />
        </Box>
      </Box>
      {screenSize >= 650 && (
        <Box sx={[infoWrapper]}>
          <Box sx={{ display: "flex", flex: 1, justifyContent: "flex-end" }}>
            <Typography sx={[FontFamily.caption, infoText]}>Beranda</Typography>
            <Typography sx={[FontFamily.caption, infoText]}>
              Tentang Kami
            </Typography>
            <Typography sx={[FontFamily.caption, infoText]}>Promo</Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default InfoHeader;

const infoContainer = {
  display: "flex",
  justifyContent: "space-between",
  paddingTop: 1,
  paddingBottom: 1
};

const infoText = {
  color: Colors.grey500,
  paddingRight: 2
};

const hubungiText = {
  color: Colors.grey500,
  paddingLeft: 1
};

const hubungiIcon = {
  width: "25px",
  height: "25px",
  paddingLeft: 6
};

const facebookIcon = {
  width: "20px",
  height: "20px",
  paddingLeft: 6,
  paddingTop: 2
};
