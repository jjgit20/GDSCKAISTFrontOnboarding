import { atom } from 'recoil';

const hospitalData = atom({
  key: 'reservationData',
  default: [],
});

export default hospitalData;
