import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsList from "./NewsList";

function NewsBar() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const result = await axios.get(`https://livescore6.p.rapidapi.com/news/v2/list`, {
        params: { Category: "soccer" },
        headers: {
          "x-rapidapi-host": "livescore6.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
        },
      });
      console.log(result.data.topStories);
      setItems(result.data.topStories);
    };
    fetchAPI();
  }, []);

  return (
    <div>
    </div>
  );
}

export default NewsBar;
