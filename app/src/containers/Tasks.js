/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Tasks from 'src/components/Tasks';

/**
 * Code
 */
// Fonction utilitaire pour ordonner les tâches.
const orderedTasks = tasks => ([
  // + En haut, les tâches non effectuées favories
  ...tasks.filter(task => !task.done && task.fav),
  // + Ensuite, les tâches non effectuées non favories
  ...tasks.filter(task => !task.done && !task.fav),
  // + Ensuite, les tâches effectuées
  ...tasks.filter(task => task.done),
]);

const mapStateToProps = state => ({
  tasks: orderedTasks(state.tasks),
});

const TasksContainer = connect(
  mapStateToProps,
  null,
)(Tasks);

/**
 * Export
 */
export default TasksContainer;
