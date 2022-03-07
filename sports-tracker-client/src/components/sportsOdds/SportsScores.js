import React from "react";
import { ListGroup, Badge } from "react-bootstrap";

function SportsScores({ gameScores }) {
  return (
    <div>
      <ListGroup>
        {gameScores.map((game) => (
          <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">
                {game.home_team} vs {game.away_team}
              </div>
              {game?.scores?.[0].score} - {game?.scores?.[1].score}
            </div>
            <Badge bg="primary" pill>
              {game.sport_title}
            </Badge>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default SportsScores;
