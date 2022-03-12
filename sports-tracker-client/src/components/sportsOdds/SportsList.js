import React, { useEffect, useState } from "react";
import { Col, ButtonGroup, Dropdown, DropdownButton } from "react-bootstrap";
import axios from "axios";
import SportsScores from "./SportsScores";
// import MediaGrid from "../MediaGrid";
import Events from "../Events";
import Racecards from "../HorseRacing/Racecards";

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

  return isLoading ? (
    <h1>Loading</h1>
  ) : (
    <>
      <Col lg={3} md={4} sm={12}>
        <ButtonGroup>
          <DropdownButton
            as={ButtonGroup}
            title="Select Sport"
            id="bg-nested-dropdown"
            variant="secondary"
          >
            <Dropdown.Item eventKey="1" id="americanfootball_ncaaf" action onClick={handleClick}>
              NCAAF
            </Dropdown.Item>

            <Dropdown.Item eventKey="2" id="americanfootball_nfl" action onClick={handleClick}>
              NFL{" "}
            </Dropdown.Item>

            <Dropdown.Item eventKey="3" id="baseball_mlb" action onClick={handleClick}>
              MLB
            </Dropdown.Item>

            <Dropdown.Item eventKey="4" id="basketball_nba" action onClick={handleClick}>
              NBA
            </Dropdown.Item>

            <Dropdown.Item eventKey="5" id="basketball_ncaab" action onClick={handleClick}>
              NCAAB
            </Dropdown.Item>
          </DropdownButton>
        </ButtonGroup>

        <SportsScores gameScores={gameScores} />
      </Col>
      <Col lg={6} md={8} sm={12}>
        {<Racecards />}
      </Col>
      <Events />
      <Col lg={3} md={6} sm={12}></Col>
    </>
  );

  // For full map of options
  // return isLoading ? (
  //   <h1>Loading</h1>
  // ) : (
  //   <>
  //     <Col lg={4} md={4} sm={4}>
  //       <ListGroup>
  //         {items.map((item) => (
  //           <ListGroupItem key={item.key} id={item.key} action onClick={handleClick}>
  //             {item.title}
  //           </ListGroupItem>
  //         ))}
  //       </ListGroup>
  //     </Col>
  //     <Col lg={8} md={8} sm={4}>
  //       <SportsScores gameScores={gameScores} />
  //     </Col>
  //   </>
  // );
}

export default SportsList;
