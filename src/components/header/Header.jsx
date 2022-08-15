import React from "react";
import { useStateContext } from "../../contexts/ContextProvider";
import { Box, Paper, ButtonGroup, Divider } from "@mui/material";
import { Colors } from "../../constants/styles";
import { InfoHeader, MainHeader, KategoriHeader } from "./index";
import { SubKategoriButton, SubGroup } from "./subComponents/index";

function Header() {
  const {
    screenSize,
    wideScreenMenu,
    subKategoriBuku,
    handleHoverOverSubKategoriBuku,
    handleHoverOverMenu
  } = useStateContext();

  let arraySubKategoriBukuDesain = [
    { name: "Buku Dekorasi" },
    { name: "Buku Desain Rumah" },
    { name: "Buku Desain Dapur" },
    { name: "Buku Desain Kamar" }
  ];

  let arraySubKategoriBukuHukum = [
    { name: "Buku Hukum Dagang" },
    { name: "Buku Hukum Internasional" },
    { name: "Buku Hukum Perdata" },
    { name: "Buku Hukum Pidana" }
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
        <Box
          sx={{
            zIndex: 1,
            display: "block",
            position: "absolute",
            top: "9.7rem",
            left: "20rem"
          }}
        >
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
