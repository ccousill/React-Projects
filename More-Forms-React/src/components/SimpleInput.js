import useInput from "../hooks/use-input";

const SimpleInput = (props) => {

  const { 
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangedHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler
  } = useInput(value => value.trim() !== '');

  const { 
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangedHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler
  } = useInput(value => value.includes('@'));

  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault()
    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }
    console.log("success")
  }

  const nameInputClasses = !nameInputHasError ? 'form-control' : 'form-control invalid';
  const emailInputClasses = !emailInputHasError ? 'form-control' : 'form-control invalid';
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameChangedHandler} value={enteredName} onBlur={nameBlurHandler} />
        {nameInputHasError && <p className="error-text">name is invalid</p>}
      </div>

      <div className={emailInputClasses}>
        <label htmlFor='email'>Your E-mail</label>
        <input type='email' id='email' onChange={emailChangedHandler} value={enteredEmail} onBlur={emailBlurHandler} />
        {emailInputHasError && <p className="error-text">enter a valid email</p>}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
