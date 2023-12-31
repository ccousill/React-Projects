import classes from "./HeaderCartButton.module.css"
import CartIcon from "../Cart/CartIcon"
import React, {useContext,useEffect,useState} from 'react'
import CartContext from "../../store/cart-context"
const HeaderCartButton = (props) =>{
    const cartCtx = useContext(CartContext);
    const[buttonIsHighlighted,setButtonIsHighlighted] = useState(false)
    console.log(cartCtx.items)
    const numberOfCartItems = cartCtx.items.reduce((curNumber,item) => {
        return curNumber + item.amount
    }, 0)
    const btnClass = `${classes.button} ${buttonIsHighlighted ? classes.bump: ''}`;

    useEffect(()=>{
        if(cartCtx.items.length === 0){
            return;
        }
        setButtonIsHighlighted(true);

        const timer = setTimeout(()=>{
            setButtonIsHighlighted(false);
        },300);

        return () =>{
            clearTimeout(timer);
        };

    },[cartCtx.items]);

    return (<button className={btnClass} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>)
}

export default HeaderCartButton