import React from 'react'
import style from "./placeorder.module.css"

const PlaceOrder = () => {
  return (
    <>
        <div className={style.container}>
        <img src="https://cdn.pixabay.com/photo/2017/10/18/14/31/box-2864327_640.png" alt=""/>
        <div className={style.box}>

            <h2>Order Confirmation</h2>
            <p>Thank you for placing your order with us.</p>
            <p>Please check your email for more details. For any questions and further information, please contact our
                customer support.</p>
        </div>
         <button className={style.btn}>Continue Shopping</button> 
    </div>
     </>
  )
}

export default PlaceOrder