import * as React from "react";
import { Container, Navbar } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";

import LayoutOffCanvas from "./offcanvas";

export default function LayoutNavbar() {
  return (
    <Navbar bg="primary" data-bs-theme="dark" className="mb-5">
      <Container>
        <Navbar.Brand href="#home">
          <StaticImage
            src="../images/logo.png"
            alt="logo"
            style={{ width: "100px" }}
          />
        </Navbar.Brand>
        <LayoutOffCanvas placement="end" name="登入">
          登入、註冊
        </LayoutOffCanvas>
        <LayoutOffCanvas placement="end" name="開始">
          關於我、寫一則笑話、已收藏、已追蹤、登出
        </LayoutOffCanvas>
      </Container>
    </Navbar>
  );
}
