import React from 'react';

import { CardContainer } from './card.styled';

function Card({ children }) {
  return <CardContainer>{children}</CardContainer>;
}

export default Card;
