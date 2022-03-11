import { useEffect, useState } from "react";
import axios from "axios";
import EventList from "./EventList";
import { Button } from "react-bootstrap";
import "../components/styles/navbar.css";
import moment from "moment";

function Event() {
  const [sportType, setSportType] = useState("3");
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentDate, setCurrentDate] = useState("2022-03-11");

  useEffect(() => {
    let date = moment(new Date()).format("YYYY-MM-DD");
    setCurrentDate(date);
    console.log(currentDate);
  }, []);

  useEffect(() => {
    const fetchSport = async () => {
      const result = await axios.get(
        `https://sportscore1.p.rapidapi.com/sports/${sportType}/events/date/${currentDate}`,
        {
          params: { page: "1" },
          headers: {
            "x-rapidapi-host": "sportscore1.p.rapidapi.com",
            "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
          },
        }
      );
      console.log(result.config.url);
      console.log(result.data.data);
      setItems(result.data.data);
      setIsLoading(false);
    };
    fetchSport();
  }, [sportType]);

  return (
    <>
      <div className="navbarButton">
        <Button className="navbarButton-link" variant="secondary" onClick={() => setSportType("1")}>
          Soccer/Football
        </Button>
        <Button className="navbarButton-link" variant="secondary" onClick={() => setSportType("2")}>
          Tennis
        </Button>
        <Button className="navbarButton-link" variant="secondary" onClick={() => setSportType("3")}>
          Basketball
        </Button>
        <Button className="navbarButton-link" variant="secondary" onClick={() => setSportType("4")}>
          Ice Hockey
        </Button>
        <Button className="navbarButton-link" variant="secondary" onClick={() => setSportType("5")}>
          Volleyball
        </Button>
        <Button className="navbarButton-link" variant="secondary" onClick={() => setSportType("6")}>
          Handball
        </Button>
      </div>
      <EventList isLoading={isLoading} items={items} />
    </>
  );
}
export default Event;
