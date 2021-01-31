import React from "react";
import WeatherCard from "./components/WeatherCard";
import CitySelector from "./components/CitySelector";
import "./style.css";
import { Container } from "react-bootstrap";

export default function App() {
  return (
    <Container className="App">
      {/* dt is in unix-seconds but javascript uses milliseconds, multiply with 1000 */}
      <WeatherCard
        dt={1602104400 * 1000}
        temp_min="22.67"
        temp_max="24.39"
        main="Clear"
        icon="01d"
      />
      <CitySelector />
    </Container>
  );
}
