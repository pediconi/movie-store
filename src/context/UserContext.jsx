import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import { SweetAlert } from "../Utils/SweetAlert";

const UsuarioContext = createContext();

export const useUserContext = () => useContext(UsuarioContext);

export const UserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});

  const createUser = (name, surname, email) => {
    if (Object.keys(currentUser).length === 0) {
      setCurrentUser({ name: name, surname: surname, email: email });
    } else {
      SweetAlert.Rejected("Usuario ya Ingesado");
      return currentUser;
    }
  };

  return (
    <UsuarioContext.Provider value={{ currentUser, createUser }}>
      {children}
    </UsuarioContext.Provider> //retorno al proveedor de cartContext
  );
};
