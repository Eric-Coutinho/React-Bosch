import { useEffect, useState } from "react";
import axios from "axios";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

export default function ReqPage() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    handleGet();
  }, []);

  async function handleGet() {
    try {
      const res = await axios.get("https://restcountries.com/v3.1/all");
      setCountries(res.data);
      console.log(countries);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const RenderCards = () => {
    return countries.map((item) => (
      <Card style={{ width: "18rem", marginBlock: "2em" }} key={item.id}>
        <Card.Img variant="top" src={item.flags.svg} alt={`${item.name} flag`} />
        <Card.Body>
          <Card.Title>{item.name.common}</Card.Title>
          <Card.Text>
            População: {item.population}, Região: {item.region}, Línguas: {getLanguagesString(item.languages)}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    ));
  };
  
  const getLanguagesString = (languages) => {
    if (languages) {
      const languageKeys = Object.keys(languages);
      const languageNames = languageKeys.map((key) => languages[key]);
      return languageNames.join(', ');
    } else {
      return '';
    }
  };

  return (
    <>
      <Container>
        <Row>
          <Col
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
            }}
          >
            <RenderCards />
          </Col>
        </Row>
      </Container>
    </>
  );
}
