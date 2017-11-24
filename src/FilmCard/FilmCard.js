import React from "react";
import { Card } from "antd";

const FilmCard = props => {
  return (
    <div>
      <Card title={props.title} extra={props.release_date}>
        <p>{props.description}</p>
      </Card>
    </div>
  );
};

export default FilmCard;
