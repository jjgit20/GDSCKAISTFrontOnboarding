import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const symptoms = ['콧물', '두통', '복통'];

const MuiDropdown = ({ selectedSymptom, setSelectedSymptom }) => {
  // const [selectedSymptom, setselectedSymptom] = useState('');

  const handlePainChange = event => {
    setSelectedSymptom(event.target.value);
  };

  return (
    <Box>
      <FormControl variant="standard">
        <InputLabel shrink>증상</InputLabel>
        <Select value={selectedSymptom} onChange={handlePainChange} displayEmpty style={{ width: '220px' }}>
          <MenuItem value="">증상을 선택해주세요</MenuItem>
          {symptoms.map(pain => (
            <MenuItem value={pain}>{pain}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default MuiDropdown;
