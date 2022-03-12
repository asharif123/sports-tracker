import { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "./Carousel";


import "./carousel.css";


function NewsCarousel() {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const fetchAPI = async () => {
        const result = await axios.get(`https://newsapi.org/v2/top-headlines?country=us`, {
         params: { 
            page: 1,
            pageSize: 10,
            category: "sports",
         },
         headers: {
            "X-Api-Key": process.env.REACT_APP_X_API_KEY || "d4ac7094famshefb4659379c8985p186611jsn51e5f1601804",
          },
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