/**
 * Initial state for the app
 */
const initialState = {
  input: '',
  tasks: [
    {
      id: 5,
      label: 'farine',
      done: true,
      fav: false,
    },
    {
      id: 12,
      label: 'lait',
      done: false,
      fav: false,
    },
    {
      id: 4,
      label: 'sucre',
      done: false,
      fav: true,
    },
  ],
};

/**
 * Available actions
 */
const ADD_TASK = 'ADD_TASK';
const CHANGE_INPUT = 'CHANGE_INPUT';
const CHECK_TASK = 'CHECK_TASK';
const DELETE_TASK = 'DELETE_TASK';
const FAVORITE_TASK = 'FAVORITE_TASK';

/**
 * Reducer
 */
const reducer = (state = initialState, action) => {
  // TODO
  switch (action.type) {
    case ADD_TASK: {
      // Je créé un tableau avec toutes les ids
      const allIds = state.tasks.map(task => task.id);

      // Je calcule le prochain ID en prenant la plus haute et en ajoutant 1
      const newId = Math.max(...allIds) + 1;

      // Creer une tache et la remplir
      const task = {
        id: newId,
        label: state.input,
        done: false,
        fav: false,
      };

      const newTasks = [...state.tasks, task];

      return {
        ...state,
        tasks: newTasks,
        // OR: tasks: [...state.tasks, task],
        input: '',
      };
    }

    case CHANGE_INPUT:
      return {
        ...state,
        input: action.value,
      };

    case CHECK_TASK: {
      // Récupérer la liste des taches
      const newTasks = state.tasks.map((task) => {
        // Cibler la tache dont l'id est reçu
        if (task.id === action.id) {
          // Inverser la valeur
          return {
            // id: task.id,
            // label: task.label,
            ...task,
            done: !task.done,
          };
        }
        return task;
      });

      return {
        ...state,
        tasks: newTasks,
      };
    }

    case DELETE_TASK: {
      // Recup des taches et filtre
      const tasks = state.tasks.filter(task => task.id !== action.id);
      return {
        ...state,
        tasks,
      };
    }

    case FAVORITE_TASK: {
      // Récupérer la liste des taches
      const tasks = state.tasks.map((task) => {
        // Cibler la tache dont l'id est reçu
        if (task.id === action.id) {
          // Inverser la valeur
          return {
            // id: task.id,
            // label: task.label,
            ...task,
            fav: !task.fav,
          };
        }
        return task;
      });
      return {
        ...state,
        tasks,
      };
    }

    default:
      return state;
  }
};

/**
 * Action creators
 */
export const addTask = () => ({
  type: ADD_TASK,
});

export const changeInput = value => ({
  type: CHANGE_INPUT,
  value,
});

export const checkTask = id => ({
  type: CHECK_TASK,
  id,
});

export const deleteTask = id => ({
  type: DELETE_TASK,
  id,
});

export const favoriteTask = id => ({
  type: FAVORITE_TASK,
  id,
});

/**
 * Export
 */
export default reducer;
