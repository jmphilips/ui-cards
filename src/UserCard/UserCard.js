import React from 'react';
import { Card } from 'antd';

import SocialButton from '../SocialButton/SocialButton';

const UserCard = props => {
  return (
    <div className>
      <Card
        title={props.jobTitle}
        extra={props.cityName}
      >
        <h2>{props.username}</h2>
        <SocialButton />
      </Card>
    </div>
  )
};

export default UserCard;
