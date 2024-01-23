import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { useCallback, useContext, useEffect, useState } from "react";
import axios from "axios";

function FormComponent() {

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [label, SetLabel] = useState("");
  const [date, setDate] = useState(0);

  const handlePost = useCallback(async () => {
    const res = await axios.post("https://jsonplaceholder.typicode.com/posts", {
      title: title,
      author: author,
      label: label,
      date: date,
    });
    console.log(res);
  }, [title, author, label, date]);

  useEffect(() => {
    handlePost();
  }, [handlePost]);

  return (
    <div>
      <Form>
        <Form.Group
          className="mb-3"
          controlId="formBasicNumber"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        >
          <Form.Label>Título</Form.Label>
          <Form.Control type="text" placeholder="Título da música" />
        </Form.Group>

        <Form.Group
          className="mb-3"
          controlId="formBasicNumber"
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        >
          <Form.Label>Autor</Form.Label>
          <Form.Control type="text" placeholder="Autor da música" />
        </Form.Group>

        <Form.Group
          className="mb-3"
          controlId="formBasicNumber"
          onChange={(e) => {
            SetLabel(e.target.value);
          }}
        >
          <Form.Label>Gravadora</Form.Label>
          <Form.Control type="text" placeholder="Nome da gravadora" />
        </Form.Group>

        <Form.Group
          className="mb-3"
          controlId="formBasicDate"
          onChange={(e) => {
            setDate(e.target.value);
          }}
        >
          <Form.Label>Data de Lançamento</Form.Label>
          <Form.Control type="date" />
        </Form.Group>

        <Button
          variant="primary"
          size="md"
          active
          type="button"
          onClick={(e) => handlePost(e)}
        >
          Salvar
        </Button>
      </Form>
    </div>
  );
}

export default FormComponent;
