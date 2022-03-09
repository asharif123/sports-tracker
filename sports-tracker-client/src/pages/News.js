import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import NewsGrid from "../components/newspage/NewsGrid";
import NewsBanner from "../components/newspage/NewsBanner";
import  { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import {CountContext} from "../ContextProvider";

function News() {
    const { state, dispatch } = useContext(CountContext);
    return (
        <div>
            <NewsBanner/>    
            
            <>{!state.loggedIn ? <Navigate replace to="/login" /> : <NewsGrid/>}</>

        </div>
      );
   }

export default News;