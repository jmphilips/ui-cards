import React from "react";
import data from "../Data/data";
import chunk from "lodash/chunk";
import CardRow from "../CardRow/CardRow";

const CardColumn = () => {
  const users = chunk(data(), 3);

  const rows = users.map(userArr => {
    return <CardRow users={userArr} />;
  });

  return <div style={{ padding: "2.5%" }}>{rows}</div>;
};

export default CardColumn;
