import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import styles from "./styles.module.scss";

export default function CountryInfo() {
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    handleGet();
  }, []);

  async function handleGet() {
    try {
      const res = await axios.get(
        `https://restcountries.com/v3.1/name/${name}?fullText=true`
      );
      setCountry(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const RenderCard = () => {
    return (
      <div className={styles.corpoPage}>
        {country.map((item) => (
          <Card className="text-center" key={item.id}>
            <Card.Body style={{ padding: '5em', paddingBlock: '2em' }}>
              <Card.Img src={item.flags.svg} alt="Card image" style={{ height: '50%' }}/>
              <Card.Title>{item.name.common}</Card.Title>
              <Card.Title>{item.name.official}</Card.Title>
              <Card.Text>População: {item.population}</Card.Text>
              <Card.Text>Continente: {item.continents}</Card.Text>
              <Card.Text>
                Línguas: {Object.values(item.languages).join(", ")}
              </Card.Text>
              <Card.Text>Capital: Brasília</Card.Text>
              <Card.Text>
                Moeda:{" "}
                {Object.entries(item.currencies).map(
                  ([currencyCode, currencyInfo]) => (
                    <div key={currencyCode}>
                      {currencyInfo.name}
                        <br></br>
                        Símbolo:
                        <br></br>
                      {currencyInfo.symbol}
                    </div>
                  )
                )}
              </Card.Text>
              <Card.Text>
                Fronteiras: {Object.values(item.borders).join(", ")}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    );
  };

  return (
    <>
      <RenderCard />
    </>
  );
}
