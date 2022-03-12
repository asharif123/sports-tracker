import { useEffect, useState } from "react";
import axios from "axios";
import Ticker from "react-ticker";
import "bootstrap/dist/css/bootstrap.min.css";
import { ListGroup } from "react-bootstrap";
import "./LiveScore.css";
import Logo from "./images/Logo.png";
// Create Live event Items
const GetEvents = ({ scores }) => {
  function addDefaultSrc(ev) {
    ev.target.src = Logo;
  }

  return scores ? (
    <p className="tickerBar" style={{ whiteSpace: "nowrap" }}>
      <ListGroup horizontal>
        {scores.map((score) => (
          <>
            <ListGroup.Item className="border-0 tickerItems">
              <h1>|</h1>
            </ListGroup.Item>
            <ListGroup.Item className="border-0 tickerItems">
              <h3>{score.home_team.name_code}</h3>
            </ListGroup.Item>
            <ListGroup.Item className="border-0 tickerItems">
              <img height="50px" width="50px" src={score?.home_team.logo} onError={addDefaultSrc} />
            </ListGroup.Item>
            <ListGroup.Item className="border-0 tickerItems">
              <h4>{score.home_score.current}</h4>
            </ListGroup.Item>
            <ListGroup.Item className="border-0 tickerItems">
              <h3>{score.away_team.name_code}</h3>
            </ListGroup.Item>
            <ListGroup.Item className="border-0 tickerItems">
              <img height="50px" width="50px" src={score?.away_team.logo} onError={addDefaultSrc} />
            </ListGroup.Item>
            <ListGroup.Item className="border-0 tickerItems">
              <h4>{score.away_score.current}</h4>
            </ListGroup.Item>
            <ListGroup.Item className="border-0 tickerItems">
              <h1>|</h1>
            </ListGroup.Item>
          </>
        ))}
      </ListGroup>
    </p>
  ) : (
    <p className="tickerBar" style={{ visibility: "hidden" }}>
      Placeholder
    </p>
  );
};

function LiveScore() {
  const [scores, setScores] = useState([]);

  //for initial isLoading
  useEffect(() => {
    axios
      .get(`https://sportscore1.p.rapidapi.com/events/live`, {
        params: {
          page: 1,
        },
        headers: {
          "x-rapidapi-host": "sportscore1.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
        },
      })
      .then(({ data }) => {
        console.log(data.data);
        setScores(data.data);
      });
  }, []);

  // Timed call to refresh scores
  useEffect(() => {
    const timeer = setTimeout(() => {
      //debounced effect
      async function fetchAPI() {
        const result = await axios.get(`https://sportscore1.p.rapidapi.com/events/live`, {
          params: {
            page: 1,
          },
          headers: {
            "x-rapidapi-host": "sportscore1.p.rapidapi.com",
            "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
          },
        });
        console.log(result.data.data);
        setScores(result.data.data);
      }
      fetchAPI();
    }, 600000);
    return () => clearTimeout(timeer);
  });
  return (
    <div className="ticker">
      <Ticker offset="run-in" speed={5}>
        {() => <GetEvents scores={scores} />}
      </Ticker>
    </div>
  );
}

export default LiveScore;
