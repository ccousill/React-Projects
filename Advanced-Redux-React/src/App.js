import Cart from './components/Cart/Cart';
import React, { useEffect } from 'react';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from './store/ui-slice';
import Notification from './components/UI/Notification';
let isInitial = true;
function App() {
  const dispatch = useDispatch();
  const cartVisible = useSelector(state => state.ui.cartIsVisible)
  const cart = useSelector(state => state.cart)
  const notification = useSelector(state => state.ui.notification)
  useEffect(() => {
    const sendCartData = async () => {
      dispatch(uiActions.showNotification({
        status: 'pending',
        title: 'sending',
        message: 'sending cart data'
      }))
      const response = await fetch('https://advanced-redux-backend-default-rtdb.firebaseio.com/cart.json', {
        method: "PUT",
        body: JSON.stringify(cart),
      })

      if (!response.ok) {
        throw new Error("error!")
      }

      dispatch(uiActions.showNotification({
        status: 'success',
        title: 'Success...',
        message: 'sent cart data successfully'
      }))

      const responseData = await response.json();
    }


    if(isInitial){
      isInitial = false;
      return
    }
    sendCartData().catch(error => {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Erro!',
        message: 'sending cart data failed'

      }))
    }
    )
  }, [cart, dispatch])

  return (
    <React.Fragment>
    {notification && <Notification status={notification.status} title={notification.title} message={notification.message}/>}
      <Layout>
        {cartVisible && <Cart />}
        <Products />
      </Layout>
    </React.Fragment>
  );
}

export default App;
