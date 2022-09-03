import React from "react";
import { useStateContext } from "../../contexts/ContextProvider";
import { useNavigate } from "react-router-dom";
import { Box, Paper, Divider, Typography, Pagination } from "@mui/material";
import { FontFamily, Colors } from "../../constants/styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { RekomendasiAllProduct } from "../../components/index";

function ListProductPage() {
  const { screenSize } = useStateContext();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <Paper sx={productPageContainer}>
      <Box sx={titleContainer}>
        <ArrowBackIcon sx={arrowIconStyle} onClick={handleClick} />
        <Typography sx={[FontFamily.body2, titleStyle]}>
          Buku Dekorasi
        </Typography>
      </Box>
      <Divider orientation="horizontal" flexItem sx={verticalDivider} />
      <Box sx={produkContainer}>
        <RekomendasiAllProduct />
        <RekomendasiAllProduct />
      </Box>
      <Box sx={paginationContainer}>
        <Pagination
          count={10}
          variant="outlined"
          shape="rounded"
          color="primary"
        />
      </Box>
    </Paper>
  );
}

export default ListProductPage;

const productPageContainer = {
  marginBottom: 4
};

const produkContainer = {
  marginBottom: 7
};

const verticalDivider = {
  backgroundColor: Colors.grey800,
  borderRightWidth: 2,
  marginRight: 3
};

const titleContainer = {
  display: "flex"
};

const arrowIconStyle = {
  margin: 1,
  marginTop: 1.5,
  cursor: "pointer"
};

const titleStyle = {
  margin: 1
};

const paginationContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingBottom: 2
};
