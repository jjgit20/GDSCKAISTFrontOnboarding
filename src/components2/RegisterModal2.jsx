import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import styled from 'styled-components';
import Colors from '../style/Colors';
import MuiDropdown from '../components/MuiDropdown';
import MuiTextField from '../components/MuiTextField';
import MuiButton from '../components/MuiButton';
import { postForEntity } from '../network/HttpRequests';

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
  gap: 12px;
`;

const MuiButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const RegisterModal2 = ({ open, handleClose, hospitalName, patients }) => {
  const [selectedSymptom, setSelectedSymptom] = React.useState('');
  const [note, setNote] = React.useState('');

  const handleSubmit = () => {
    // 서버로 전송할 데이터 구조 생성
    const dataToServer = {
      hospitalName,
      registerTime: new Date(),
      symptom: selectedSymptom,
      note,
      patients,
    };

    postForEntity('/registers', dataToServer)
      .then(() => {
        console.log('Data successfully sent to the server');
        handleClose(); // 모달을 닫습니다.
      })
      .catch(error => {
        window.alert('에러가 발생했습니다!');
        console.error('Error sending data to the server', error);
      });
  };

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
            <Title>{hospitalName}</Title>
            <Title>-</Title>
            <Title>접수하기</Title>
          </ContainerRow>
          <MuiDropdown selectedSymptom={selectedSymptom} setSelectedSymptom={setSelectedSymptom} />
          <MuiTextField note={note} setNote={setNote} />
          <MuiButtonContainer>
            <MuiButton onClick={handleSubmit} text="접수하기" disabled={selectedSymptom === ''} />
          </MuiButtonContainer>
        </Container>
      </Box>
    </Modal>
  );
};

export default RegisterModal2;
