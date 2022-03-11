import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import RacecardsList from "./RacecardsList";

function Racecards() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentDate, setCurrentDate] = useState("2022-03-05");

  //   RaceCards
  useEffect(() => {
    let date = moment(new Date()).format("YYYY-MM-DD");
    setCurrentDate(date);
    console.log(currentDate);

    const fetchCard = async () => {
      const result = await axios.get(`https://horse-racing.p.rapidapi.com/racecards`, {
        params: { date: `${currentDate}` },
        headers: {
          "x-rapidapi-host": "horse-racing.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
        },
      });
      console.log(result.config.url);
      console.log(result.data);
      setItems(result.data);
      setIsLoading(false);
    };
    fetchCard();
  }, [currentDate]);

  return (
    <>
      <RacecardsList isLoading={isLoading} items={items} />
    </>
  );
}

export default Racecards;
