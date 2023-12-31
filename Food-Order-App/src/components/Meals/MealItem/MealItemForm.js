import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'
import { useRef ,useState} from 'react'

const MealItemForm = (props) =>{
    const amountInputRef = useRef()
    const [amountIsValid,setAmountIsValid] = useState(true)
    const submitHandler = (event) =>{
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value
        const enteredAmountNumber = +enteredAmount
        if(enteredAmountNumber < 1 || enteredAmountNumber > 5) {
            console.log(enteredAmount.trim.length)
            setAmountIsValid(false)
            return;
        }
        props.onAddToCart(enteredAmountNumber)
    };

    return(
        <form className={classes.form} onSubmit={submitHandler}>
            <Input label="amount" ref={amountInputRef} input={{
                
                id: 'amount',
                type: 'number',
                min: '1',
                max: '5',
                step:'1',
                defaultValue: '1'

            }}/>
            <button>+ Add</button>
            {!amountIsValid && <p>please enter a valid amount</p>}
        </form>
    )
}

export default MealItemForm