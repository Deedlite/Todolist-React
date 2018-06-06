/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */


/**
 * Code
 */

const Counter = ({ count }) => {
  let message = '';

  switch (count) {
    case 0:
      message = 'Aucune tâche';
      break;
    case 1:
      message = 'Une tâche en cours';
      break;
    default:
      message = `${count} tâches en cours`;
  }

  return (
    <div id="todo-counter">
      {message}
    </div>
  );
};

Counter.propTypes = {
  count: PropTypes.number.isRequired,
};
/**
 * Export
 */
export default Counter;
