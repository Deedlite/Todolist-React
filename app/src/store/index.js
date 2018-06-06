/**
 * NPM import
 */
import { createStore } from 'redux';

/**
 * Local import
 */
import reducer from './reducer';

/**
 * Code
 */
const store = createStore(reducer);

/**
 * Export
 */
export default store;
