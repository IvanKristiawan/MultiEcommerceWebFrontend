import React from "react";
import { useStateContext } from "../../contexts/ContextProvider";
import { Box, Paper, Typography } from "@mui/material";
import { FontFamily, Colors } from "../../constants/styles";
import Carousel from "react-elastic-carousel";
import SampleProdukIcon from "../../icons/uiIcon/SampleProdukIcon.svg";
import { ProductCard } from "../index";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function AllProduct() {
  const { screenSize } = useStateContext();

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 3 },
    { width: 768, itemsToShow: 5 }
  ];

  const produkCardContainer = {
    padding: screenSize >= 650 ? 5 : 1,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: screenSize <= 550 && "space-around"
  };

  const produkCard = {
    marginLeft: screenSize >= 650 && "25px",
    paddingTop: screenSize <= 650 && 5
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

  let showProductList = (
    <Carousel
      breakPoints={breakPoints}
      sx={{ display: "flex", height: "200px" }}
    >
      {cardData.map((val, i) => (
        <Box sx={i !== 0 && produkCard}>
          <ProductCard
            productImage={val.productImage}
            title={val.title}
            totalPrice={val.totalPrice}
            ratingCount={val.ratingCount}
          />
        </Box>
      ))}
    </Carousel>
  );

  if (screenSize <= 550) {
    showProductList = cardData.map(
      (val, i) =>
        i < 4 && (
          <ProductCard
            productImage={val.productImage}
            title={val.title}
            totalPrice={val.totalPrice}
            ratingCount={val.ratingCount}
            addStyle={() => customStyleCard(i)}
          />
        )
    );
  }

  return (
    <Paper>
      <Box sx={produkCardContainer}>{showProductList}</Box>
      {screenSize <= 550 && (
        <Box sx={lihatSemuaTextContainer}>
          <Typography sx={FontFamily.body2}>Lihat Semua</Typography>
          <KeyboardArrowDownIcon />
        </Box>
      )}
    </Paper>
  );
}

export default AllProduct;

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
    totalPrice: 110000,
    ratingCount: 5
  },
  {
    productImage: SampleProdukIcon,
    title: "Buku The Intelligent Investor Benjamin Graham",
    totalPrice: 110000,
    ratingCount: 5
  },
  {
    productImage: SampleProdukIcon,
    title: "Buku The Intelligent Investor Benjamin Graham",
    totalPrice: 110000,
    ratingCount: 5
  },
  {
    productImage: SampleProdukIcon,
    title: "Buku The Intelligent Investor Benjamin Graham",
    totalPrice: 110000,
    ratingCount: 5
  },
  {
    productImage: SampleProdukIcon,
    title: "Buku The Intelligent Investor Benjamin Graham",
    totalPrice: 110000,
    ratingCount: 5
  },
  {
    productImage: SampleProdukIcon,
    title: "Buku The Intelligent Investor Benjamin Graham",
    totalPrice: 110000,
    ratingCount: 5
  },
  {
    productImage: SampleProdukIcon,
    title: "Buku The Intelligent Investor Benjamin Graham",
    totalPrice: 110000,
    ratingCount: 5
  },
  {
    productImage: SampleProdukIcon,
    title: "Buku The Intelligent Investor Benjamin Graham",
    totalPrice: 110000,
    ratingCount: 5
  }
];
