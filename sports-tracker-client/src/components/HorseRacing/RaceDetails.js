import React, { useEffect, useState } from "react";
import axios from "axios";
import RaceDetailsCards from "./RaceDetailsCards";

function RaceDetails({ raceDetails }) {
  console.log(raceDetails);
  const [raceItems, setRaceItems] = useState([]);

  useEffect(() => {
    const fetchRaceDetails = async () => {
      const result = await axios.get(`https://horse-racing.p.rapidapi.com/race/${raceDetails}`, {
        headers: {
          "x-rapidapi-host": "horse-racing.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
        },
      });
      console.log(result.data);
      setRaceItems(result.data);
      //   setIsLoading(false);
    };
    fetchRaceDetails();
  }, []);

  return (
    <div>
      <RaceDetailsCards raceItems={raceItems} />
    </div>
  );
}

export default RaceDetails;
