import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row } from "react-bootstrap";
import SportsList from "./SportsList";

function Sports() {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const result = await axios.get(`https://odds.p.rapidapi.com/v4/sports`, {
        params: { all: "true" },
        headers: {
          "x-rapidapi-host": "odds.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
        },
      });
      console.log(result.data);
      setItems(result.data);
      setIsLoading(false);
    };
    fetchAPI();
  }, []);

  return (
    <div>
      <Container>
        <Row>
          <SportsList isLoading={isLoading} items={items} />
        </Row>
      </Container>
    </div>
  );
}

export default Sports;
