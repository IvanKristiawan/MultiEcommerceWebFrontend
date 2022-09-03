import React from "react";
import { useStateContext } from "../../contexts/ContextProvider";
import { useNavigate } from "react-router-dom";
import { Box, Autocomplete, TextField, Button } from "@mui/material";
import { FontFamily, Colors } from "../../constants/styles";
import SearchIcon from "@mui/icons-material/Search";
import MultiIcon from "../../icons/brandIcon/MultiIcon.svg";
import CartIcon from "../../icons/uiIcon/CartIcon.svg";

function MainHeader() {
  const { screenSize, setWideScreenMenu } = useStateContext();
  const navigate = useNavigate();

  const searchInput = {
    width: screenSize >= 960 ? "55vw" : "35vw"
  };

  function closeAllMenu() {
    setWideScreenMenu({
      bukuMenu: false,
      elektronikMenu: false,
      komputerMenu: false
    });
  }

  function handleClick() {
    navigate("/");
  }

  function handleClickKeranjang() {
    navigate("/keranjang");
  }

  function handleClickDaftar() {
    navigate("/daftar");
  }

  function handleClickMasuk() {
    navigate("/masuk");
  }

  return (
    <Box sx={mainContainer} onClick={closeAllMenu}>
      <Box>
        <img
          src={MultiIcon}
          alt="multi-icon"
          style={multiIcon}
          onClick={handleClick}
        />
      </Box>
      <Box sx={searchBarContainer}>
        <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          options={top100Films.map((option) => option.title)}
          size="small"
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Cari"
              InputProps={{
                ...params.InputProps,
                type: "search"
              }}
              sx={searchInput}
            />
          )}
        />
        <Button variant="contained" disableElevation sx={searchButton}>
          <SearchIcon />
        </Button>
      </Box>
      <Box sx={accountButtonContainer}>
        <Button
          variant="contained"
          disableElevation
          onClick={handleClickKeranjang}
          sx={[cartButton, accountButton]}
        >
          <img src={CartIcon} alt="cart-button" style={cartIcon} />
        </Button>
        <Button
          variant="outlined"
          disableElevation
          onClick={handleClickMasuk}
          sx={[FontFamily.caption, accountButton]}
        >
          Masuk
        </Button>
        <Button
          variant="contained"
          disableElevation
          onClick={handleClickDaftar}
          sx={[FontFamily.caption, accountButton]}
        >
          Daftar
        </Button>
      </Box>
    </Box>
  );
}

export default MainHeader;

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 }
];

const mainContainer = {
  display: "flex",
  justifyContent: "space-around",
  paddingTop: 1,
  paddingBottom: 1
};

const multiIcon = {
  height: "40px",
  width: "auto",
  cursor: "pointer"
};

const searchBarContainer = {
  display: "flex"
};

const searchButton = {
  height: 40,
  backgroundColor: Colors.grey300,
  "&:hover": {
    backgroundColor: Colors.grey500
  }
};

const cartButton = {
  backgroundColor: Colors.white,
  "&:hover": {
    backgroundColor: Colors.grey100
  }
};

const accountButtonContainer = {
  display: "flex",
  height: 40
};

const accountButton = {
  marginLeft: "1vw"
};

const cartIcon = {
  height: "25px"
};
