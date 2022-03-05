import React from "react";
import MediaGrid from "../components/MediaGrid";
import NewsBar from "../components/NewsBar";
import Events from "../components/Events";
import NewsCarousel from "../components/carousel/NewsCarousel";

function Home() {
  return (
    <div>
      {/* <NewsBar />; */}
      <MediaGrid />;
      <NewsCarousel/>
      <Events />
    </div>
  );
}

export default Home;
