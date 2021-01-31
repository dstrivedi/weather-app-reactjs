import React, { useState } from "react";
import { API_BASE_URL, API_KEY } from "../apis/config";
import { Row, Col, FormControl, Button } from "react-bootstrap";

const CitySelector = () => {
  const [city, setCity] = useState("");

  const onSearch = () => {
    fetch(
      `${API_BASE_URL}/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
    )
      .then(res => res.json())
      .then(result => console.log(result));
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
    </>
  );
};

export default CitySelector;
