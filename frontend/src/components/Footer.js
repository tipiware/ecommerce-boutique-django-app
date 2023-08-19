import React from "react";

/* REACT-BOOTSTRAP */
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">All Rights Reserved © 2023 Boutique Store. Unauthorized copying, reproduction, distribution, or any other use of content, images, and materials from this website is strictly prohibited without prior written consent from boutique store."</Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
