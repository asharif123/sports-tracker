import { useEffect, useState } from "react";
import axios from "axios";
import EventList from "./EventList";
import { Button } from "react-bootstrap";
import '../components/styles/navbar.css';

function Event() {
  const [sportType, setSportType] = useState("");
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSport = async () => {
      const result = await axios.get(
        `https://sportscore1.p.rapidapi.com/sports/${sportType}/events`,
        {
          params: { page: "1" },
          headers: {
            "x-rapidapi-host": "sportscore1.p.rapidapi.com",
            "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
          },
        }
      );
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
      <h1>{sportType}</h1>
      {/* {items.map((item) => {
        return <pre>{JSON.stringify(item)}</pre>;
      })} */}
      <EventList isLoading={isLoading} items={items} />
    </>
  );
}
export default Event;
