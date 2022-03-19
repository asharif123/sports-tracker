import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import SportsList from "./SportsList";

function Sports() {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);

  return (
    <div>
      <Container>
        <Row>
          <SportsList items={items} />
        </Row>
      </Container>
    </div>
  );
}

export default Sports;
