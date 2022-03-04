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
    <Container className="d-flex justify-content-center">
      <Row>
        <Col lg={12} md={12} sm={12} xs={12}>
          <Card>
            <Card.Body>
              <ReactPlayer controls url={highlightVideo}></ReactPlayer>
              <Button
                variant="secondary"
                size="lg"
                type="button"
                className="w-100 py-2"
                onClick={() => isPlayButtonToggle(false)}
              >
                Go Back
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  ) : (
    // NORMAL RENDER
    <Container>
      <Row>
        {items.map((item) => (
          <Col lg={4} md={6} sm={10} xs={12} key={item.id}>
            <Card className="p-2 text-center">
              <Card.Img variant="top" src={item.thumbnail_url} />
              <Card.Body>
                <Card.Title style={{ height: "48px" }}>{item.title.en}</Card.Title>
                <Button
                  className="w-100"
                  variant="secondary"
                  id={item.url}
                  type="button"
                  onClick={handleClick}
                >
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
