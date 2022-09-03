import React, { useEffect } from "react";
import { useStateContext } from "../../contexts/ContextProvider";
import { useLocation } from "react-router-dom";
import { Box, Paper, ButtonGroup, Divider } from "@mui/material";
import { Colors } from "../../constants/styles";
import { InfoHeader, MainHeader, KategoriHeader } from "./index";
import { SubKategoriButton, SubGroup } from "./subComponents/index";

function Header() {
  const location = useLocation();
  const {
    screenSize,
    wideScreenMenu,
    subKategoriBuku,
    handleHoverOverSubKategoriBuku,
    handleHoverOverMenu,
    closeAllMenu
  } = useStateContext();

  useEffect(() => {
    closeAllMenu();
  }, [location]);

  let arraySubKategoriBukuDesain = [
    { name: "Buku Dekorasi", url: "bukuDekorasi" },
    { name: "Buku Desain Rumah", url: "bukuDesainRumah" },
    { name: "Buku Desain Dapur", url: "bukuDesainDapur" },
    { name: "Buku Desain Kamar", url: "bukuDesainKamar" }
  ];

  let arraySubKategoriBukuHukum = [
    { name: "Buku Hukum Dagang", url: "bukuHukumDagang" },
    { name: "Buku Hukum Internasional", url: "bukuHukumInternasional" },
    { name: "Buku Hukum Perdata", url: "bukuHukumPerdata" },
    { name: "Buku Hukum Pidana", url: "bukuHukumPidana" }
  ];

  let subGroupView = <SubGroup />;

  if (subKategoriBuku.desain) {
    subGroupView = <SubGroup arrayChildren={arraySubKategoriBukuDesain} />;
  }
  if (subKategoriBuku.hukum) {
    subGroupView = <SubGroup arrayChildren={arraySubKategoriBukuHukum} />;
  }

  return (
    <>
      <Paper>
        <InfoHeader />
        {screenSize >= 650 && (
          <>
            <MainHeader />
            <Box sx={mainContainer}>
              <ButtonGroup variant="text" aria-label="text button group">
                <KategoriHeader handleHover={() => handleHoverOverMenu("buku")}>
                  Buku
                </KategoriHeader>
                <KategoriHeader
                  handleHover={() => handleHoverOverMenu("elektronik")}
                >
                  Elektronik
                </KategoriHeader>
                <KategoriHeader
                  handleHover={() => handleHoverOverMenu("komputer")}
                >
                  Komputer
                </KategoriHeader>
              </ButtonGroup>
            </Box>
          </>
        )}
      </Paper>

      {wideScreenMenu.bukuMenu && screenSize >= 650 && (
        <Box sx={subKategoriPop}>
          <Box sx={subKategoriContainer}>
            <Box sx={subKategoriWrapper}>
              <SubKategoriButton
                onHoverSubKategori={() =>
                  handleHoverOverSubKategoriBuku("desain")
                }
              >
                Desain
              </SubKategoriButton>
              <SubKategoriButton
                onHoverSubKategori={() =>
                  handleHoverOverSubKategoriBuku("hukum")
                }
              >
                Hukum
              </SubKategoriButton>
              <SubKategoriButton
                onHoverSubKategori={() =>
                  handleHoverOverSubKategoriBuku("kedokteran")
                }
              >
                Kedokteran
              </SubKategoriButton>
              <SubKategoriButton
                onHoverSubKategori={() =>
                  handleHoverOverSubKategoriBuku("keluarga")
                }
              >
                Keluarga
              </SubKategoriButton>
              <SubKategoriButton
                onHoverSubKategori={() =>
                  handleHoverOverSubKategoriBuku("kesehatan")
                }
              >
                Kesehatan
              </SubKategoriButton>
            </Box>
            <Divider orientation="vertical" flexItem sx={verticalDivider} />

            {subGroupView}
          </Box>
        </Box>
      )}
    </>
  );
}

export default Header;

const mainContainer = {
  display: "flex",
  justifyContent: "center",
  paddingTop: 1,
  paddingBottom: 1
};

const subKategoriPop = {
  zIndex: 1,
  display: "block",
  position: "absolute",
  top: "9.7rem",
  left: "20rem"
};

const subKategoriContainer = {
  display: "flex",
  backgroundColor: Colors.blue700,
  width: "50vw",
  marginLeft: "auto",
  marginRight: "auto"
};

const subKategoriWrapper = {
  display: "flex",
  flexDirection: "column",
  flex: 1
};

const verticalDivider = {
  backgroundColor: Colors.white,
  borderRightWidth: 2
};
