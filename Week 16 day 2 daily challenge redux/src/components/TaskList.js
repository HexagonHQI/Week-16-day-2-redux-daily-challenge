import React from 'react';
import { connect } from 'react-redux';
import Task from './Task';

const TaskList = ({ tasks, date }) => (
  <div>
    <h2>Tasks for {date.toDateString()}</h2>
    <ul>
      {tasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </ul>
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  tasks: state.tasks[ownProps.date.toISOString().split('T')[0]] || []
});

export default connect(mapStateToProps)(TaskList);
