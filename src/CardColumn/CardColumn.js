import React from 'react';
import './CardColumn.css';

import Card from '../Card/Card';

import data from './data';

const CardColumn = () => {
  const cards = data().map(user => {
    return (
      <Card
        username={user.username}
        jobTitle={user.jobTitle}
        cityName={user.cityName}
      />
    )
  })
  return (
    <div className='CardColumn'>
      {cards}
    </div>
  )
}

export default CardColumn;