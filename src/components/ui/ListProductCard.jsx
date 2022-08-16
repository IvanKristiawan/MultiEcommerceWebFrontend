import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import { FontFamily, Colors } from "../../constants/styles";

function ListProductCard({ title, mainMenu, secondMenu }) {
  return (
    <>
      <Box>
        <Typography sx={FontFamily.h2}>{title}</Typography>
      </Box>
      <Box sx={produkMenuContainer}>
        <Box sx={[produkMenuKategoriButton, selectedProdukMenuKategoriButton]}>
          <Typography sx={[FontFamily.body2, produkMenuTextButton]}>
            {mainMenu}
          </Typography>
        </Box>
        {secondMenu && (
          <>
            <Divider orientation="vertical" flexItem sx={verticalDivider} />
            <Box sx={produkMenuKategoriButton}>
              <Typography sx={[FontFamily.body2, produkMenuTextButton]}>
                {secondMenu}
              </Typography>
            </Box>
          </>
        )}
      </Box>
      <Box sx={lihatSemuaContainer}>
        <Typography sx={[FontFamily.body2, lihatSemuaText]}>
          Lihat Semua
        </Typography>
      </Box>
    </>
  );
}

export default ListProductCard;

const produkMenuContainer = {
  marginLeft: "10vw",
  display: "flex"
};

const produkMenuKategoriButton = {
  backgroundColor: Colors.white,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingLeft: 4,
  paddingRight: 4,
  height: "100%",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: Colors.grey100
  }
};

const selectedProdukMenuKategoriButton = {
  borderBottom: "3px solid",
  borderColor: Colors.blue500
};

const produkMenuTextButton = {
  fontSize: 16,
  fontWeight: 600,
  color: Colors.black
};

const lihatSemuaContainer = {
  marginTop: "auto",
  marginBottom: "auto",
  marginLeft: "auto"
};

const lihatSemuaText = {
  cursor: "pointer",
  color: Colors.blue500,
  "&:hover": {
    color: Colors.blue700
  }
};

const verticalDivider = {
  backgroundColor: Colors.grey300,
  borderRightWidth: 2
};
