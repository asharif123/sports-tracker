import { useEffect, useState } from "react";
import axios from "axios";
import NewsList from "./NewsList";
import dayjs from "dayjs";

const current = dayjs().format();
console.log(current);
const yesterday = dayjs().subtract(1, "day").format();
console.log(yesterday);

function NewsGrid() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAPI = async () => {
      const result = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us`,
        {
          params: {
            page: 1,
            pageSize: 100,
            from: yesterday,
            to: current,
            category: "sports",
          },
          headers: {
            "X-Api-Key":
              process.env.REACT_APP_X_API_KEY ||
              "29a6fdefaa474865ad7b23fb0e63c74e",
          },
        }
      );
      console.log(result.data.articles);
      setArticles(result.data.articles);
      setIsLoading(false);
    };
    fetchAPI();
  }, []);

  return (
    <div>
      <NewsList isLoading={isLoading} articles={articles} />
    </div>
  );
}

export default NewsGrid;
