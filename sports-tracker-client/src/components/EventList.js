import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Text } from "react-bootstrap";
import '../components/styles/events.css';
function EventList({ isLoading, items }) {
  return isLoading ? (
    <h1>Loading</h1>
  ) : (
    <Container>
      <Row>
        {items.map((item) => (
          <Col lg={4} md={6} sm={10} xs={12} key={item.id}>
            <Card className="gameCard p-2 text-center">
              <div className="home-away-teams">
                <Card.Img variant="top" src={item.home_team.logo} />
                <Card.Img variant="top" src={item.away_team.logo} />
              </div>
              <Card.Body>
              <Card.Text style={{ height: "48px" }}>
                <h5>{item.home_team.name} vs. {item.away_team.name}</h5>
              </Card.Text>
                <h5>Current Score</h5>
                <Card.Title style={{ height: "48px" }}>
                  {item?.home_score?.current} - {item?.away_score?.current}
                </Card.Title>
                <Card.Text>{item?.status}</Card.Text>
                  <h5>Start Date</h5>
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
