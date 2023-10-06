import { atom } from 'recoil';

const hospitalData = atom({
  key: 'hospitalData',
  default: [
    {
      id: 1,
      type: '내과',
      name: '이희찬 내과',
      time: '오늘 09:00 ~ 18:00',
      region: '대전 서구 만년동',
      patients: '3',
    },
    {
      id: 2,
      type: '이비인후과',
      name: '구글 이비인후과',
      time: '오늘 휴무',
      region: '대전 서구 월평동',
      patients: '-',
    },
    {
      id: 3,
      type: '내과',
      name: '삼성 내과',
      time: '오늘 09:00 ~ 20:00',
      region: '대전 서구 어은동',
      patients: '5',
    },
    {
      id: 4,
      type: '이비인후과',
      name: '연세 이비인후과',
      time: '오늘 휴무',
      region: '대전 동구 길평동',
      patients: '8',
    },
  ],
});

export default hospitalData;
