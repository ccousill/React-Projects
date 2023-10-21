import classes from './Checkout.module.css'
import { useRef,useState } from 'react';


const isEmpty = value => value.trim() === '';
const isFiveChars = value => value.trim().length === 5;

const Checkout = (props) =>{
    const [formInputsValidity,setFormInputsValidity] = useState({
        name: true,
        street: true,
        postal: true,
        city: true
    })
    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalCodeInputRef = useRef();
    const cityInputRef = useRef();

    const confrimHandler = (event) =>{
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPostal = postalCodeInputRef.current.value;
        const enteredCity = cityInputRef.current.value;

        const enteredNameisValid = !isEmpty(enteredName)
        const enteredStreetisValid = !isEmpty(enteredStreet)
        const enteredCityisValid = !isEmpty(enteredCity)
        const enteredPostalisValid = isFiveChars(enteredPostal)
        setFormInputsValidity({
            name: enteredNameisValid,
            street: enteredStreetisValid,
            postal: enteredPostalisValid,
            city: enteredCityisValid
        })

        const formIsValid = enteredCityisValid && enteredNameisValid && enteredPostalisValid && enteredStreetisValid

        if(!formIsValid){
            return;
        }

        props.onConfirm({
            name:enteredName,
            street: enteredStreet,
            postal: enteredPostal,
            city:enteredCity
        })

    }
    return <form className={classes.form} onSubmit={confrimHandler}>
        <div className={`${classes.control} ${formInputsValidity.name ? '' : classes.invalid} `}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" ref={nameInputRef}></input>
            {!formInputsValidity.name && <p>please enter a valid name</p>}
        </div>
        <div className={`${classes.control} ${formInputsValidity.street ? '' : classes.invalid} `}>
            <label htmlFor="street">Street</label>
            <input type="text" id="street" ref={streetInputRef}></input>
            {!formInputsValidity.street && <p>please enter a valid street</p>}
        </div>
        <div className={`${classes.control} ${formInputsValidity.postal ? '' : classes.invalid} `}>
            <label htmlFor="postal">Postal Code</label>
            <input type="text" id="postal" ref={postalCodeInputRef}></input>
            {!formInputsValidity.postal && <p>please enter a valid postal</p>}
        </div>
        <div className={`${classes.control} ${formInputsValidity.city ? '' : classes.invalid} `}>
            <label htmlFor="city">City</label>
            <input type="text" id="city" ref={cityInputRef}></input>
            {!formInputsValidity.city && <p>please enter a valid city</p>}
        </div>
        <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button>Confirm</button>
        </div>
    </form>
}
export default Checkout