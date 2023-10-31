import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Colors from '../style/Colors';
import ReservationListItem2 from '../components2/ReservationListItem2';
import { deleteForEntity, getForEntity, postForEntity } from '../network/HttpRequests';

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

const MyReservation2 = () => {
  const [data, setData] = useState([]);

  const loadData = () => {
    getForEntity('/registers')
      .then(result => {
        setData(result);
      })
      .catch(error => {
        console.error('Error fetching the data', error);
      });
  };

  const handleDelete = id => {
    postForEntity('/register/delete', { registerId: id }).then(() => {
      console.log('delete 성공!');
      loadData();
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Container>
      {data.map(reservation => (
        <ReservationListItem2
          registerId={reservation.id}
          hospitalName={reservation.hospitalName}
          registerTime={new Date(reservation.registerTime)}
          patients={reservation.patients}
          symptom={reservation.symptom}
          note={reservation.note}
          onDelete={handleDelete}
        />
      ))}
    </Container>
  );
};

export default MyReservation2;
