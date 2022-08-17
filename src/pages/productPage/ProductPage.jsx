import React from "react";
import { useStateContext } from "../../contexts/ContextProvider";
import {
  Box,
  Paper,
  ButtonGroup,
  Divider,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Rating
} from "@mui/material";
import { FontFamily, Colors } from "../../constants/styles";
import Carousel from "react-bootstrap/Carousel";
import SampleProdukIcon from "../../icons/uiIcon/SampleProdukIcon.svg";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  ProductCarousel,
  ProductTitle,
  DescriptionProduct,
  MenuButtonProduct,
  ListProductCard,
  AllProduct
} from "../../components/index";

function ProductPage() {
  const { screenSize } = useStateContext();

  const productPageWrapper = {
    display: "flex",
    flexDirection: screenSize <= 650 && "column"
  };

  const productDetailsContainer = {
    flex: 3,
    padding: screenSize <= 650 && 2,
    paddingTop: screenSize >= 650 ? 6 : 3
  };

  const actionButtonContainer = {
    height: screenSize >= 650 && "46px",
    marginBottom: 3
  };

  const actionButtonContainerResponsive = {
    display: screenSize <= 650 && "flex",
    flexDirection: screenSize <= 650 && "column",
    justifyContent: screenSize <= 650 && "center",
    alignItems: screenSize <= 650 && "center"
  };

  const actionButtonBeli = {
    height: "100%",
    marginLeft: screenSize >= 650 && 2,
    marginTop: screenSize <= 650 && 2
  };

  const rekomendasiProdukMenu = {
    paddingLeft: 4,
    paddingRight: 4,
    marginTop: screenSize >= 650 && 5
  };

  const produkContainer = {
    marginBottom: 7,
    paddingBottom: screenSize <= 650 && 2
  };

  return (
    <Paper sx={productPageContainer}>
      <Box sx={productPageWrapper}>
        <ProductCarousel />
        <Box sx={productDetailsContainer}>
          <ProductTitle
            title="Buku The Intelligent Investor Benjamin Graham"
            ratingStar={4.9}
            countRating={500}
            price={110000}
          />
          <MenuButtonProduct />
          <DescriptionProduct data={tempSlicedDummyText} />
          <Box sx={[actionButtonContainer, actionButtonContainerResponsive]}>
            <Button
              disableRipple
              disableElevation
              variant="contained"
              startIcon={<ShoppingCartIcon />}
              sx={actionButtonKeranjang}
            >
              Masukkan Keranjang
            </Button>
            <Button
              disableRipple
              disableElevation
              variant="outlined"
              sx={actionButtonBeli}
            >
              Beli Sekarang
            </Button>
          </Box>
        </Box>
      </Box>
      <Box sx={produkContainer}>
        {/* Produk lain */}
        <Box sx={rekomendasiProdukMenu}>
          <ListProductCard title="Produk lain di kategori sama :" />
        </Box>
        <AllProduct />
      </Box>
    </Paper>
  );
}

export default ProductPage;

const dummyText =
  "Buku Terbaik Yang Pernah Ditulis Tentang Investasi. – Warren E. Buffett /n Inilah bacaan wajib bagi siapa pun yang mempelajari atau menggeluti dunia investasi. Buku ini menggambarkan dengan sangat brilian kerangka emosional dan alat-alat analisis penting penentu sukses finansial seorang investor. Ajaran-ajaran di dalamnya telah teruji waktu; berakar pada telaah perilaku pasar mo-dal selama lebih dari 100 tahun. Anjuran-anjurannya pun nyaris selalu terbukti benar karena bersandar pada 50 tahun lebih pengalaman sang penulis, pemikir terbesar sepanjang masa di bidang investasi-praktis. /n Sejak pertama terbit (1949) hingga sekarang, buku ini semakin diapresiasi ba-gaikan kitab suci. Komentar luas dari Jason Zweig berhasil membuat setiap ajaran dan anjuran Graham terus bergema di kancah regulasi maupun aktivitas pasar terkini. Seperti karya-karya klasik lainnya, buku legendaris ini mengubah cara kita memandang dunia. Isinya akan terus terasa baru karena senantiasa mendidik kita. Kian sering Anda baca buku mengasyikkan ini, kian banyak ke-waskitaan berinvestasi yang Anda kuasai. Di bawah asuhan Graham, Anda dija-min bisa menjadi investor yang jauh lebih pintar. /n Jumlah Halaman 826 /n Terbit 31 Jul 2019";

let tempSlicedDummyText = [];
let defineDummyText;
for (let i = 0; i <= 20; i++) {
  defineDummyText = dummyText.split("/n")[i];
  if (defineDummyText) {
    tempSlicedDummyText.push(defineDummyText);
  }
}

const productPageContainer = {
  marginTop: 3,
  marginBottom: 4
};

const actionButtonKeranjang = {
  height: "100%"
};
