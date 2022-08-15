import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

// export const tempUrl = "http://localhost:5000";

export const ContextProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(undefined);
  const [wideScreenMenu, setWideScreenMenu] = useState({
    bukuMenu: false,
    elektronikMenu: false,
    komputerMenu: false
  });
  const [subKategoriBuku, setSubKategoriBuku] = useState({
    desain: false,
    hukum: false,
    kedokteran: false,
    keluarga: false,
    kesehatan: false
  });

  const handleHoverOverSubKategoriBuku = (pickedSubGroup) => {
    switch (pickedSubGroup) {
      case "desain":
        setSubKategoriBuku({ desain: !subKategoriBuku.desain });
        break;
      case "hukum":
        setSubKategoriBuku({ hukum: !subKategoriBuku.hukum });
        break;
      case "kedokteran":
        setSubKategoriBuku({ kedokteran: !subKategoriBuku.kedokteran });
        break;
      case "keluarga":
        setSubKategoriBuku({ keluarga: !subKategoriBuku.keluarga });
        break;
      case "kesehatan":
        setSubKategoriBuku({ kesehatan: !subKategoriBuku.kesehatan });
        break;
      default:
        break;
    }
  };

  const handleHoverOverMenu = (pickedMenu) => {
    switch (pickedMenu) {
      case "buku":
        setWideScreenMenu({ bukuMenu: !wideScreenMenu.bukuMenu });
        break;
      case "elektronik":
        setWideScreenMenu({
          elektronikMenu: !wideScreenMenu.elektronikMenu
        });
        break;
      case "komputer":
        setWideScreenMenu({
          komputerMenu: !wideScreenMenu.komputerMenu
        });
        break;
      default:
        break;
    }
  };

  return (
    <StateContext.Provider
      value={{
        screenSize,
        setScreenSize,
        wideScreenMenu,
        setWideScreenMenu,
        subKategoriBuku,
        setSubKategoriBuku,
        handleHoverOverSubKategoriBuku,
        handleHoverOverMenu
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
