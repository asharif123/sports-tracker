import { useEffect, useState } from "react";
import axios from "axios";
import MediaList from "./MediaList";
import { Button, Container } from "react-bootstrap";

function MediaGrid() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const fetchAPI = async () => {
      const result = await axios.get(`https://sportscore1.p.rapidapi.com/medias`, {
        params: { page: `${pageNumber}` },
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
  }, [pageNumber]);

  function handlePageNumber(page) {
    if (page <= 0) {
      return;
    }
    setPageNumber(page);
  }

  return (
    <>
      <MediaList isLoading={isLoading} items={items} />
      <Container className="d-flex align-items-center justify-content-center">
        <div className="p-2">
          <Button variant="info" size="lg" onClick={() => handlePageNumber(pageNumber - 1)}>
            Previous
          </Button>
        </div>
        <div className="p-2">
          <Button variant="info" size="lg" onClick={() => handlePageNumber(pageNumber + 1)}>
            Next
          </Button>
        </div>
      </Container>
    </>
  );
}

export default MediaGrid;
