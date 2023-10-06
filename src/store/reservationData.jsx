import { atom } from 'recoil';

const hospitalData = atom({
  key: 'reservationData',
  default: [
    {
      id: 1,
      type: '내과',
      name: '이희찬 내과',
      time: '9시 35분',
      region: '대전 서구 만년동',
      patients: 3,
      symptoms: '두통',
      ex: '추가 참고 사항',
    },
    {
      id: 2,
      type: '내과',
      name: '삼성 내과',
      time: '1시 45분',
      region: '대전 서구 어은동',
      patients: 5,
      symptoms: '복통',
      ex: '추가 참고 사항',
    },
    {
      id: 3,
      type: '이비인후과',
      name: '연세 이비인후과',
      time: '5시 20분',
      region: '대전 동구 길평동',
      patients: 8,
      symptoms: '복통',
      ex: '추가 참고 사항',
    },
  ],
});

export default hospitalData;
