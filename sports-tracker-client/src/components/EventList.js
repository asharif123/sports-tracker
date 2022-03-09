import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../components/styles/events.css";
function EventList({ isLoading, items }) {
  return isLoading ? (
    <h1>Loading</h1>
  ) : (
    <Container>
      <Row>
        {items.map((item) => (
          <Col xl={3} lg={4} md={6} sm={12} xs={12} key={item.id} className="p-2">
            <Card className="gameCard text-center">
              <div className="home-away-teams">
                <Card.Img
                  variant="top"
                  src={item?.home_team?.logo}
                  alt={item.home_team.name_code}
                  style={{ width: "50px", height: "50px" }}
                />
                <Card.Img
                  variant="top"
                  src={item.away_team.logo}
                  style={{ width: "50px", height: "50px" }}
                />
              </div>
              <Card.Body className="p-2">
                <Card.Text style={{ height: "48px" }}>
                  {item.home_team.name_short} vs. {item.away_team.name_short}
                </Card.Text>
                <Card.Title>
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
