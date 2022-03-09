import React from "react";
import Events from "../components/Events";
import NewsCarousel from "../components/carousel/NewsCarousel";
import Sports from "../components/sportsOdds/Sports";
import  { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import {CountContext} from "../ContextProvider";

function Home() {
  const { state, dispatch } = useContext(CountContext);

  return (
    <div>
      <NewsCarousel />
      <>{!state.loggedIn ? <Navigate replace to="/login" /> : <Events />}</>
    </div>
  );
}

export default Home;
