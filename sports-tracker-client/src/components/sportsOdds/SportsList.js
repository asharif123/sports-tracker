import React, { useEffect, useState } from "react";
import { ListGroup, ListGroupItem, Col } from "react-bootstrap";
import axios from "axios";
import SportsScores from "./SportsScores";

function SportsList({ isLoading, items }) {
  const [sportName, setSportName] = useState("americanfootball_nfl");
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
