import React from "react";
import { Box, Typography, Rating } from "@mui/material";
import { FontFamily, Colors } from "../../constants/styles";

function ProductTitle({ title, ratingStar, countRating, price }) {
  return (
    <Box sx={productDetailsWrapper}>
      <Typography sx={[FontFamily.body2, productTitleText]}>{title}</Typography>
      <Box sx={productRatingContainer}>
        <Rating name="product-rating" value={1} max={1} readOnly />
        <Typography sx={[FontFamily.caption, productRatingScoreText]}>
          {ratingStar}
        </Typography>
        <Typography sx={[FontFamily.caption, productRatingCountText]}>
          ({countRating} rating)
        </Typography>
      </Box>
      <Typography sx={[FontFamily.h2, productTitleText]}>
        Rp {price.toLocaleString()}
      </Typography>
    </Box>
  );
}

export default ProductTitle;

const productDetailsWrapper = {
  marginBottom: 5
};

const productTitleText = {
  fontWeight: 600
};

const productRatingContainer = {
  display: "flex",
  alignItems: "center",
  marginTop: 1,
  marginBottom: 0.8
};

const productRatingScoreText = {
  fontWeight: 600,
  marginLeft: 0.8
};

const productRatingCountText = {
  fontWeight: 500,
  color: Colors.grey500,
  marginLeft: 0.8
};
