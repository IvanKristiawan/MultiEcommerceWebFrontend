import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Paper, Typography, TextField, Button } from "@mui/material";
import { FontFamily } from "../../constants/styles";

function MasukPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <Paper sx={container}>
      <Box>
        <Typography sx={FontFamily.body1}>Masuk</Typography>
        <Box sx={textFieldContainer}>
          <Typography sx={[FontFamily.caption, textFieldTitle]}>
            Email :
          </Typography>
          <Box sx={textFieldWrapper}>
            <TextField
              id="outlined-basic"
              variant="outlined"
              sx={textFieldStyle}
            />
          </Box>
        </Box>
        <Box sx={textFieldContainer}>
          <Typography sx={[FontFamily.caption, textFieldTitle]}>
            Kata Sandi :
          </Typography>
          <Box sx={textFieldWrapper}>
            <TextField
              id="outlined-basic"
              variant="outlined"
              type="password"
              sx={textFieldStyle}
            />
          </Box>
        </Box>
        <Box sx={masukButton}>
          <Button variant="contained">Masuk</Button>
        </Box>
      </Box>
    </Paper>
  );
}

export default MasukPage;

const container = {
  padding: {
    xs: 2,
    sm: 4
  },
  margin: "auto",
  marginBottom: 4,
  width: {
    xs: "100%",
    sm: "40%"
  }
};

const textFieldContainer = {
  marginTop: 2
};

const textFieldTitle = {
  fontWeight: "500"
};

const textFieldWrapper = {
  display: "flex",
  marginTop: 1
};

const textFieldStyle = {
  width: "100%"
};

const masukButton = {
  marginTop: 3
};
