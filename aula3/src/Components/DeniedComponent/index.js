import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function DeniedComponent({ show, onClose }) {
  return (
    <>
      <Modal show={show} onHide={onClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Acesso Negado</Modal.Title>
        </Modal.Header>
        <Modal.Body>Usuário ou senha incorretos, tente novamente.</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={onClose}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
