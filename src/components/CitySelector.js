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
        console.log(load);
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
          {results.list.map(res => {
            return (
              <WeatherCard
                dt={res.dt}
                temp_min={res.main.temp_min}
                temp_max={res.main.temp_max}
                main={res.weather.map(w => w.main)}
                icon={res.weather.map(w => w.icon)}
              />
            );
          })}
        </Row>
      ) : null}
    </>
  );
};

export default CitySelector;
