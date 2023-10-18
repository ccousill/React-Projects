import React, { useState, useRef } from 'react';
import classes from './AddUser.module.css'
import Button from '../Button/Button'
import Card from '../UI/Card'
import ErrorModal from '../ErrorModal/ErrorModal';
import Wrapper from '../Helpers/Wrapper';
function AddUser(props) {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [nameData, setNameData] = useState('');
    const [ageData, setAgeData] = useState('');
    const [error,setError] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();

        //you can use ref to replace the use of useStates since they let you access the value of what is inputed in form
        console.log(nameInputRef.current.value);
        if (nameData.trim().length === 0 || ageData.trim().length === 0) {
            setError({
                title: 'invalid input',
                message: 'Please enter a valid name and age'
            });
        }
        else{
            const formData = {
                name: nameData,
                age: +ageData
            }
            props.getFormData(formData);
            setNameData('');
            setAgeData('');
        }
        
    }

    const errorHandler = () =>{
        setError('');
    }


    return (
        <Wrapper>
            {error && <ErrorModal props={error} disableError={errorHandler}/>}
            <Card>
                <form onSubmit={handleSubmit}>
                    <div className={classes.input}>
                        <label htmlFor="name">Username: </label>
                        <input type="text" name="name" ref={nameInputRef} value={nameData} onChange={(e) => { setNameData(e.target.value) }} />
                    </div>
                    <div className={classes.input}>
                        <label htmlFor="age">Age: </label>
                        <input type="number" name="age" ref={ageInputRef} value={ageData} onChange={(e) => { setAgeData(e.target.value) }} />
                    </div>
                    <div className={classes.button}>
                        <Button type="submit">
                            Add User
                        </Button>
                    </div>
                </form>
            </Card>
        </Wrapper>
    );
}

export default AddUser;
