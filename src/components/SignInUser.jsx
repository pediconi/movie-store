import React from "react";
import { useState } from "react";
import { useUserContext } from "../context/UserContext";
import Form from "react-bootstrap/Form";
import styles from "../assets/css/SignInUser.module.css";
import { SweetAlert } from "../Utils/SweetAlert";

export const SignInUser = () => {
  const { createUser, currentUser } = useUserContext();

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [confirmedEmail, setConfirmedEmail] = useState("");

  const handleSubmit = (e) => {

    email === confirmedEmail ? createUser(name, surname, phone, email) : SweetAlert.Rejected("Error", "Los Mails No Coinciden")

    e.preventDefault();
  };

  return Object.keys(currentUser).length === 0 ? (
    <>
      <Form style={{ color: "black" }} onSubmit={handleSubmit}>
        <fieldset className={styles.form}>
          
            <div style={{ color: "black" }}>DATOS DEL COMPRADOR</div>
            <Form.Group className="mb-3">
              
              <Form.Control className={styles.input}
                id="name"
                type="text"
                placeholder="Nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              
              <Form.Control className={styles.input}
                id="surname"
                type="text"
                placeholder="Apellido"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              
              <Form.Control className={styles.input}
                id="phone"
                type="text"
                placeholder="Telefono"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              
              <Form.Control className={styles.input}
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              
              <Form.Control className={styles.input}
                id="confirmedEmail"
                type="text"
                placeholder="Confirmar Email"
                value={confirmedEmail}
                onChange={(e) => setConfirmedEmail(e.target.value)}
              />
            </Form.Group>

            <button
              className={styles.buttonLogIn}
              disabled={!name || !surname || !email || !phone || !confirmedEmail}
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

