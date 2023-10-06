import * as React from 'react';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import Colors from '../style/Colors';

const StyledButton = styled(Button)`
  && {
    background-color: ${props => (props.disabled ? Colors.GREY40 : Colors.POINT_DEEP)};
    color: ${Colors.WHITE100};
    font-size: 13px;
    font-weight: bold;
    width: 70px;
    &:hover {
      background-color: ${Colors.POINT_DEEP};
      color: ${Colors.WHITE100};
    }
  }
`;

const MuiButton = ({ onClick, text, disabled }) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {text}
    </StyledButton>
  );
};

export default MuiButton;
