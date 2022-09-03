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

function DaftarPage() {
  const { screenSize } = useStateContext();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <Paper sx={container}>
      <Box>
        <Typography sx={FontFamily.body1}>Daftar Pengguna</Typography>
      </Box>
      <Box sx={inputContainer}>
        <Box sx={inputWrapper}>
          <Typography sx={[FontFamily.caption, subTitleText]}>
            Informasi Pribadi
          </Typography>
          <Box sx={textFieldContainer}>
            <Typography sx={[FontFamily.caption, textFieldTitle]}>
              Nama Lengkap :
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
          <Box sx={textFieldContainer}>
            <Typography sx={[FontFamily.caption, textFieldTitle]}>
              Tanggal Lahir :
            </Typography>
            <Box sx={textFieldWrapper}>
              <input
                type="date"
                id="start"
                name="trip-start"
                style={datePickerStyle}
              />
            </Box>
          </Box>
          <Box sx={textFieldContainer}>
            <Typography sx={[FontFamily.caption, textFieldTitle]}>
              Jenis Kelamin :
            </Typography>
            <Box sx={textFieldWrapper}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                sx={textFieldStyle}
                options={jenisKelaminOptions}
                renderInput={(params) => <TextField {...params} />}
              />
            </Box>
          </Box>
          <Box sx={textFieldContainer}>
            <Typography sx={[FontFamily.caption, textFieldTitle]}>
              Nomor Telepon :
            </Typography>
            <Box sx={textFieldWrapper}>
              <TextField
                id="outlined-basic"
                variant="outlined"
                sx={textFieldStyle}
              />
            </Box>
          </Box>
        </Box>
        <Divider
          orientation={screenSize >= 650 ? "vertical" : "horizontal"}
          flexItem
          sx={verticalDivider}
        />
        <Box sx={inputWrapper}>
          <Typography sx={[FontFamily.caption, subTitleText]}>
            Alamat Pribadi
          </Typography>
          <Box sx={textFieldContainer}>
            <Typography sx={[FontFamily.caption, textFieldTitle]}>
              Provinsi :
            </Typography>
            <Box sx={textFieldWrapper}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                sx={textFieldStyle}
                options={provinsiOptions}
                renderInput={(params) => <TextField {...params} />}
              />
            </Box>
            <Box sx={textFieldContainer}>
              <Typography sx={[FontFamily.caption, textFieldTitle]}>
                Kota :
              </Typography>
              <Box sx={textFieldWrapper}>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  sx={textFieldStyle}
                  options={kotaOptions}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Box>
            </Box>
            <Box sx={textFieldContainer}>
              <Typography sx={[FontFamily.caption, textFieldTitle]}>
                Alamat :
              </Typography>
              <Box sx={textFieldWrapper}>
                <TextField
                  multiline={true}
                  rows={9.5}
                  id="outlined-basic"
                  variant="outlined"
                  sx={textFieldStyle}
                />
              </Box>
            </Box>
            <Box sx={textFieldContainer}>
              <Typography sx={[FontFamily.caption, textFieldTitle]}>
                Kode Pos :
              </Typography>
              <Box sx={textFieldWrapper}>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  sx={textFieldStyle}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={daftarButton}>
        <Button variant="contained">Daftar</Button>
      </Box>
    </Paper>
  );
}

export default DaftarPage;

const container = {
  padding: 2,
  marginBottom: 4
};

const verticalDivider = {
  backgroundColor: Colors.grey800,
  borderRightWidth: 2,
  marginRight: 3
};

const inputContainer = {
  display: "flex",
  marginTop: 2,
  flexDirection: {
    xs: "column",
    sm: "row"
  }
};

const inputWrapper = {
  flex: 1,
  marginTop: {
    xs: 4,
    sm: 0
  }
};

const subTitleText = {
  fontSize: "16px"
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
  width: {
    xs: "100%",
    sm: "90%"
  }
};

const datePickerStyle = {
  width: "90%",
  height: "50px",
  borderColor: "#C4C4C4"
};

const daftarButton = {
  marginTop: 3
};

const jenisKelaminOptions = [{ label: "Laki-laki" }, { label: "Perempuan" }];

const provinsiOptions = [{ label: "Aceh" }, { label: "Bali" }];

const kotaOptions = [{ label: "Aceh Barat" }, { label: "Aceh Timur" }];
