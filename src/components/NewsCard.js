import { Card, Space, Typography } from "antd";
import Meta from "antd/lib/card/Meta";
import React from "react";

export default function NewsCard({ data }) {
  const { Text, Link } = Typography;

  return (
    <Card
      hoverable
      cover={<img className="h-175" alt="news" src={data?.image} />}
      title={data?.title}
      className="border-radius-15"
    >
      <Meta
        title={`${data.description.slice(0, 100)}...`}
        description={`${data.content.slice(0, 200)}...`}
        className="fs-12"
      />
      <Space direction="vertical">
        <Link className="fs-12" href={data.url} target="_blank">
          Read More
        </Link>
        <Text className="fs-10" italic>
          By {data?.source?.name}
        </Text>
      </Space>
    </Card>
  );
}
