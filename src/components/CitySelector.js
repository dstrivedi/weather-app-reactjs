import React, { useState } from "react";
import { API_BASE_URL, API_KEY } from "../apis/config";
import WeatherCard from "./WeatherCard";
import { Row, Col, FormControl, Button } from "react-bootstrap";

const CitySelector = () => {
  const [city, setCity] = useState("");
  const [results, setResult] = useState(null);
  const [load, setLoad] = useState(false);

  const onSearch = () => {
    fetch(
      `${API_BASE_URL}/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
    )
      .then(res => res.json())
      .then(results => {
        setResult(results);
        setLoad(true);
        console.log(results);
      })
      .catch(err => {
        console.log(err);
        setLoad(false);
      });
  };

  return (
    <>
      <Row>
        <Col>
          <h1>Search your city</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={4}>
          <FormControl
            placeholder="Enter City"
            onChange={event => setCity(event.target.value)}
            value={city}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button onClick={onSearch}>Check Weather</Button>
        </Col>
      </Row>

      {load ? (
        <Row>
          <Col>
            {results.list.map(res => {
              <WeatherCard
                dt={1602104400 * 1000}
                temp_min="22.67"
                temp_max="24.39"
                main="Clear"
                icon="01d"
              />;
            })}
          </Col>
        </Row>
      ) : null}
    </>
  );
};

export default CitySelector;
