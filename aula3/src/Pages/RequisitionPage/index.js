import { useEffect, useState } from "react";

import axios from "axios";

import styles from "./styles.module.scss";

import { Link } from "react-router-dom";

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
      <Card
        style={{
          width: "18rem",
          marginBlock: "2em",
          display: "flex",
          alignItems: "center",
          paddingBottom: "1em",
        }}
        key={item.id}
      >
        <div
          className={styles.flagImg}
          style={{
            objectFit: "fill",
            height: "150px",
            width: "100%",
            marginBottom: "2.5em",
          }}
        >
          <Card.Img
            variant="top"
            src={item.flags.svg}
            alt={`${item.name} flag`}
            className={`${styles.Imagem} ${styles.flagImage}`}
          />
        </div>
        <Card.Body>
          <Card.Title>{item.name.common}</Card.Title>
          <Card.Text>
            População: {item.population}
            <br></br>
            Região: {item.region}
            <br></br>
            Línguas: {getLanguagesString(item.languages)}
          </Card.Text>
        </Card.Body>
        <Button variant="primary" className={styles.cardButton}>
          <Link to={`/country/${item.name.common}`} style={{ color: "white", textDecoration: "none" }} >
            Mais detalhes
          </Link>
        </Button>
      </Card>
    ));
  };

  // <Link to='/' style={{color: 'white', textDecoration: 'none'}}>Home</Link>
  // https://restcountries.com/v3.1/translation/{name}

  const getLanguagesString = (languages) => {
    if (languages) {
      const languageKeys = Object.keys(languages);
      const languageNames = languageKeys.map((key) => languages[key]);
      return languageNames.join(", ");
    } else {
      return "";
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
