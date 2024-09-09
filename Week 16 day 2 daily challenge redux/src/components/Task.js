import React from 'react';
import { connect } from 'react-redux';
import { deleteTask } from 'c:/Users/jonat/OneDrive/Desktop/Week 16 day 2 daily challenge redux/src/Redux/actions/redux/actions';

const Task = ({ task, date, deleteTask }) => (
  <li>
    {task.text}
    <button onClick={() => deleteTask(date, task.id)}>Delete</button>
  </li>
);

const mapDispatchToProps = {
  deleteTask
};

export default connect(null, mapDispatchToProps)(Task);
