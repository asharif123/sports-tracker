import React from "react";
import ReactDOM from "react-dom";
import Flickity from "react-flickity-component";

import "./carousel.css";
import "./flickity.css";

const flickityOptions = {
  initialIndex: 4
}

function Carousel(props) {
  return (
    <Flickity 
    className={'carousel'} // default ''
    elementType={'div'} // default 'div'
    options={flickityOptions} // takes flickity options {}
    disableImagesLoaded={false} // default false
    reloadOnUpdate // default false
    static> {/* default false */}
      {props.articles.map((article) => (
        <div className="carCard">
          <div className="cardContent">
          <img src={article.urlToImage} alt=""/>
          <h6>{article.title}</h6>
          <p>by {article.author}</p>
          <form action={article.url} target="_blank">
            <input type="submit" value="View Article" />
          </form>
          </div>
        </div>
        ))} 
    </Flickity>
  );
}

export default Carousel;