import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaStickerMule } from "react-icons/fa";
import RaceDetails from "./RaceDetails";

function RacecardsList({ isLoading, items }) {
  const [racingDetails, setRaceDetails] = useState();
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  function handleButtonPressed(id) {
    console.log("handle button pressed function", id);
    setRaceDetails(id);
    setIsButtonPressed(true);
  }

  return isButtonPressed ? (
    <RaceDetails racingDetails={racingDetails} setIsButtonPressed={setIsButtonPressed} />
  ) : (
    <>
      <Container>
        <Row>
          <h3 className="text-center bg-info">
            {" "}
            <FaStickerMule /> Races Today <FaStickerMule />
          </h3>
          {items.map((item) => (
            <Col xl={3} lg={4} md={6} sm={12} xs={12} key={item.id}>
              <Card>
                <Card.Body>
                  <Card.Title>{item.course}</Card.Title>
                  <Card.Subtitle>{item.date}</Card.Subtitle>
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
