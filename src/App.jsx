import React, { useEffect, useContext } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./styles.css";
import { Box, Typography, Paper } from "@mui/material";
import { Header, Footer } from "./components/index";
import { useStateContext } from "./contexts/ContextProvider";
import {
  LandingPage,
  ProductPage,
  ListProductPage,
  DaftarPage,
  MasukPage,
  KeranjangPage
} from "./pages/index";

export default function App() {
  const { screenSize, setScreenSize, setWideScreenMenu } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function closeAllMenu() {
    setWideScreenMenu({
      bukuMenu: false,
      elektronikMenu: false,
      komputerMenu: false
    });
  }

  return (
    <Box className="App">
      <Box
        sx={{
          backgroundColor: "#e0e0e0",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <BrowserRouter>
          <Header />
          <Box
            sx={{
              margin: screenSize >= 1000 ? 5 : 1,
              mb: 0
            }}
            onClick={closeAllMenu}
          >
            <Routes>
              {/* Landing Page */}
              <Route path="/" element={<LandingPage />} />
            </Routes>
            <Routes>
              {/* Product Page */}
              <Route path="/produkId" element={<ProductPage />} />
            </Routes>
            <Routes>
              {/* List Product Page */}
              <Route path="/bukuDekorasi" element={<ListProductPage />} />
            </Routes>
            <Routes>
              {/* Daftar Page */}
              <Route path="/daftar" element={<DaftarPage />} />
            </Routes>
            <Routes>
              {/* Masuk Page */}
              <Route path="/masuk" element={<MasukPage />} />
            </Routes>
            <Routes>
              {/* Keranjang Page */}
              <Route path="/keranjang" element={<KeranjangPage />} />
            </Routes>
          </Box>
        </BrowserRouter>
        <Footer />
      </Box>
    </Box>
  );
}
