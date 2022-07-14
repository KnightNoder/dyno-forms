import { useState } from 'react';
import '../../css/ChoiceCard.css';
import Checkbox from '@mui/material/Checkbox';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

const CheckBoxCard = ({ text, onChange, value }) => {
  return (
    <>
      <div
        className={`choice-card ${value ? 'selectStyle' : 'deselectStyle'}`}
        onClick={() => {
          onChange(text, value);
        }}
      >
        <div className="one">
          <Checkbox
            icon={<RadioButtonUncheckedIcon fontSize="small" />}
            disableRipple
            checkedIcon={
              <CheckCircleOutlineIcon
                backgroundcolor="white"
                fontSize="small"
              />
            }
            sx={{
              color: '#000000',
              '&.Mui-checked': {
                color: '#975169',
              },
            }}
            checked={value}
            fontSize="small"
          />
        </div>
        <div
          className={`three ${value ? 'selectTextStyle' : 'deselectTextStyle'}`}
        >
          {text}
        </div>
      </div>
    </>
  );
};

export default CheckBoxCard;
