import * as React from 'react';
import TextField from '@mui/material/TextField';

const MuiTextField = ({ note, setNote }) => {
  const handleNoteChange = event => {
    setNote(event.target.value);
  };
  return (
    <TextField
      id="standard-basic"
      label="추가 참고 사항 (note. 알러지, 증상 설명 등)"
      variant="standard"
      defaultValue="입력해주세요"
      fullWidth
      value={note}
      onChange={handleNoteChange}
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
};

export default MuiTextField;
