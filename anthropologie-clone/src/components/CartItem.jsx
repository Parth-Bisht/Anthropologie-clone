import React from 'react';
import styles from './CartItem.module.css';

const CartItem = ({ele,width}) => {
  return (
    <div>
       <div className="d-flex align-items-center justify-content-between py-3" style={{width:`${width}`,position:"relative"}}>
            <div className={`d-flex ${styles.items}`}>
                <div style={{width:"34%"}}>
                <img style={{width:"100%"}} src={ele.img2} alt="" />
                </div>
                <div className={styles.info}>
                    <p>{ele.title}</p>
                    <p>Expected to ship on May 26, 2022</p>
                    <p>Style <span>#69606119</span></p>
                    <p>Color: <span> BLACK</span></p>
                    <p>Size: <span>{ele.size}</span> </p>
                </div>

            </div>
            <div className={`d-flex justify-content-around ${styles.itemsPrice}`}>
                <p className="my-0">{ele.price}</p>
                <select>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <p className="my-0">{ele.total}</p>
            </div>
            <div className={`${styles.remove}`}> <a href="">Remove</a> <a href="">Save for Later</a> </div>
        </div>
    </div>
  )
}

export default CartItem
