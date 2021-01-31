import React from "react";
import CitySelector from "./components/CitySelector";
import "./style.css";
import { Container } from "react-bootstrap";

export default function App() {
  return (
    <Container className="App">
      {/* dt is in unix-seconds but javascript uses milliseconds, multiply with 1000 */}
      <CitySelector />
    </Container>
  );
}
