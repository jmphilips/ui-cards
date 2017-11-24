import React from "react";
import { Row, Col } from "antd";
import FilmCard from "../FilmCard/FilmCard";

const CardRow = props => {
  const cards = props.filmArr.map(obj => {
    return (
      <Col key={obj.id} span={8}>
        <FilmCard
          title={obj.title}
          release_date={obj.release_date}
          description={obj.description}
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
