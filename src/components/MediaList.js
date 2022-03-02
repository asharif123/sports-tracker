import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function MediaList(props) {
  return props.isLoading ? (
    <h1>Loading</h1>
  ) : (
    <Container>
      <Row>
        {props.items.map((item) => (
          <Col lg={4} md={6} sm={10} xs={12} key={item.id}>
            <Card>
              <Card.Img variant="top" src={item.thumbnail_url} />
              <Card.Body>
                <Card.Title>{item.title.en}</Card.Title>
                <Card.Text>Somethiung</Card.Text>
                <Button variant="secondary">Watch Highlights</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default MediaList;
