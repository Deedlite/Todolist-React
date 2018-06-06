/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
import Task from 'src/containers/Task';

/**
 * Code
 */
const Tasks = ({ tasks }) => (
  <ul id="todo-list">
    {tasks.map(task => (
      <Task
        key={task.id}
        {...task}
      />
    ))}
  </ul>
);

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired).isRequired,
};

/**
 * Export
 */
export default Tasks;
