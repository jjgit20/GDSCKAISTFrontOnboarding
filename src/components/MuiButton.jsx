import * as React from 'react';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import Colors from '../style/Colors';

const StyledButton = styled(Button)`
  && {
    background-color: ${Colors.GREY00};
    color: ${Colors.GREY60};
    font-size: 13px;
    font-weight: bold;
    width: 70px;
    &:hover {
      background-color: ${Colors.POINT_DEEP};
      color: ${Colors.WHITE100};
    }
  }
`;

const MuiButton = ({ onClick }) => {
  return <StyledButton onClick={onClick}>접수하기</StyledButton>;
};

export default MuiButton;
