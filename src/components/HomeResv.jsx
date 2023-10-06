import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import Colors from '../style/Colors';

const StyledLink = styled(Link)`
  color: ${({ isSelected }) => (isSelected ? Colors.BLACK100 : Colors.GREY60)};
  text-decoration: none;
  &:hover {
    color: ${Colors.BLACK100};
  }
`;

const HomeResv = ({ to, title }) => {
  const location = useLocation();
  const isSelected = location.pathname === to;

  return (
    <StyledLink isSelected={isSelected} className="title" to={to}>
      {title}
    </StyledLink>
  );
};

export default HomeResv;
