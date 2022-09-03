import React from "react";
import { useStateContext } from "../../contexts/ContextProvider";
import { Box, Paper } from "@mui/material";
import {
  CarouselUi,
  ListProductCard,
  RekomendasiAllProduct,
  AllProduct
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
        <Paper>
          <RekomendasiAllProduct />
        </Paper>
      </Box>

      <Box sx={produkContainer}>
        {/* Buku */}
        <ListProductCard title="Buku" mainMenu="Produk Terbaru" />
        <Paper>
          <AllProduct />
        </Paper>
      </Box>

      <Box sx={produkContainer}>
        {/* Elektronik */}
        <ListProductCard title="Elektronik" mainMenu="Produk Terbaru" />
        <Paper>
          <AllProduct />
        </Paper>
      </Box>

      <Box sx={produkContainer}>
        {/* Komputer */}
        <ListProductCard title="Komputer" mainMenu="Produk Terbaru" />
        <Paper>
          <AllProduct />
        </Paper>
      </Box>
    </Box>
  );
}

export default LandingPage;

const produkContainer = {
  marginBottom: 7
};
