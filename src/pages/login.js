import * as React from "react";
import { Link } from "gatsby";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";

export default function Home() {
  return (
    <>
      <Container>
        <Row className="mt-5">
          <Col>
            <Card className="text-center">
              <Container>
                <Row className="d-flex align-items-center">
                  <Col sm={12} md={6} className="mt-5 mb-5">
                    <StaticImage src="../images/welcomeBack.jpg" alt="login" />
                  </Col>
                  <Col sm={12} md={6}>
                    <Card.Body>
                      <Card.Title>登入</Card.Title>
                      <div className="form-floating mt-3">
                        <input
                          type="mail"
                          className="form-control rounded-pill"
                          id="floatingMail"
                          placeholder="Mail"
                        />
                        <label htmlFor="floatingMail">
                          <i className="bi bi-envelope"></i> Email
                        </label>
                      </div>
                      <div className="form-floating mt-3">
                        <input
                          type="password"
                          className="form-control rounded-pill"
                          id="floatingPassword"
                          placeholder="Password"
                        />
                        <label htmlFor="floatingPassword">
                          <i className="bi bi-shield-lock"></i> Password
                        </label>
                      </div>
                      <div className="text-end pe-4">
                        <Link to="/password">忘記密碼</Link>
                      </div>
                      <div className="d-grid gap-2 mt-3">
                        <Button
                          variant="primary"
                          size="lg"
                          className="rounded-pill"
                        >
                          以信箱登入
                        </Button>
                      </div>
                      <div className="d-grid gap-2 mt-3">
                        <Button
                          variant="secondary"
                          size="lg"
                          className="rounded-pill"
                        >
                          <i className="bi bi-google"></i> 以 Google 帳號登入
                        </Button>
                      </div>
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
