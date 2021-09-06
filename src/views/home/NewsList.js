import { Col, Empty, Row } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import NewsCard from "../../components/NewsCard";

export default function NewsList() {
  const { newsList } = useSelector(({ newsData: { newsList } }) => ({
    newsList,
  }));

  return (
    <>
      {newsList.length > 0 && (
        <Row gutter={[16, 16]} className="pt-20">
          {newsList.map((data, index) => (
            <Col key={index} xs={24} sm={12} md={8} flex="1">
              <NewsCard data={data} />
            </Col>
          ))}
        </Row>
      )}
      {newsList.length === 0 && (
        <Row gutter={[16, 16]} className="pt-20" justify="center">
          <Empty />
        </Row>
      )}
    </>
  );
}
