import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Construction from "./construction-moon.png";
import "./style.css";

function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
            <h1 className="text-center">Site Under Construction</h1>
            <h1 className="text-center">
              <img className="construction" src={Construction}/>
            </h1>

        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;
