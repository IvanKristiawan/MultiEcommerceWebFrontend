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
import SampleProdukIcon from "../../icons/uiIcon/SampleProdukIcon.svg";
import { ProductCard } from "../index";

function BukuAllProduct() {
  const { screenSize } = useStateContext();

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
              totalPrice={val.totalPrice}
              ratingCount={val.ratingCount}
            />
          </Box>
        ))}
      </Box>
    </Paper>
  );
}

export default BukuAllProduct;

const produkCardContainer = {
  padding: 5,
  display: "flex",
  flexWrap: "wrap"
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
  }
];
