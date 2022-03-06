import React from "react";
import Events from "../components/Events";
import NewsCarousel from "../components/carousel/NewsCarousel";

function Home() {
  return (
    <div>
      <NewsCarousel />
      <Events />
    </div>
  );
}

export default Home;
