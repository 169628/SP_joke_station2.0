import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import { Button, Card, Row, Col } from "react-bootstrap";

export default function Author() {
  return (
    <>
      <Layout>
        <Card className="text-center">
          <Card.Body>
            <Card.Title>
              "username": "魯肉飯" <Button variant="primary">追蹤</Button>
            </Card.Title>
            <Card.Text>"about_me": "null"</Card.Text>

            <Card.Text>
              <Link to="#"> "title": "補課" </Link>
              "score": null
              <Button variant="primary">刪除</Button>
            </Card.Text>
            <Card.Text>
              <Link to="#"> "title": "補課" </Link>
              "score": null
              <Button variant="primary">刪除</Button>
            </Card.Text>
            <Card.Text>
              <Link to="#"> "title": "補課" </Link>
              "score": null
              <Button variant="primary">刪除</Button>
            </Card.Text>
          </Card.Body>
        </Card>
      </Layout>
    </>
  );
}
