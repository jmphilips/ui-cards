import React from 'react';

import Card from '../UserCard/UserCard';

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
    <div>
      {cards}
    </div>
  )
}

export default CardColumn;