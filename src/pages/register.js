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
                <Card.Body>
                  <Card.Title>註冊</Card.Title>
                  <Row className="mt-5">
                    <Col>
                      <Button
                        className="rounded-pill"
                        variant="secondary"
                        size="sm"
                        active
                      >
                        1
                      </Button>
                    </Col>
                    <Col>
                      <Button
                        className="rounded-pill"
                        variant="outline-secondary"
                        size="sm"
                      >
                        2
                      </Button>
                    </Col>
                    <Col>
                      <Button
                        className="rounded-pill"
                        variant="outline-secondary"
                        size="sm"
                      >
                        3
                      </Button>
                    </Col>
                  </Row>
                  <Row className="p-2">
                    <Col>請輸入您在網站要使用的名稱與信箱</Col>
                    <Col>請至信箱中收取信件中的暫時密碼</Col>
                    <Col>以暫時密碼登入後請記得到個人資訊頁修改密碼</Col>
                  </Row>
                  <Row className="d-flex align-items-center">
                    <Col sm={12} md={6} className="mt-5 mb-5">
                      <StaticImage src="../images/hello.jpg" alt="login" />
                    </Col>
                    <Col sm={12} md={6}>
                      <div className="form-floating mt-3">
                        <input
                          type="text"
                          className="form-control rounded-pill"
                          id="floatingName"
                          placeholder="Name"
                        />
                        <label htmlFor="floatingName">
                          <i class="bi bi-person-circle"></i> Name
                        </label>
                      </div>
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

                      <div className="d-grid gap-2 mt-3">
                        <Button
                          variant="primary"
                          size="lg"
                          className="rounded-pill"
                        >
                          註冊
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
                    </Col>
                  </Row>
                </Card.Body>
              </Container>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
