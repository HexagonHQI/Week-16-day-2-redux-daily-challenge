import React, { useState } from 'react';
import Calendar from 'react-calendar';

const DatePicker = ({ onDateChange }) => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
    onDateChange(newDate);
  };

  return (
    <div>
      <Calendar
        onChange={handleDateChange}
        value={date}
      />
    </div>
  );
};

export default DatePicker;
