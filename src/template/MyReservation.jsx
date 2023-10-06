import React, { useState } from 'react';
import styled from 'styled-components';
import Colors from '../style/Colors';
import ReservationList from '../components/ReservationListItem';
import ReservationData from '../store/reservationData';
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

const MyReservation = () => {
  const resvData = useRecoilValue(ReservationData);

  return (
    <Container>
      {resvData.map(reservation => (
        <ReservationList
          key={reservation.id}
          id={reservation.id}
          name={reservation.name}
          time={reservation.time}
          patients={reservation.patients}
          symptoms={reservation.symptoms}
          ex={reservation.ex}
        />
      ))}
    </Container>
  );
};

export default MyReservation;
