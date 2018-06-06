/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Form from 'src/components/Form';
import { addTask, changeInput } from 'src/store/reducer';

/**
 * Code
 */
const mapStateToProps = state => ({
  inputValue: state.input,
});

const mapDispatchToProps = dispatch => ({
  onAddTask: () => {
    dispatch(addTask());
  },
  onInputChange: (value) => {
    dispatch(changeInput(value));
  },
});

const FormContainer = connect(
  mapStateToProps, // Lecture depuis le state
  mapDispatchToProps, // Écriture dans le state
)(Form);

/**
 * Export
 */
export default FormContainer;
