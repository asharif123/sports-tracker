import { useEffect, useState } from "react";
import axios from "axios";
import MediaList from "./MediaList";

function MediaGrid() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAPI = async () => {
      const result = await axios.get(`https://sportscore1.p.rapidapi.com/medias`, {
        params: { page: "1" },
        headers: {
          "x-rapidapi-host": "sportscore1.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
        },
      });
      console.log(result.data.data);
      setItems(result.data.data);
      setIsLoading(false);
    };
    fetchAPI();
  }, []);

  return (
    <div>
      <MediaList isLoading={isLoading} items={items} />
    </div>
  );
}

export default MediaGrid;
