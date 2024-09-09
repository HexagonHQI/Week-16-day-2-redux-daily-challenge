import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask, editTask } from 'c:/Users/jonat/OneDrive/Desktop/Week 16 day 2 daily challenge redux/src/Redux/actions/redux/actions';

const TaskForm = ({ date, addTask, editTask, taskToEdit }) => {
  const [taskText, setTaskText] = useState(taskToEdit ? taskToEdit.text : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = { id: taskToEdit ? taskToEdit.id : Date.now(), text: taskText };
    taskToEdit ? editTask(date, task) : addTask(date, task);
    setTaskText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Enter task"
      />
      <button type="submit">Save</button>
    </form>
  );
};

const mapDispatchToProps = {
  addTask,
  editTask
};

export default connect(null, mapDispatchToProps)(TaskForm);
