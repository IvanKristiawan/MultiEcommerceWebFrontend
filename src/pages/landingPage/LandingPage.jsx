import React from "react";
import { useStateContext } from "../../contexts/ContextProvider";
import {
  Box,
  Paper,
  ButtonGroup,
  Divider,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Rating
} from "@mui/material";
import { FontFamily, Colors } from "../../constants/styles";
import SampleProdukIcon from "../../icons/uiIcon/SampleProdukIcon.svg";
import {
  CarouselUi,
  ListProductCard,
  DiskonProductCard,
  RekomendasiAllProduct
} from "../../components/index";

function LandingPage() {
  return (
    <Box>
      <Box sx={carouselContainer}>
        <CarouselUi />
      </Box>
      <Box sx={produkContainer}>
        <Box sx={produkWrapper}>
          {/* Rekomendasi */}
          <ListProductCard
            title="Rekomendasi"
            mainMenu="Promo"
            secondMenu="Produk Baru"
          />
        </Box>
        <RekomendasiAllProduct />
      </Box>
    </Box>
  );
}

export default LandingPage;

const carouselContainer = {
  marginBottom: 5
};

const produkContainer = {
  marginBottom: 7
};

const produkWrapper = {
  display: "flex"
};

const produkCardContainer = {
  padding: 5,
  display: "flex",
  flexWrap: "wrap"
};

const produkCard = {
  marginLeft: "25px"
};
