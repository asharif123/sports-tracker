import React, { useEffect, useState } from "react";
import { ListGroup, ListGroupItem, Col } from "react-bootstrap";
import axios from "axios";
import SportsScores from "./SportsScores";
import MediaGrid from "../MediaGrid";

function SportsList({ isLoading, items }) {
  const [sportName, setSportName] = useState("basketball_nba");
  const [gameScores, setGameScores] = useState([]);

  function handleClick(event) {
    console.log("sport selected key:", event.target.id);
    setSportName(event.target.id);
  }

  useEffect(() => {
    const fetchScores = async () => {
      const result = await axios.get(`https://odds.p.rapidapi.com/v4/sports/${sportName}/scores`, {
        params: { daysFrom: "3" },
        headers: {
          "x-rapidapi-host": "odds.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
        },
      });
      console.log(result.data);
      setGameScores(result.data);
    };
    fetchScores();
  }, [sportName]);

  //
  return (
    <>
      <Col lg={4} md={6} sm={12}>
        <ListGroup className="text-center">
          <ListGroupItem id="americanfootball_ncaaf" action onClick={handleClick}>
            NCAAF
          </ListGroupItem>
          <ListGroupItem id="americanfootball_nfl" action onClick={handleClick}>
            NFL
          </ListGroupItem>
          <ListGroupItem id="baseball_mlb" action onClick={handleClick}>
            MLB
          </ListGroupItem>
          <ListGroupItem id="basketball_nba" action onClick={handleClick}>
            NBA
          </ListGroupItem>
          <ListGroupItem id="basketball_ncaab" action onClick={handleClick}>
            NCAAB
          </ListGroupItem>
        </ListGroup>
      </Col>
      <Col lg={8} md={6} sm={12}>
        <SportsScores gameScores={gameScores} />
      </Col>
    </>
  );

  // For full map of options
  return isLoading ? (
    <h1>Loading</h1>
  ) : (
    <>
      <Col lg={4} md={4} sm={4}>
        <ListGroup>
          {items.map((item) => (
            <ListGroupItem key={item.key} id={item.key} action onClick={handleClick}>
              {item.title}
            </ListGroupItem>
          ))}
        </ListGroup>
      </Col>
      <Col lg={8} md={8} sm={4}>
        <SportsScores gameScores={gameScores} />
      </Col>
    </>
  );
}

export default SportsList;
