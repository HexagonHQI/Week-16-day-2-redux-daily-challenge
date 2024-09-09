import React, { useState } from 'react';
import DatePicker from './components/DatePicker';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

const App = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div>
      <DatePicker onDateChange={setSelectedDate} />
      <TaskList date={selectedDate} />
      <TaskForm date={selectedDate} />
    </div>
  );
};

export default App;
