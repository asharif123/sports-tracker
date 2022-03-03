import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function EventList({ isLoading, items }) {
  return isLoading ? (
    <h1>Loading</h1>
  ) : (
    <Container>
      <Row>
        {items.map((item) => (
          <Col lg={4} md={6} sm={10} xs={12} key={item.id}>
            <Card className="p-2 text-center">
              <Card.Img variant="top" src={item?.home_team?.logo} />
              <Card.Img variant="top" src={item?.away_team?.logo} />
              <Card.Body>
                <Card.Title style={{ height: "48px" }}>
                  {item?.home_score?.current} - {item?.away_score?.current}
                </Card.Title>
                <Card.Text>{item?.status}</Card.Text>
                <Card.Text>{item?.start_at}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default EventList;
