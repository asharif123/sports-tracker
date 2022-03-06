import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const handleClick = (event) => {
    window.open(`${event.target.id}`, '_blank');
  };

function NewsList({ isLoading, articles }) {
  return isLoading ? (
    <h1>Loading</h1>
  ) : (
    <Container>
      <Row>
        {articles.map((item) => (
          <Col lg={3} md={6} sm={10} xs={12}>
            <Card className="p-2 text-center">
              <Card.Img src={item.urlToImage} />
              <Card.Body>
                <Card.Title style={{ height: "100px" }}>{item.title}</Card.Title>
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