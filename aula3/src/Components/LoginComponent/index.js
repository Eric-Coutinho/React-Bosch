import { useState } from "react";
import axios from "axios";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";

import styles from './styles.module.scss'

import DeniedComponent from '../DeniedComponent'


export default function LoginComponent() {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setSenha] = useState('');
  const navigation = useNavigate();

  function handleClose(){
    setShowModal(false);
  }
  
  function handleShow(){
    setShowModal(true);
  }
  
  const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        if(!email || !password) {
          handleShow();
        }
        const res = await axios.post("http://localhost:8080/api/auth/login", {
          email, password
        })
        console.log(res.data);
        sessionStorage.setItem("token", res.data.token);

      } catch {
        handleShow();
      }

    }

  return (
    <>
      <Form style={{display: 'flex', alignItems: 'center', flexDirection: 'column', marginBlock: '3em'}} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Endereço de Email</Form.Label>
          <Form.Control type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="Senha" onChange={(e) => setSenha(e.target.value)}/>
        </Form.Group>
        <div className={styles.buttons}>
          <Button variant="primary" type="submit" style={{marginBlock: '1em'}}>
            Login
          </Button>
          <Form.Text style={{color: 'white', fontSize: '1.1em'}}>
            Não tem conta? <Link to={'/register'}>Registre-se</Link>
          </Form.Text>
        </div>
      </Form>
      
      <DeniedComponent show={showModal} onClose={() => setShowModal(false)}/>
    </>
  );
}
