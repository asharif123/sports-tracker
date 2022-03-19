import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Table, ListGroup, Spinner, Button } from "react-bootstrap";
import { FaHorseHead } from "react-icons/fa";

function RaceDetails({ racingDetails, setIsButtonPressed }) {
  const [raceItems, setRaceItems] = useState([]);
  const [horseList, setHorseList] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRaceDetails = async () => {
      const result = await axios.get(`https://horse-racing.p.rapidapi.com/race/${racingDetails}`, {
        headers: {
          "x-rapidapi-host": "horse-racing.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
        },
      });
      console.log("result.data", result.data);
      setRaceItems(result.data);
      console.log("result.data.horses", result.data.horses);
      setHorseList(result.data.horses);
      setIsLoading(false);
    };
    fetchRaceDetails();
  }, []);

  return isLoading ? (
    <Container className="d-flex justify-content-center">
      <Spinner animation="border" />
    </Container>
  ) : (
    <>
      <Container>
        <Row>
          <Button variant="secondary" onClick={() => setIsButtonPressed(false)}>
            Return To Listings
          </Button>
          {/* EVENT Info */}
          <h1>{raceItems.course}</h1>
          <h5>
            {raceItems.title}(CLASS{raceItems.class})
          </h5>
          <Col className="text-center">
            <ListGroup horizontal>
              <ListGroup.Item>Winner: {raceItems.prize}</ListGroup.Item>
              <ListGroup.Item>Runners: {raceItems.horses.length}</ListGroup.Item>
              <ListGroup.Item>Distance: {raceItems.distance}</ListGroup.Item>
              <ListGroup.Item>Going: {raceItems.going}</ListGroup.Item>
            </ListGroup>
          </Col>

          {/* Horse Info */}
          <Container>
            <Table responsive>
              <thead>
                <tr>
                  <th>
                    NO. <br /> Form
                  </th>
                  <th>
                    Horse <FaHorseHead />{" "}
                  </th>
                  <th>Age</th>
                  <th>
                    WGT
                    <br />
                    OR
                  </th>
                  <th>
                    Jockey <br /> Trainer
                  </th>
                  <th>SP/Odds</th>
                </tr>
              </thead>
              {horseList.map((horse, index) => (
                <tbody key={index}>
                  <tr>
                    <td>
                      {horse.position} <br /> {horse.form}{" "}
                    </td>
                    <th>
                      {horse.horse} <br /> {horse.distance_beaten}
                    </th>

                    <td>{horse.age} </td>
                    <td>
                      {horse.weight} <br /> {horse.OR}
                    </td>
                    <td>
                      {horse.jockey} <br /> {horse.trainer}
                    </td>
                    <td>{horse.sp}</td>
                  </tr>
                </tbody>
              ))}
            </Table>
          </Container>
        </Row>
      </Container>
    </>
  );
}

export default RaceDetails;
