import React from "react";
import { useStateContext } from "../../contexts/ContextProvider";
import { Box, Paper, ButtonGroup, Divider, Typography } from "@mui/material";
import { FontFamily, Colors } from "../../constants/styles";
import { FooterBrandDetail, FooterLink, Contact } from "./subComponents/index";
import MultiIconWhite from "../../icons/brandIcon/MultiIconWhite.svg";
import LocationIconWhite from "../../icons/uiIcon/LocationIconWhite.svg";
import PhoneIconWhite from "../../icons/uiIcon/PhoneIconWhite.svg";
import WhatsappIconWhite from "../../icons/uiIcon/WhatsappIconWhite.svg";
import FacebookIconWhite from "../../icons/uiIcon/FacebookIconWhite.svg";
import InstagramIconWhite from "../../icons/uiIcon/InstagramIconWhite.svg";

function Footer() {
  const { screenSize } = useStateContext();

  const footerLinkContainer = {
    margin: 4,
    display: "flex",
    flexDirection: screenSize <= 650 && "column"
  };

  const footerLinkKategoriContainer = {
    marginTop: screenSize >= 650 ? 4 : 2
  };

  const footerLinkWrapper = {
    flex: 1,
    marginBottom: screenSize <= 650 && 2,
    marginTop: screenSize <= 650 && 2
  };

  let arrayKategoriBuku = [
    { name: "Buku Desain" },
    { name: "Buku Hukum" },
    { name: "Buku Kedokteran" },
    { name: "Buku Keluarga" },
    { name: "Buku Kesehatan" }
  ];

  let arrayKategoriElektronik = [
    { name: "Alat Pendingin Ruangan" },
    { name: "Kamera Pengintai" },
    { name: "Media Player" },
    { name: "Printer" },
    { name: "Elektronik Kantor" }
  ];

  let arrayKategoriKomputer = [
    { name: "Desktop" },
    { name: "Laptop" },
    { name: "Mini PC" },
    { name: "Monitor" },
    { name: "Software" }
  ];

  return (
    <Box sx={footerContainer}>
      <FooterBrandDetail />
      <Box sx={footerLinkContainer}>
        <Box sx={footerLinkWrapper}>
          <Box>
            <FooterLink arrayLink={arrayKategoriBuku}>Buku</FooterLink>
          </Box>
          {screenSize <= 650 && (
            <Divider
              orientation="horizontal"
              flexItem
              sx={[verticalDivider, { marginTop: 2 }]}
            />
          )}
          <Box sx={footerLinkKategoriContainer}>
            <FooterLink arrayLink={arrayKategoriElektronik}>
              Elektronik
            </FooterLink>
          </Box>
        </Box>
        <Divider
          orientation={screenSize >= 650 ? "vertical" : "horizontal"}
          flexItem
          sx={verticalDivider}
        />
        <Box sx={footerLinkWrapper}>
          <Box>
            <FooterLink arrayLink={arrayKategoriKomputer}>Komputer</FooterLink>
          </Box>
        </Box>
        <Divider
          orientation={screenSize >= 650 ? "vertical" : "horizontal"}
          flexItem
          sx={verticalDivider}
        />
        <Box sx={footerLinkWrapper}>
          <img
            src={MultiIconWhite}
            alt="multi-icon-white"
            style={{ height: 53 }}
          />

          <Box sx={topContactContainer}>
            <Contact icon={LocationIconWhite} alt="location-icon-white">
              Jl. Lorem Ipsum, Yogyakarta
            </Contact>
          </Box>

          <Box sx={contactContainer}>
            <Contact icon={PhoneIconWhite} alt="phone-icon-white">
              08951234567
            </Contact>
          </Box>

          <Box sx={contactContainer}>
            <Contact icon={WhatsappIconWhite} alt="whatsapp-icon-white">
              08951234567
            </Contact>
          </Box>

          <Box sx={contactContainer}>
            <Contact icon={FacebookIconWhite} alt="facebook-icon-white">
              multicommerce
            </Contact>
          </Box>

          <Box sx={contactContainer}>
            <Contact icon={InstagramIconWhite} alt="instagram-icon-white">
              multicommerce
            </Contact>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;

const footerContainer = {
  backgroundColor: Colors.blue800
};

const verticalDivider = {
  backgroundColor: Colors.white,
  borderRightWidth: 2,
  marginRight: 3
};

const topContactContainer = {
  display: "flex",
  marginTop: 2
};

const contactContainer = {
  display: "flex",
  marginTop: 1
};
