import React from "react";
import { useState } from "react";
import { useUserContext } from "../context/UserContext";
import { useCartContext } from "../context/CartContext";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const SignInUser = () => {

  const { createUser, currentUser } = useUserContext();
  const { cart } = useCartContext();

  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    createUser(name, surname, email)
    e.preventDefault();
  };

  return (
    // HACER RETURN CONDICIONAL, SI TAL COSA MUESTRO EL FORM, SI TAL OTRA MUESTRO USUARIO INGRESADO 
    /*  Object.keys(currentUser).length === 0 ? (
      <>
        <div>INGRESE SUS DATOS</div>
        <form style={{ margin: "80px" }} onSubmit={handleSubmit}>
          <input id="name" type="text" name="name" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} />
          <input id="surname" type="text" name="surname" placeholder="Apellido" value={surname} onChange={(e) => setSurname(e.target.value)} />
          <input id="email" type="mail" name="email" placeholder="E-Mail" value={email} onChange={(e) => setEmail(e.target.value)} />
          <button type="submit" >
            Enviar
          </button>
        </form>
      </>
    ) : (<div style={{ color: "black" }}> EN SESION: {currentUser.name + " " + currentUser.surname}</div>)  */

    Object.keys(currentUser).length === 0 ? (
      <>
    <div style={{color:"black"}}>DATOS DEL COMPRADOR</div>
    <Form style={{color: "black"}} onSubmit={handleSubmit}>
      <fieldset >
        <Form.Group className="mb-3">
        <Form.Label>Nombre</Form.Label>
        <Form.Control id="name" type="text" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} />
        
        </Form.Group>

        <Form.Group className="mb-3">
        <Form.Label>Apellido</Form.Label>
        <Form.Control id="surname" type="text" placeholder="Apellido" value={surname} onChange={(e) => setSurname(e.target.value)} />
        

        </Form.Group>
        <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control id="email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        
        </Form.Group>
        <Button disabled={!name || !surname || !email} variant="outline-primary" type="submit"> Aceptar</Button>
      </fieldset>
    </Form> 
      </>
    ) : (<div style={{ color: "black" }}> EN SESION: {currentUser.name + " " + currentUser.surname}</div>) 
  )
}



