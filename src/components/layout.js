import * as React from "react";
import "../css/all.css";
import { Container, Row, Col } from "react-bootstrap";

import LayoutNavbar from "./navbar";

export default function Layout({ children }) {
  return (
    <div>
      <LayoutNavbar />
      <Container>
        <Row>
          <Col>{children}</Col>
        </Row>
      </Container>
    </div>
  );
}
