/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Counter from 'src/components/Counter';

/**
 * Code
 */

// state -> filtrage -> count
const mapStateToProps = state => ({
  count: state.tasks.filter(task => !task.done).length,
});

// connect renvoie un composant React, de type container
const connexion = connect(
  mapStateToProps, // Lecture depuis l'état.
  null, // Écriture dans le state : pas depuis Counter (rien à faire).
);
const CounterContainer = connexion(Counter); // 2. connexion d'un composant via la stratégie

// connect(...)(...)

/**
 * Export
 */
export default CounterContainer;
