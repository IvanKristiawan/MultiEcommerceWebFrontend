import React from "react";
import { useStateContext } from "../../contexts/ContextProvider";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Rating
} from "@mui/material";
import { FontFamily, Colors } from "../../constants/styles";

function ProductCard({
  productImage,
  title,
  normalPrice,
  totalPrice,
  ratingCount
}) {
  const { screenSize } = useStateContext();

  const cardContainer = {
    width: screenSize >= 550 ? 216 : "100%",
    border: "1px solid",
    borderColor: Colors.grey300,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: Colors.grey100
    }
  };

  const priceText = {
    color: normalPrice ? Colors.red500 : Colors.black
  };

  return (
    <>
      <Card sx={cardContainer}>
        <CardMedia
          component="img"
          height="100%"
          image={productImage}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom component="div" sx={FontFamily.caption}>
            {title}
          </Typography>
          {normalPrice && (
            <Typography
              variant="body2"
              component="span"
              className="strikethrough"
              sx={[FontFamily.caption, diskonTextStyle]}
            >
              Rp {normalPrice.toLocaleString()}
            </Typography>
          )}
          <Box sx={priceRatingContainer}>
            <Typography variant="body2" sx={[FontFamily.caption, priceText]}>
              Rp {totalPrice.toLocaleString()}
            </Typography>
            <Rating
              size="small"
              name="read-only"
              value={ratingCount}
              readOnly
            />
          </Box>
        </CardContent>
      </Card>
    </>
  );
}

export default ProductCard;

const priceRatingContainer = {
  display: "flex",
  justifyContent: "space-between"
};

const diskonTextStyle = {
  textDecoration: "line-through",
  textDecorationColor: Colors.red500
};
