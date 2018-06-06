/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TrashIcon from 'react-icons/lib/fa/trash-o';
import StarIcon from 'react-icons/lib/fa/star';


/**
 * Local import
 */


/**
 * Code
 */
const Task = ({
  id,
  label,
  done,
  fav,
  onCheckTask,
  onDeleteTask,
  onFavoriteTask,
}) => {
  // Calcul des classes courantes
  const currentClassNames = classNames('task', {
    'task--done': done,
    'task--fav': fav,
  });

  return (
    <li className={currentClassNames}>
      <input
        type="checkbox"
        checked={done}
        onChange={onCheckTask(id)}
      />
      <span className="task-label">{label}</span>

      <TrashIcon
        className="task-trash"
        onClick={onDeleteTask(id)}
      />

      <StarIcon
        className="task-star"
        onClick={onFavoriteTask(id)}
      />
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  fav: PropTypes.bool.isRequired,
  onCheckTask: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
  onFavoriteTask: PropTypes.func.isRequired,
};
/**
 * Export
 */
export default Task;
