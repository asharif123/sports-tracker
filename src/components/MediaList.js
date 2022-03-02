import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import ReactPlayer from "react-player";

function MediaList({ isLoading, items }) {
  // URL for selected highlight
  const [highlightVideo, sethighlightVideo] = useState("");
  const [playButtonToggle, isPlayButtonToggle] = useState(false);

  const handleClick = (event) => {
    sethighlightVideo(event.target.id);
    isPlayButtonToggle(true);
    console.log(highlightVideo);
  };

  return isLoading ? (
    <h1>Loading</h1>
  ) : playButtonToggle ? (
    // PLAY HIGHLIGHT
    <Container>
      <Row>
        <Col lg={6} md={6} sm={10} xs={12}>
          <ReactPlayer controls url={highlightVideo}></ReactPlayer>
          <Button variant="secondary" type="button" onClick={() => isPlayButtonToggle(false)}>
            Go Back
          </Button>
        </Col>
      </Row>
    </Container>
  ) : (
    // NORMAL RENDER
    <Container>
      <Row>
        {items.map((item) => (
          <Col lg={4} md={6} sm={10} xs={12} key={item.id}>
            <Card>
              <Card.Img variant="top" src={item.thumbnail_url} />
              <Card.Body>
                <Card.Title>{item.title.en}</Card.Title>
                <Card.Text>Something</Card.Text>
                <Button variant="secondary" id={item.url} type="button" onClick={handleClick}>
                  Watch Highlights
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default MediaList;
