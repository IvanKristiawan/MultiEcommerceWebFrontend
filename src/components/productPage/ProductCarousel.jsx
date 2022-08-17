import React from "react";
import { useStateContext } from "../../contexts/ContextProvider";
import { Box } from "@mui/material";
import Carousel from "react-bootstrap/Carousel";
import SampleProdukIcon from "../../icons/uiIcon/SampleProdukIcon.svg";

function ProductCarousel() {
  const { screenSize } = useStateContext();

  const carouselContainer = {
    flex: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: screenSize >= 650 ? 6 : 2,
    paddingBottom: screenSize >= 650 && 6
  };

  const imageSize = {
    height: screenSize >= 650 ? 374 : 270
  };

  return (
    <Box sx={carouselContainer}>
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            src={SampleProdukIcon}
            alt="sample-produk-icon"
            style={imageSize}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={SampleProdukIcon}
            alt="sample-produk-icon"
            style={imageSize}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={SampleProdukIcon}
            alt="sample-produk-icon"
            style={imageSize}
          />
        </Carousel.Item>
      </Carousel>
    </Box>
  );
}

export default ProductCarousel;
