import React from 'react';
import styles from './Cart.module.css'
import CartItem from './CartItem';
import PaymentBox from './PaymentBox';

const Cart = () => {
  return (
    <div>
      <div className="container border py-3" style={{maxWidth:"1325px",position:"relative"}}>
        <div className="d-flex align-items-center justify-content-between mb-2" style={{width:"65%"}}>
            <h2 className={styles.basket}>Basket</h2>
            <a href="">Delivery Options</a>
        </div>
        <div className="d-flex align-items-center justify-content-between py-3" style={{width:"65%",borderBottom:"1px solid #d3d3d3",borderTop:"1px solid #d3d3d3"}}>
            <div className={`d-flex justify-content-center align-items-center  ${styles.items}`}>
                <p className="my-0">Item</p>
            </div>
            <div className={`d-flex align-items-center justify-content-around ${styles.itemsPrice}`}>
                <p className="my-0">Item price</p>
                <p className="my-0">Quantity</p>
                <p className="my-0">Total Price</p>
            </div>
        </div>
        <CartItem/>
        <CartItem/>
        <PaymentBox/>
      </div>
    </div>
  )
}

export default Cart
