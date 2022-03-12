import React from "react";
import { Container, Row, Col, Card, Button, Spinner } from "react-bootstrap";
import fakeNews from "./images/fakeNews.png";
const handleClick = (event) => {
  window.open(`${event.target.id}`, "_blank");
};

function NewsList({ isLoading, articles }) {
  function addDefaultSrc(ev) {
    ev.target.src = fakeNews;
  }

  const GetEvents = ({ scores }) => {};
  return isLoading ? (
    <Container className="d-flex justify-content-center">
      <Spinner animation="border" />
    </Container>
  ) : (
    <Container>
      <Row>
        {articles.map((item) => (
          <Col xl={3} lg={4} md={6} sm={10} xs={12}>
            <Card className="p-2 text-center">
              <Card.Img src={item.urlToImage} onError={addDefaultSrc} style={{ height: "240px" }} />
              <Card.Body>
                <Card.Title style={{ height: "150px" }}>{item.title}</Card.Title>
                <Button
                  className="w-100"
                  variant="secondary"
                  id={item.url}
                  type="button"
                  onClick={handleClick}
                >
                  View Article
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default NewsList;
