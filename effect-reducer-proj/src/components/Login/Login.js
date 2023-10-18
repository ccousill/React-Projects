import React, { useState, useEffect ,useReducer, useContext, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';
import Input from '../UI/Input/Input';
//this can be created outside of the scope of component
const emailReducer = (state,action) =>{
  
  if(action.type === 'USER_INPUT'){
    return {value: action.value, isValid: action.value.includes('@')};
  }
  if(action.type ==='INPUT_BLUR'){
    return {value: state.value, isValid: state.value.includes('@')};
  }
  return {value: '', isValid: false}
};

const passwordReducer = (state,action) => {
  if(action.type === 'USER_INPUT'){
    return {value: action.value, isValid: action.value.trim().length > 6};
  }
  if(action.type ==='INPUT_BLUR'){
    return {value: state.value, isValid: state.value.trim().length > 6};
  }
  return {value: '', isValid: false}
}

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const [emailState,dispatchEmail] = useReducer(emailReducer, {value:'',isValid:null});
  const [passwordState,dispatchPassword] = useReducer(passwordReducer, {value:'', isValid:null});
  // useEffect(()=>{
  //   console.log('EFFECT Running')
  // },[enteredPassword]);
  const {isValid: emailIsValid} = emailState;
  const {isValid: passwordIsValid} = passwordState;
  const ctx = useContext(AuthContext)
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  //use a use effect to either use once when starting application (with no dependencies, or run when a state change happens(with dependencies))
  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(
        emailIsValid && passwordIsValid
      );
    }, 500);

    return () => {
      clearTimeout(identifier)
    }
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({type: 'USER_INPUT', value: event.target.value});
    // setFormIsValid(
    //   event.target.value.includes('@') && passwordState.isValid
    // );
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type: 'USER_INPUT',value:event.target.value});
    // setEnteredPassword(event.target.value);
    // setFormIsValid(
    //   emailState.isValid && event.target.value.trim().length > 6
    // );
    // setPasswordIsValid(event.target.value.trim().length > 6);
  };

  const validateEmailHandler = () => {
    dispatchEmail({type:'INPUT_BLUR'});
    // setEmailIsValid(emailState.value.includes('@s'));
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type:'INPUT_BLUR'});
    // setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if(formIsValid){
      ctx.onLogin(emailState.value, passwordState.value);
    }else if(!emailIsValid){
        emailInputRef.current.focus()
    }else{
        passwordInputRef.current.focus()
    }
    
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input ref={emailInputRef} type="email" id="email" label="E-Mail" isValid={emailIsValid} value={emailState.value} onChange={emailChangeHandler} onBlur={validateEmailHandler}/>
        <Input ref={passwordInputRef} type="password" id="password" label="Password" isValid={passwordIsValid} value={passwordState.value} onChange={passwordChangeHandler} onBlur={validatePasswordHandler}/>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
