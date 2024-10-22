import React from 'react';
import TimePicker from 'react-bootstrap-time-picker';

function InputTime({ name, label, value, onChange, start, end, step, disabled, className }) {
  return (
    <div className={'form-floating ' + (className ? className : '')}>
      <TimePicker
        id={name}
        name={name}
        value={value}
        onChange={value => onChange(`${Math.floor(value / 3600)}:${(value % 3600) / 60}`)}
        start={start || '07:00'}
        end={end || '19:00'}
        step={step || 15}
        disabled={disabled}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
}

export default InputTime;
