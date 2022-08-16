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
    padding: screenSize >= 650 ? 5 : 1,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: screenSize <= 550 && "space-around"
  };

  function customStyleCard(i) {
    let customStyle = {};
    if (i % 2 !== 0 && screenSize <= 550) {
      customStyle = {
        marginLeft: 2
      };
    } else if (i !== 0 && screenSize >= 550) {
      customStyle = {
        marginLeft: 2
      };
    }
    return customStyle;
  }

  return (
    <Paper>
      <Box sx={produkCardContainer}>
        {cardData.map((val, i) =>
          screenSize <= 550 ? (
            i < 4 && (
              <ProductCard
                productImage={val.productImage}
                title={val.title}
                normalPrice={val.normalPrice}
                totalPrice={val.totalPrice}
                ratingCount={val.ratingCount}
                addStyle={() => customStyleCard(i)}
              />
            )
          ) : (
            <ProductCard
              productImage={val.productImage}
              title={val.title}
              normalPrice={val.normalPrice}
              totalPrice={val.totalPrice}
              ratingCount={val.ratingCount}
              addStyle={() => customStyleCard(i)}
            />
          )
        )}
      </Box>
      {screenSize >= 550 ? (
        <Box sx={secondProductList}>
          {cardData.map((val, i) => (
            <ProductCard
              productImage={val.productImage}
              title={val.title}
              normalPrice={val.normalPrice}
              totalPrice={val.totalPrice}
              ratingCount={val.ratingCount}
              addStyle={() => customStyleCard(i)}
            />
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
