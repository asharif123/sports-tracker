import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { FaStickerMule } from "react-icons/fa";
import RaceDetails from "./RaceDetails";

function RacecardsList({ isLoading, items }) {
  const [raceDetails, setRaceDetails] = useState("");
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  function handleButtonPressed(id) {
    console.log("handle button pressed function", id);
    setIsButtonPressed(true);
    setRaceDetails(id);
  }

  console.log("itemsss", items);
  return isButtonPressed ? (
    <RaceDetails raceDetails={raceDetails} />
  ) : (
    <>
      <Container>
        <Row>
          {items.map((item) => (
            <Col xl={3} lg={4} md={6} sm={12} xs={12} key={item.id}>
              <Card>
                <Card.Body>
                  <Card.Title>{item.course}</Card.Title>
                  <Card.Subtitle>{item.date}</Card.Subtitle>
                  <Card.Text>{item.id_race}</Card.Text>
                  <Button variant="secondary" onClick={() => handleButtonPressed(item.id_race)}>
                    Race Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default RacecardsList;
