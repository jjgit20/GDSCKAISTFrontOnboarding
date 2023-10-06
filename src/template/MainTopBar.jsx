import React from 'react';
import styled from 'styled-components';
import Colors from '../style/Colors';
import HomeResv from '../components/HomeResv';

const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  padding: 16px;
  background-color: ${Colors.WHITE100};
  border-radius: 8px;
  align-items: center;
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

const ContainerRow = styled.div`
  display: flex; /* 가로로 나열하려면 flex 사용 */
  justify-content: flex-end;
  gap: 20px;
`;

const MainTopBar = () => {
  return (
    <Container>
      <LeftArea>
        <h1 className="title">MedicalBook</h1>
      </LeftArea>
      <RightArea>
        <ContainerRow>
          <HomeResv title="홈" to="/main" />
          <HomeResv title="내 예약" to="/my" />
        </ContainerRow>
      </RightArea>
    </Container>
  );
};

export default MainTopBar;
