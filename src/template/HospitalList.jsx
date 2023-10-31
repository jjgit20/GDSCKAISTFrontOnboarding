import React, { useState } from 'react';
import styled from 'styled-components';
import Chip from '../components/Chip';
import Colors from '../style/Colors';
import ListItem from '../components/ListItem';
import hospitalData from '../store/hospitalData';
import { useRecoilValue } from 'recoil';

const Container = styled.div`
  width: 100%;
  height: 85vh;
  display: flex;
  flex-direction: column; /* 아이템을 세로로 배열 */
  padding: 16px;
  background-color: ${Colors.WHITE100};
  border-radius: 8px;
  align-items: top;
  gap: 16px;

  .title {
    font-family: 'Noto Sans KR Bold';
    font-size: 24px;
  }
`;

const CategorySelectBar = styled.div`
  display: flex; /* 가로로 나열하려면 flex 사용 */
  align-items: center; /* 세로 중앙 정렬 */
  justify-content: flex-start; /* 버튼을 가로로 분포 */
`;

const HospitalList = () => {
  const [selectedCondition, setSelectedCondition] = useState('전체');
  const hospitalList = useRecoilValue(hospitalData);

  const handleChipClick = condition => {
    setSelectedCondition(condition);
  };

  return (
    <Container>
      <CategorySelectBar>
        <Chip selected={selectedCondition === '전체'} onClick={() => handleChipClick('전체')} name="전체" />
        <Chip selected={selectedCondition === '내과'} onClick={() => handleChipClick('내과')} name="내과" />
        <Chip
          selected={selectedCondition === '이비인후과'}
          onClick={() => handleChipClick('이비인후과')}
          name="이비인후과"
        />
      </CategorySelectBar>
      {hospitalList.map(hospital => (
        <ListItem
          key={hospital.id}
          type={hospital.type}
          hospitalName={hospital.hospitalName}
          time={hospital.time}
          region={hospital.region}
          patients={hospital.patients}
          inactive={hospital.id === 2}
        />
      ))}
    </Container>
  );
};

export default HospitalList;
