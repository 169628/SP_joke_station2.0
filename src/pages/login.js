import * as React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Form,
  InputGroup,
} from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";

export default function Home() {
  return (
    <>
      <Container>
        <Row className="mt-5">
          <Col>
            <Card className="text-center">
              <Container>
                <Row>
                  <Col>
                    <StaticImage src="../images/login.jpg" alt="login" />
                  </Col>
                  <Col>
                    <Card.Body>
                      <Card.Title>登入</Card.Title>
                      <div className="form-floating">
                        <input
                          type="mail"
                          className="form-control"
                          id="floatingMail"
                          placeholder="Password"
                        />
                        <label for="floatingMail">
                          <i class="bi bi-envelope"></i> Email
                        </label>
                      </div>
                      <div className="form-floating">
                        <input
                          type="password"
                          className="form-control"
                          id="floatingPassword"
                          placeholder="Password"
                        />
                        <label for="floatingPassword">
                          <i class="bi bi-shield-lock"></i> Password
                        </label>
                      </div>
                      <Button variant="primary">以信箱登入</Button>
                    </Card.Body>
                  </Col>
                </Row>
              </Container>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
