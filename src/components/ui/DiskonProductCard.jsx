import React from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Rating
} from "@mui/material";
import { FontFamily, Colors } from "../../constants/styles";

function DiskonProductCard({
  productImage,
  title,
  normalPrice,
  diskonPrice,
  ratingCount
}) {
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
          <Typography
            variant="body2"
            component="span"
            className="strikethrough"
            sx={[FontFamily.caption, diskonPrice]}
          >
            Rp {normalPrice.toLocaleString()}
          </Typography>
          <Box sx={priceRatingContainer}>
            <Typography variant="body2" sx={[FontFamily.caption, priceText]}>
              Rp {diskonPrice.toLocaleString()}
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

export default DiskonProductCard;

const cardContainer = {
  width: 216,
  border: "1px solid",
  borderColor: Colors.grey300,
  cursor: "pointer",
  "&:hover": {
    backgroundColor: Colors.grey100
  }
};

const priceRatingContainer = {
  display: "flex",
  justifyContent: "space-between"
};

const priceText = {
  color: Colors.red500
};
