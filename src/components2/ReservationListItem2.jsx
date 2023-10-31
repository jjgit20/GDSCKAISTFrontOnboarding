import React, { useState } from 'react';
import styled from 'styled-components';
import Colors from '../style/Colors';
import MuiButton from '../components/MuiButton';
import { deleteForEntity } from '../network/HttpRequests';

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
  justify-content: flex-start;
  gap: 4px;

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

const SpaceText = styled.div`
  display: flex;
  gap: 4px;
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
  color: ${Colors.BLACK80};
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

const ReservationListItem2 = ({ registerId, hospitalName, registerTime, patients, symptom, note, onDelete }) => {
  const [isDeleted, setIsDeleted] = useState(false);

  // 만약 데이터가 성공적으로 삭제되었다면, 컴포넌트를 더 이상 렌더링하지 않습니다.
  if (isDeleted) return null;

  return (
    <Container>
      <LeftArea>
        <NameText>{hospitalName}</NameText>
        <ContainerRowL>
          <TimeText>{`${registerTime.getHours()}시 ${registerTime.getMinutes()}분에 접수하셨어요!`}</TimeText>
        </ContainerRowL>
        <ContainerRowL>
          <SpaceText>
            <TimeText>{symptom}</TimeText>
            <TimeText>|</TimeText>
            <TimeText>{note}</TimeText>
          </SpaceText>
        </ContainerRowL>
      </LeftArea>
      <RightArea>
        <ContainerRowR>
          <SpaceText>
            <PatientText1> 내 앞에 </PatientText1>
            <PatientText2> {patients} </PatientText2>
          </SpaceText>
          <PatientText2> 명 </PatientText2>
        </ContainerRowR>

        <MuiButton onClick={() => onDelete(registerId)} text="취소하기" />
      </RightArea>
    </Container>
  );
};

export default ReservationListItem2;
