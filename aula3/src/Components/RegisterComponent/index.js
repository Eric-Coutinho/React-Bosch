import React, { useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import styles from "./styles.module.scss";

// import { SHA256, HmacSHA512, Base64 } from "crypto-js";

export default function RegisterComponent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  
  const handleSubmit = async () => {
    if(!name || !email || !password || !confirm) {
      alert("Dados incompletos.");
      return;
    }

    if(password !== confirm) {
      alert("Senha não corresponde a confirmação.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:8080/api/auth/register",
      {
        name, 
        email, 
        password
      })

      console.log(res);
      
    } catch (error) {
      console.error("Falha no envio dos dados: ", error);
    }
  }

  return (
    <>
      <Form
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "3em",
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" placeholder="Nome" onChange={(e) => setName(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Endereço de Email</Form.Label>
          <Form.Control type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
          <Form.Label>Confirmar sua Senha</Form.Label>
          <Form.Control type="password" placeholder="Confirme a Senha" onChange={(e) => setConfirm(e.target.value)}/>
        </Form.Group>
        <div className={styles.buttons}>
          <Button
            variant="success"
            type="button"
            style={{ marginBlock: ".5em", width: "80%" }}
            onClick={handleSubmit}
          >
              Registrar
          </Button>
          <Button
            variant="danger"
            type="button"
            style={{ marginBlock: "0.5em", width: "60%" }}
          >
            <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
              Cancelar
            </Link>
          </Button>
        </div>
      </Form>
    </>
  );
}
