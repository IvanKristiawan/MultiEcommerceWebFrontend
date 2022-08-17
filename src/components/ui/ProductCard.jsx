import React from "react";
import { useStateContext } from "../../contexts/ContextProvider";
import { useNavigate } from "react-router-dom";
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
  ratingCount,
  addStyle
}) {
  const { screenSize } = useStateContext();
  const navigate = useNavigate();

  const cardContainer = {
    width: screenSize >= 550 ? 216 : "40%",
    marginTop: screenSize <= 550 && 2,
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

  const priceRatingContainer = {
    display: "flex",
    flexDirection: screenSize <= 550 && "column",
    justifyContent: screenSize >= 550 && "space-between"
  };

  const handleClick = () => {
    navigate("/produkId");
  };

  return (
    <>
      <Card sx={[cardContainer, addStyle]} onClick={handleClick}>
        <CardMedia
          component="img"
          height={screenSize <= 550 ? "150px" : "220px"}
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

const diskonTextStyle = {
  textDecoration: "line-through",
  textDecorationColor: Colors.red500
};
