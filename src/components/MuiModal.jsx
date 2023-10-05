import * as React from 'react';
import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styled from 'styled-components';
import Colors from '../style/Colors';
import MuiDropdown from './MuiDropdown';
import MuiTextField from './MuiTextField';
import MuiButton from './MuiButton';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 480,
  bgcolor: 'background.paper',
  p: 2,
};

const Title = styled.div`
  font-family: 'Noto Sans', sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.46px;
  color: ${Colors.BLACK100};
`;

const ContainerRow = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 4px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const MuiButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const MuiModal = ({ open, handleClose, name }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Container>
          <ContainerRow>
            <Title>{name}</Title>
            <Title>-</Title>
            <Title>접수하기</Title>
          </ContainerRow>
          <MuiDropdown />
          <MuiTextField />
          <MuiButtonContainer>
            <MuiButton />
          </MuiButtonContainer>
        </Container>
      </Box>
    </Modal>
  );
};

export default MuiModal;
