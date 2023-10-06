import React, { useState } from 'react';
import styled from 'styled-components';
import Colors from '../style/Colors';
import MuiButton from './MuiButton';
import RegisterModal from './RegisterModal';

const Container = styled.div`
  width: 100%; //or fit-content
  height: 89px;
  display: flex;
  padding: 16px;
  background-color: ${Colors.WHITE100};
  border-radius: 4px;
  align-items: center;
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.08);
  gap: 16px;
  justify-content: space-between;

  .title {
    font-family: 'Noto Sans KR Bold';
    font-size: 24px;
  }
`;

const LeftArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  //justify-content: space-between; //이거 왜 작동 안함?

  .title {
    font-family: 'Noto Sans KR Bold';
    font-size: 24px;
  }
`;

const RightArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 4px;

  .title {
    font-family: 'Noto Sans KR Bold';
    font-size: 24px;
  }
`;

const ContainerRowL = styled.div`
  display: flex; /* 가로로 나열하려면 flex 사용 */
  justify-content: flex-start;
  //justify-content: flex-start; /* 버튼을 가로로 분포 */
`;

const ContainerRowR = styled.div`
  display: flex; /* 가로로 나열하려면 flex 사용 */
  justify-content: flex-end;

  //justify-content: flex-start; /* 버튼을 가로로 분포 */
`;

const TypeText = styled.div`
  color: ${Colors.BLACK40};
  font-size: 11px;
  .title {
    font-family: 'Noto Sans';
  }
`;

const NameText = styled.div`
  color: ${Colors.BLACK100};
  font-size: 14px;
  font-weight: bold;
  font-family: 'Arial'; //글꼴이 바뀌는 건지... -> 이건 작동 하는듯
  .title {
    font-family: 'Noto Sans'; //글꼴이 바뀌는 건지...
  }
`;

const TimeText = styled.div`
  color: ${props => (props.inactive ? Colors.POINT_DEEP : Colors.BLACK80)};
  font-size: 11px;
  .title {
    font-family: 'Noto Sans';
  }
`;

const RegionText = styled.div`
  color: ${Colors.BLACK40};
  font-size: 11px;
  .title {
    font-family: 'Noto Sans';
  }
`;

const PatientText1 = styled.div`
  color: ${Colors.BLACK60};
  font-size: 11px;
  .title {
    font-family: 'Noto Sans';
  }
`;

const PatientText2 = styled.div`
  color: ${Colors.BLACK100};
  font-size: 11px;
  font-weight: bold;
  .title {
    font-family: 'Noto Sans';
  }
`;

const SpaceText = styled.div`
  display: flex;
  gap: 4px;
`;

const ListItem = ({ type, name, time, region, patients, inactive }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <LeftArea>
        <TypeText>{type}</TypeText>
        <NameText>{name}</NameText>
        <ContainerRowL>
          <SpaceText>
            {inactive && <TimeText inactive>오늘 휴무</TimeText>}
            {!inactive && <TimeText>{time}</TimeText>}
            <RegionText>|</RegionText>
            <RegionText>{region}</RegionText>
          </SpaceText>
        </ContainerRowL>
      </LeftArea>
      <RightArea>
        <ContainerRowR>
          <SpaceText>
            <PatientText1> 대기자 수: </PatientText1>
            <PatientText2> {patients} </PatientText2>
          </SpaceText>
          <PatientText2> 명 </PatientText2>
        </ContainerRowR>
        <div>
          <MuiButton onClick={handleOpen} text="접수하기" disabled={inactive} />
          <RegisterModal open={open} handleClose={handleClose} name={name} patients={patients} />
        </div>
      </RightArea>
    </Container>
  );
};

export default ListItem;
