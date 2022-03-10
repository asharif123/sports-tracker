import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import HorsesCarousel from "./HorsesCarousel";

function RaceDetailsCards({ raceItems }) {
  const [horseList, setHorseList] = useState(raceItems.horses);

  console.log(raceItems);
  return (
    <>
      <Container>
        <Row>
          {/* EVENT STUFF */}
          <Col className="text-center">
            <h1>{raceItems.course}</h1>
            <h5>on {raceItems.date}</h5>
          </Col>
          {/* ----------------------------------------- */}
          {/* HORSE STUFF */}
          <HorsesCarousel horseList={horseList} />
        </Row>
      </Container>
    </>
  );
}

export default RaceDetailsCards;
