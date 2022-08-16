import React from "react";
import { useStateContext } from "../../contexts/ContextProvider";
import { Box, Paper, Typography } from "@mui/material";
import { FontFamily, Colors } from "../../constants/styles";
import { ProductCard } from "../index";
import SampleProdukIcon from "../../icons/uiIcon/SampleProdukIcon.svg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function RekomendasiAllProduct() {
  const { screenSize } = useStateContext();

  const produkCardContainer = {
    padding: 5,
    display: "flex",
    flexWrap: "wrap"
  };

  const produkCard = {
    marginLeft: screenSize >= 650 && "25px",
    paddingTop: screenSize <= 650 && 5
  };

  return (
    <Paper>
      <Box sx={produkCardContainer}>
        {cardData.map((val, i) => (
          <Box sx={i !== 0 && produkCard}>
            <ProductCard
              productImage={val.productImage}
              title={val.title}
              normalPrice={val.normalPrice}
              totalPrice={val.totalPrice}
              ratingCount={val.ratingCount}
            />
          </Box>
        ))}
      </Box>
      {screenSize >= 550 ? (
        <Box sx={secondProductList}>
          {cardData.map((val, i) => (
            <Box sx={i !== 0 && produkCard}>
              <ProductCard
                productImage={val.productImage}
                title={val.title}
                normalPrice={val.normalPrice}
                totalPrice={val.totalPrice}
                ratingCount={val.ratingCount}
              />
            </Box>
          ))}
        </Box>
      ) : (
        <Box sx={lihatSemuaTextContainer}>
          <Typography sx={FontFamily.body2}>Lihat Semua</Typography>
          <KeyboardArrowDownIcon />
        </Box>
      )}
    </Paper>
  );
}

export default RekomendasiAllProduct;

const secondProductList = {
  padding: 5,
  paddingTop: 0,
  display: "flex",
  flexWrap: "wrap"
};

const lihatSemuaTextContainer = {
  cursor: "pointer",
  color: Colors.blue500,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "&:hover": {
    color: Colors.blue700
  }
};

const cardData = [
  {
    productImage: SampleProdukIcon,
    title: "Buku The Intelligent Investor Benjamin Graham",
    normalPrice: 110000,
    totalPrice: 110000,
    ratingCount: 5
  },
  {
    productImage: SampleProdukIcon,
    title: "Buku The Intelligent Investor Benjamin Graham",
    normalPrice: 110000,
    totalPrice: 110000,
    ratingCount: 5
  },
  {
    productImage: SampleProdukIcon,
    title: "Buku The Intelligent Investor Benjamin Graham",
    normalPrice: 110000,
    totalPrice: 110000,
    ratingCount: 5
  },
  {
    productImage: SampleProdukIcon,
    title: "Buku The Intelligent Investor Benjamin Graham",
    normalPrice: 110000,
    totalPrice: 110000,
    ratingCount: 5
  },
  {
    productImage: SampleProdukIcon,
    title: "Buku The Intelligent Investor Benjamin Graham",
    normalPrice: 110000,
    totalPrice: 110000,
    ratingCount: 5
  }
];
