import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import NewsGrid from "../components/newspage/NewsGrid";
import NewsBanner from "../components/newspage/NewsBanner";

function News() {
    return (
        <div>
            <NewsBanner/>    
            <NewsGrid/>
        </div>
      );
   }

export default News;