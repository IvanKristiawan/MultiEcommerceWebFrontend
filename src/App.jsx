import React, { useEffect, useContext } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./styles.css";
import { Box, Typography } from "@mui/material";
import { Header, Footer } from "./components/index";
import { useStateContext } from "./contexts/ContextProvider";

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
        <Header />
        <Box onClick={closeAllMenu} sx={{ minHeight: "50vh" }}></Box>
        <Footer />
      </Box>
    </Box>
  );
}
