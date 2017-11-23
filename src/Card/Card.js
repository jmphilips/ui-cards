import React from 'react';
import './Card.css';

import SocialButton from '../SocialButton/SocialButton';

const Card = props => {
  return (
    <div className='Card'>
      <p>{props.cityName}</p>
      <h2>{props.username}</h2>
      <p>{props.jobTitle}</p>
      <SocialButton />
      <SocialButton />
    </div>
  )
};

export default Card;