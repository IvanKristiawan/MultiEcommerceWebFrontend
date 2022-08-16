import React from "react";
import { Box, Paper } from "@mui/material";
import { DiskonProductCard } from "../index";
import SampleProdukIcon from "../../icons/uiIcon/SampleProdukIcon.svg";

function RekomendasiAllProduct() {
  return (
    <Paper>
      <Box sx={produkCardContainer}>
        <Box>
          <DiskonProductCard
            productImage={SampleProdukIcon}
            title="Buku The Intelligent Investor Benjamin Graham"
            normalPrice={110000}
            diskonPrice={110000}
            ratingCount={5}
          />
        </Box>
        <Box sx={produkCard}>
          <DiskonProductCard
            productImage={SampleProdukIcon}
            title="Buku The Intelligent Investor Benjamin Graham"
            normalPrice={110000}
            diskonPrice={110000}
            ratingCount={5}
          />
        </Box>
        <Box sx={produkCard}>
          <DiskonProductCard
            productImage={SampleProdukIcon}
            title="Buku The Intelligent Investor Benjamin Graham"
            normalPrice={110000}
            diskonPrice={110000}
            ratingCount={5}
          />
        </Box>
        <Box sx={produkCard}>
          <DiskonProductCard
            productImage={SampleProdukIcon}
            title="Buku The Intelligent Investor Benjamin Graham"
            normalPrice={110000}
            diskonPrice={110000}
            ratingCount={5}
          />
        </Box>
        <Box sx={produkCard}>
          <DiskonProductCard
            productImage={SampleProdukIcon}
            title="Buku The Intelligent Investor Benjamin Graham"
            normalPrice={110000}
            diskonPrice={110000}
            ratingCount={5}
          />
        </Box>
      </Box>
      <Box
        sx={{
          padding: 5,
          paddingTop: 0,
          display: "flex",
          flexWrap: "wrap"
        }}
      >
        <Box>
          <DiskonProductCard
            productImage={SampleProdukIcon}
            title="Buku The Intelligent Investor Benjamin Graham"
            normalPrice={110000}
            diskonPrice={110000}
            ratingCount={5}
          />
        </Box>
        <Box sx={produkCard}>
          <DiskonProductCard
            productImage={SampleProdukIcon}
            title="Buku The Intelligent Investor Benjamin Graham"
            normalPrice={110000}
            diskonPrice={110000}
            ratingCount={5}
          />
        </Box>
        <Box sx={produkCard}>
          <DiskonProductCard
            productImage={SampleProdukIcon}
            title="Buku The Intelligent Investor Benjamin Graham"
            normalPrice={110000}
            diskonPrice={110000}
            ratingCount={5}
          />
        </Box>
        <Box sx={produkCard}>
          <DiskonProductCard
            productImage={SampleProdukIcon}
            title="Buku The Intelligent Investor Benjamin Graham"
            normalPrice={110000}
            diskonPrice={110000}
            ratingCount={5}
          />
        </Box>
        <Box sx={produkCard}>
          <DiskonProductCard
            productImage={SampleProdukIcon}
            title="Buku The Intelligent Investor Benjamin Graham"
            normalPrice={110000}
            diskonPrice={110000}
            ratingCount={5}
          />
        </Box>
      </Box>
    </Paper>
  );
}

export default RekomendasiAllProduct;

const produkCardContainer = {
  padding: 5,
  display: "flex",
  flexWrap: "wrap"
};

const produkCard = {
  marginLeft: "25px"
};
