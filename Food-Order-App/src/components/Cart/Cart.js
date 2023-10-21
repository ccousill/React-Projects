import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import React, { useContext ,useState} from 'react'
import CartContext from '../../store/cart-context'
import CartItem from './CartItem'
import Checkout from './Checkout'
const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const totalAmount = cartCtx.totalAmount.toFixed(2);
    const hasItems = cartCtx.items.length > 0;
    const [isCheckout,setIsCheckout] = useState(false);
    const [isSubmitting,setIsSubmitting] = useState(false);
    const [didSubmit,setDidSubmit] = useState(false)
    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id)
        
    }
    const cartItemAddHandler = (item) => {
        cartCtx.addItem({...item,amount:1});
    }
    const orderHandler = () =>{
        setIsCheckout(true);
    }

    const submitOrderHandler = async(userData) =>{
        setIsSubmitting(true);
        const response = await fetch('https://react-http-cde13-default-rtdb.firebaseio.com/Orders.json',{
            method: 'POST',
            body: JSON.stringify({
                user:userData,
                oderedItems: cartCtx.items
            })
        })

        //error handling
        setIsSubmitting(false);
        setDidSubmit(true);
        cartCtx.clearCart();
    }

    const cartItems = cartCtx.items.map((item) =>
        <CartItem
            onRemove={cartItemRemoveHandler.bind(null,item.id)}
            onAdd={cartItemAddHandler.bind(null,item)}
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price} />
    )

    const cartModalContent= <React.Fragment>
        <ul className={classes['cart-items']}>
                {cartItems}
            </ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>${totalAmount}</span>
            </div>
            {isCheckout && <Checkout onCancel={props.onCloseCart} onConfirm={submitOrderHandler}/>}
            {!isCheckout && <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onCloseCart}> Close</button>
                {hasItems && <button className={classes.button} onClick={orderHandler}>Order</button>}
            </div>}
    </React.Fragment>

    const isSubmittingModal = <p>Sending order data...</p>
    const didSubmitModalContent = <p>Successfully sent order</p>
    return (
        <Modal onClose={props.onCloseCart}>
            {!isSubmitting && !didSubmit && cartModalContent}
            {isSubmitting && isSubmittingModal}
            {!isSubmitting && didSubmit && didSubmitModalContent}
        </Modal>
    )
}
export default Cart