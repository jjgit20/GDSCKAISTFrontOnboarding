import * as React from 'react';
import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styled from 'styled-components';
import Colors from '../style/Colors';
import MuiDropdown from './MuiDropdown';
import MuiTextField from './MuiTextField';
import MuiButton from './MuiButton';
import { useRecoilState } from 'recoil';
import reservationData from '../store/reservationData';
// import hospitalDataData from '../store/hospitalData';

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

const RegisterModal = ({ open, handleClose, name, patients }) => {
  const [selectedPain, setSelectedPain] = React.useState('');
  const [ex, setEx] = React.useState('');
  const [resvData, setResvData] = useRecoilState(reservationData);

  const handleSubmit = () => {
    // ID는 기존 데이터의 마지막 ID + 1로 설정합니다.
    const newId = resvData.length > 0 ? resvData[resvData.length - 1].id + 1 : 1;

    const newData = {
      id: newId,
      type: null, // 예시입니다. 필요한 값으로 변경해주세요.
      name,
      time: new Date(),
      region: null,
      patients,
      symptoms: selectedPain,
      ex,
    };

    setResvData(prev => [...prev, newData]); // 새 예약 데이터를 추가합니다.
    handleClose(); // 모달을 닫습니다.
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
            <Title>{name}</Title>
            <Title>-</Title>
            <Title>접수하기</Title>
          </ContainerRow>
          <MuiDropdown selectedPain={selectedPain} setSelectedPain={setSelectedPain} />
          <MuiTextField ex={ex} setEx={setEx} />
          <MuiButtonContainer>
            <MuiButton onClick={handleSubmit} text="접수하기" disabled={selectedPain === ''} />
          </MuiButtonContainer>
        </Container>
      </Box>
    </Modal>
  );
};

export default RegisterModal;
