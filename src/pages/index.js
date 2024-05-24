import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import { Button, Card, Row, Col } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Layout>
        <Card className="text-center">
          <Card.Body>
            <Card.Title>
              "title": "補課" <Button variant="primary">收藏</Button>
            </Card.Title>
            <Card.Text>
              "content":
              "老師﹕「這作業是你自己作的嗎？」\n學生﹕「不，爸爸幫我作的。」\n老師﹕「回去跟你爸爸說，星期天他也要來補課。」"
            </Card.Text>
            <Link to="#">"username": "魯肉飯"</Link>
            <Card.Text>
              "score": null <Button variant="primary">去評分</Button>
            </Card.Text>
            <Button variant="primary">下一則</Button>
          </Card.Body>
          <Card.Footer className="text-muted">
            <table className="table table-light">
              <tbody>
                <tr>
                  <th scope="row">Mark</th>
                  <td>留言留言留言留言留言留言留言留言</td>
                </tr>
                <tr>
                  <th scope="row">Jacob</th>
                  <td>留言留言留言留言留言留言留言留言</td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <Row>
                      <Col sm={11}>
                        <textarea
                          className="form-control"
                          style={{ height: "100px" }}
                        ></textarea>
                      </Col>
                      <Col
                        sm={1}
                        className="d-flex justify-content-center align-items-center"
                      >
                        <Button variant="primary">留言</Button>
                      </Col>
                    </Row>
                  </td>
                </tr>
              </tbody>
            </table>
          </Card.Footer>
        </Card>
      </Layout>
    </>
  );
}
