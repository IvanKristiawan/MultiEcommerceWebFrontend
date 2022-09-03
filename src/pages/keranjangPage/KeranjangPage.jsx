import React from "react";
import { useStateContext } from "../../contexts/ContextProvider";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Paper,
  Divider,
  Typography,
  TextField,
  Autocomplete,
  Button
} from "@mui/material";
import { FontFamily, Colors } from "../../constants/styles";
import { ProductTitle } from "../../components/index";
import SampleProdukIcon from "../../icons/uiIcon/SampleProdukIcon.svg";

function KeranjanganPage() {
  const { screenSize } = useStateContext();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <Paper sx={container}>
      {/* <Box sx={titleContainer}>
        <Typography sx={FontFamily.body1}>Keranjang</Typography>
      </Box>
      <Box>
        <Box>
          <SampleProdukIcon />
        </Box>
        <Box></Box>
      </Box> */}
    </Paper>
  );
}

export default KeranjanganPage;

const container = {
  padding: 2,
  margin: "auto",
  marginBottom: 4,
  width: {
    xs: "100%",
    sm: "80%"
  },
  display: "flex",
  flexDirection: "column"
};

const titleContainer = {
  flex: 1,
  display: "flex",
  justifyContent: "center"
};
