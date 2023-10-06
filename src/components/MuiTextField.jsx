import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const MuiTextField = ({ ex, setEx }) => {
  const handleExChange = event => {
    setEx(event.target.value);
  };
  return (
    <TextField
      id="standard-basic"
      label="추가 참고 사항 (ex. 알러지, 증상 설명 등)"
      variant="standard"
      defaultValue="입력해주세요"
      fullWidth
      value={ex}
      onChange={handleExChange}
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
};

export default MuiTextField;
