import * as React from "react";

import Layout from "../components/layout";
import { Button, Card, InputGroup, Form, Row, Col } from "react-bootstrap";

export default function post() {
  return (
    <>
      <Layout>
        <Card className="text-center">
          <Card.Body>
            <Row className="mt-3">
              <Col sm={2}></Col>
              <Col>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon3">標題</InputGroup.Text>
                  <Form.Control
                    id="basic-url"
                    aria-describedby="basic-addon3"
                  />
                </InputGroup>

                <InputGroup>
                  <InputGroup.Text>內容</InputGroup.Text>
                  <Form.Control as="textarea" aria-label="With textarea" />
                </InputGroup>
                <Row className="mt-3 d-flex justify-content-center">
                  <Button variant="primary" className="rounded-pill w-50">
                    新增笑話
                  </Button>
                </Row>
              </Col>
              <Col sm={2}></Col>
            </Row>
          </Card.Body>
        </Card>
      </Layout>
    </>
  );
}
