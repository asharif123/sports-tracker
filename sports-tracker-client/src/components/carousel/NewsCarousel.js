import { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "./Carousel";

import "./carousel.css";


function NewsCarousel() {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const fetchAPI = async () => {
        const result = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=29a6fdefaa474865ad7b23fb0e63c74e`, {
         params: { 
            page: 1,
            pageSize: 10,
            category: "sports",
         },
         /* headers: {
            "X-Api-Key": process.env.REACT_APP_X_API_KEY,
          }, */
        });
        console.log(result.data.articles);
        setArticles(result.data.articles);
        setIsLoading(false);
      };
      fetchAPI();
    }, []);
   
    return (
      <div className="carGrid">
        <Carousel isLoading={isLoading} articles={articles} />
      </div>
    );
    }
export default NewsCarousel;