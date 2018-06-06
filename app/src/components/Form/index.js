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
class Form extends React.Component {
  /*
   * Handlers
   */
  handleSubmit = (evt) => {
    // bloque le comportement par défaut
    evt.preventDefault();
    // j'execute onAddTask (fonction provenant de App)
    this.props.onAddTask();
  };

  handleChange = (evt) => {
    // Je recup la valeur
    const { value } = evt.target;
    // J'execute la fonction pour modifier le state
    this.props.onInputChange(value);
  };
  /*
   * Rendu
   */
  render() {
    const { inputValue } = this.props;

    return (
      <form
        id="form"
        onSubmit={this.handleSubmit}
      >
        <input
          type="text"
          id="todo-input"
          placeholder="Ajouter une tâche"
          value={inputValue}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

Form.propTypes = {
  inputValue: PropTypes.string.isRequired,
  onAddTask: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
/**
 * Export
 */
export default Form;
