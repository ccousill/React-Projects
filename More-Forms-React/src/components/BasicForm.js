import useInput from "../hooks/use-input";
const BasicForm = (props) => {

  const { 
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: firstNameInputHasError,
    valueChangedHandler: firstNameChangedHandler,
    inputBlurHandler: firstNameBlurHandler
  } = useInput(value => value.trim() !== '');

  const { 
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangedHandler: lastNameChangedHandler,
    inputBlurHandler: lastNameBlurHandler
  } = useInput(value => value.trim() !== '');

  const { 
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangedHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler
  } = useInput(value => value.includes('@'));

  let formIsValid = false;

  if(enteredEmailIsValid && enteredFirstNameIsValid && enteredLastNameIsValid){
    formIsValid = true;
  }


  const formHandler = (event) =>{
    event.preventDefault();
    if(!formIsValid){
      console.log('falure')
      return;

    }
    console.log("success!")
  }


  const firstNameInputClasses = !firstNameInputHasError ? 'form-control' : 'form-control invalid';
  const lastNameInputClasses = !lastNameInputHasError ? 'form-control' : 'form-control invalid';
  const emailInputClasses = !emailInputHasError ? 'form-control' : 'form-control invalid';

  return (
    <form onSubmit={formHandler}>
      <div className='control-group'>
        <div className={firstNameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' value={enteredFirstName} onChange={firstNameChangedHandler} onBlur={firstNameBlurHandler}/>
          {firstNameInputHasError && <p>Error</p>}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' value={enteredLastName} onChange={lastNameChangedHandler} onBlur={lastNameBlurHandler}/>
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' value={enteredEmail} onChange={emailChangedHandler} onBlur={emailBlurHandler}/>
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
