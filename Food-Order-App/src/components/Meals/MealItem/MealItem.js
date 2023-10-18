import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm';
import { useContext } from 'react';
import CartContext from '../../../store/cart-context'
const MealItem = props => {
    const cartCtx = useContext(CartContext)
    const price = `$${props.price.toFixed(2)}`;
    const addItemToCartHandler = (amount) =>{
        const newItem = {
            id:props.id,
            name: props.name,
            price: props.price,
            amount: amount
        }
        
        cartCtx.addItem(newItem)
    }
    return (
        <li className={classes.meal}>
            <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.desc}</div>
            <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm onAddToCart={addItemToCartHandler}/>
            </div>
        </li>
    )
}

export default MealItem;