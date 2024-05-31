import * as React from "react";

import Layout from "../components/layout";
import { Button, Card, Table, Row, Col } from "react-bootstrap";

export default function Edit() {
  return (
    <>
      <Layout>
        <Card className="text-center">
          <Card.Body>
            <Row className="mt-3">
              <Col sm={2}></Col>
              <Col>
                <Table className="table-borderless">
                  <tbody>
                    <tr>
                      <td>暱稱</td>
                      <td>
                        <input
                          type="search"
                          className="form-control rounded-pill"
                          placeholder="Password"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>關於我</td>
                      <td>
                        <input
                          type="search"
                          className="form-control rounded-pill"
                          placeholder="Password"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>信箱</td>
                      <td>
                        <input
                          type="mail"
                          className="form-control rounded-pill"
                          placeholder="Password"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>修改密碼</td>
                      <td>
                        <input
                          type="password"
                          className="form-control rounded-pill"
                          placeholder="Password"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>再輸入一次密碼</td>
                      <td>
                        <input
                          type="password"
                          className="form-control rounded-pill"
                          placeholder="Password"
                        />
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <Row className="mt-1 d-flex justify-content-center">
                  <Button variant="primary" className="rounded-pill w-50">
                    送出修改
                  </Button>
                </Row>
                <Row className="mt-2 d-flex justify-content-center">
                  <Button variant="danger" className="rounded-pill w-50">
                    刪除此帳號
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
