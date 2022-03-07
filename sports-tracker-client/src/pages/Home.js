import React from "react";
import Events from "../components/Events";
import NewsCarousel from "../components/carousel/NewsCarousel";
import Sports from "../components/sportsOdds/Sports";
function Home() {
  return (
    <div>
      <NewsCarousel />
      {/* <Events /> */}
      <Sports />
    </div>
  );
}

export default Home;
