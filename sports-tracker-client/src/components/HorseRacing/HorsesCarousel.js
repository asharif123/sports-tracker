import React from "react";
import { Carousel, Container, Table, Row, Col } from "react-bootstrap";
import { FaHorseHead } from "react-icons/fa";

function HorsesCarousel({ horseList }) {
  console.log("horseList", horseList);
  return (
    <>
      <Container>
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Horse</th>
              <th>Age</th>
              <th>WGT OR</th>
              <th>Jockey Trainer</th>
            </tr>
          </thead>
          {horseList.map((horse, index) => (
            <tbody key={index}>
              <tr>
                <td>{index}</td>
                <td>
                  {horse.horse} {horse.number}
                </td>
                <td>{horse.age}</td>
                <td>
                  {horse.weight} {horse.OR}
                </td>
                <td>{horse.number}</td>
              </tr>
            </tbody>
          ))}
        </Table>
      </Container>
    </>
  );
}

export default HorsesCarousel;
