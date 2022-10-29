import React from "react";
import { useState } from "react";
import { useUserContext } from "../context/UserContext";
import Form from "react-bootstrap/Form";
import styles from "../assets/css/SignInUser.module.css";

export const SignInUser = () => {
  const { createUser, currentUser } = useUserContext();

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    createUser(name, surname, phone ,email);
    e.preventDefault();
  };


  return Object.keys(currentUser).length === 0 ? (
    <>
      <Form style={{ color: "black" }} onSubmit={handleSubmit}>
        <fieldset style={{ margin: "60px" }}>
          <div style={{ color: "black" }}>DATOS DEL COMPRADOR</div>
          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              id="name"
              type="text"
              placeholder="Nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              id="surname"
              type="text"
              placeholder="Apellido"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Telefono</Form.Label>
            <Form.Control
              id="phone"
              type="text"
              placeholder="Telefono"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <button
            className={styles.buttonLogIn}
            disabled={!name || !surname || !email || !phone} 
            type="submit"
          >
            {" "}
            Aceptar
          </button>
        </fieldset>
      </Form>
    </>
  ) : (
    ""
  );
};
//(<div style={{ color: "black" }}> EN SESION: {currentUser.name + " " + currentUser.surname}</div>)
