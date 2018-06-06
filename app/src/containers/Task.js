/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Task from 'src/components/Task';
import { checkTask, deleteTask, favoriteTask } from 'src/store/reducer';

/**
 * Code
 */

const mapDispatchToProps = dispatch => ({
  onCheckTask: id => () => {
    dispatch(checkTask(id));
  },
  onDeleteTask: id => () => {
    dispatch(deleteTask(id));
  },
  onFavoriteTask: id => () => {
    dispatch(favoriteTask(id));
  },
});

// RaZa mode: j'ai besoin de quoi ?
const TaskContainer = connect(
  null, // mapStateToProps
  mapDispatchToProps,
)(Task);

/**
 * Export
 */
export default TaskContainer;
