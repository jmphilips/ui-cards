import React from 'react';
import { Row, Col } from 'antd';
import Card from '../UserCard/UserCard';
import data from './data';

const CardColumn = () => {
  const cards = data().map(user => {
    return (
      <Col span={8}>
        <Card
          username={user.username}
          jobTitle={user.jobTitle}
          cityName={user.cityName}
        />
      </Col>
    );
  });
  return (
    <div style={{ padding: '2.5%' }}>
      <Row gutter={16}>{cards}</Row>
    </div>
  );
};

export default CardColumn;
