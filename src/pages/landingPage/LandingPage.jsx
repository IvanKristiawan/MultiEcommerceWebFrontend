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
  ProductCard,
  RekomendasiAllProduct,
  BukuAllProduct
} from "../../components/index";

function LandingPage() {
  const { screenSize } = useStateContext();

  const carouselContainer = {
    marginBottom: screenSize >= 550 ? 5 : 2
  };

  return (
    <Box>
      <Box sx={carouselContainer}>
        <CarouselUi />
      </Box>

      <Box sx={produkContainer}>
        {/* Rekomendasi */}
        <ListProductCard
          title="Rekomendasi"
          mainMenu="Promo"
          secondMenu="Produk Baru"
        />
        <RekomendasiAllProduct />
      </Box>

      <Box sx={produkContainer}>
        {/* Buku */}
        <ListProductCard title="Buku" mainMenu="Produk Terbaru" />
        <BukuAllProduct />
      </Box>
    </Box>
  );
}

export default LandingPage;

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
