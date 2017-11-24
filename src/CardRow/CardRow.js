import React from "react";
import { Row, Col } from "antd";
import UserCard from "../UserCard/UserCard";

const CardRow = props => {
  const cards = props.users.map(obj => {
    return (
      <Col span={8}>
        <UserCard
          username={obj.username}
          jobTitle={obj.jobTitle}
          cityName={obj.cityName}
        />
      </Col>
    );
  });
  return (
    <Row gutter={16} style={{ padding: "1rem" }}>
      {cards}
    </Row>
  );
};

export default CardRow;
