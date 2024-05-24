import * as React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Container>
        <Row className="mt-5">
          <Col>
            <Card className="text-center">
              <Card.Body>
                <Card.Title>忘記密碼</Card.Title>
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
                  <Col>請輸入註冊的電子信箱</Col>
                  <Col>請至信箱中收取信件中的暫時密碼</Col>
                  <Col>以暫時密碼登入後請記得到個人資訊頁修改密碼</Col>
                </Row>

                <div className="input-group mt-5 ">
                  <div className="form-floating">
                    <input
                      type="mail"
                      className="form-control rounded-pill"
                      placeholder="Mail"
                      id="floatingMail"
                      aria-describedby="button-addon2"
                    />
                    <label htmlFor="floatingMail">
                      <i className="bi bi-envelope"></i> Email
                    </label>
                  </div>
                  <button
                    className="btn btn-primary rounded-pill"
                    type="button"
                    id="button-addon2"
                  >
                    寄送暫時密碼
                  </button>
                </div>
                <Row className="d-grid gap-2 ms-1 mt-3 me-1">
                  <Button variant="primary" className="rounded-pill" size="lg">
                    <i className="bi bi-google"></i> 以 Google 帳號登入
                  </Button>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
