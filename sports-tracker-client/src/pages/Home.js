import React from "react";
import NewsCarousel from "../components/carousel/NewsCarousel";
import Sports from "../components/sportsOdds/Sports";
import Login from "../pages/Login";
import { useContext } from "react";
import { CountContext } from "../ContextProvider";
import Racecards from "../components/HorseRacing/Racecards";

function Home() {
  const { state, dispatch } = useContext(CountContext);

  return (
    <div>
      <>{!state.loggedIn ? <Login /> : <NewsCarousel />}</>
      {/* <Sports />
      <Racecards /> */}
      <>{!state.loggedIn ? <Login /> : <Racecards />}</>
    </div>
  );
}

export default Home;
