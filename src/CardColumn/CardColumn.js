import React from "react";
import { Row, Col } from "antd";
import Card from "../UserCard/UserCard";
import data from "../Data/data";
import chunk from "lodash/chunk";

const CardColumn = () => {
  const users = chunk(data(), 3);

  const rows = users.map(userArr => {
    return createCardRow(userArr);
  });

  return <div style={{ padding: "2.5%" }}>{rows}</div>;
};

const createCardRow = arr => {
  const mappedArray = arr.map(obj => {
    return (
      <Col span={8}>
        <Card
          username={obj.username}
          jobTitle={obj.jobTitle}
          cityName={obj.cityName}
        />
      </Col>
    );
  });
  return (
    <Row gutter={16} style={{ padding: "1rem" }}>
      {mappedArray}
    </Row>
  );
};

export default CardColumn;
