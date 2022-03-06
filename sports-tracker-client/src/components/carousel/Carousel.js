import React from "react";
import ReactDOM from "react-dom";
import Flickity from "react-flickity-component";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

import "./carousel.css";
import "./flickity.css";

const flickityOptions = {
  initialIndex: 4
}

const handleClick = (event) => {
  window.open(`${event.target.id}`, '_blank');
};

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
          <Button
            className="w-100"
            variant="secondary"
            id={article.url}
            type="button"
            onClick={handleClick}
          >
            View Article
          </Button>
          </div>
        </div>
        ))} 
    </Flickity>
  );
}

export default Carousel;