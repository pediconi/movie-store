import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import { SweetAlert } from "../Utils/SweetAlert";

const UsuarioContext = createContext();

export const useUserContext = () => useContext(UsuarioContext);

export const UserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});

  const createUser = (name, surname,phone, email) => {
    if (Object.keys(currentUser).length === 0) {
      setCurrentUser({ name: name, surname: surname, phone: phone, email: email });
      SweetAlert.Confirm("Bienvenido", name + surname)
    } else {
      SweetAlert.Rejected("Usuario ya Ingesado");
      return currentUser;
    }
  };

  const logOut = () =>{
    setCurrentUser({})
  }

  return (
    <UsuarioContext.Provider value={{ currentUser, createUser , logOut}}>
      {children}
    </UsuarioContext.Provider> //retorno al proveedor de cartContext
  );
};
