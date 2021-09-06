import React from "react";
import SearchWithLanguage from "./SearchWithLanguage";
import { Row, Col } from "antd";

function Home() {
  return (
    <Row gutter={16}>
      <Col xs={24}>
        <Row justify="center">
          <Col xs={24} sm={16}>
            <SearchWithLanguage />
          </Col>
        </Row>
      </Col>
      <Col xs={24}>test</Col>
    </Row>
  );
}

export default Home;
