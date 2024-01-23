import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { ExtratoContext } from "../../Context/extrato";
import { useContext, useState } from "react";

function FormComponent() {
  const { addPagamento } = useContext(ExtratoContext);

  const [tipo, setTipo] = useState("");
  const [data, setData] = useState("");
  const [valor, SetValor] = useState(0);

  function handleSubmit(e) 
  {
    e.preventDefault();
    addPagamento(tipo, data, valor)
  }

  return (
    <div>
      <Form>

        <Form.Group className="mb-3">
          <Form.Label>Forma</Form.Label>
          <Form.Select onChange={(e) => { setTipo(e.target.value)}}>
            <option disabled>Selecione a Forma de Pagamento</option>
            <option>Crédito</option>
            <option>Débito</option>
            <option>Pix</option>
            <option>Boleto</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDate" onChange={(e) => { setData(e.target.value)}}>
          <Form.Label>Data</Form.Label>
          <Form.Control type="date" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicNumber" onChange={(e) => { SetValor(e.target.value)}}>
          <Form.Label>Valor</Form.Label>
          <Form.Control type="number" placeholder="Digite o valor" />
        </Form.Group>

        <Button variant="primary" size="md" active type="button" onClick={(e) => handleSubmit(e)}>
          Salvar
        </Button>
      </Form>
    </div>
  );
}

export default FormComponent;
