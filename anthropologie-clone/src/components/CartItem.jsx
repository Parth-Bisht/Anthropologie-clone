import React from 'react';
import styles from './CartItem.module.css';

const CartItem = () => {
  return (
    <div>
       <div className="d-flex align-items-center justify-content-between py-3" style={{width:"65%",position:"relative"}}>
            <div className={`d-flex ${styles.items}`}>
                <div>
                <img src="https://images.urbndata.com/is/image/Anthropologie/69606119_001_b?fit=constrain&fmt=webp&hei=195&qlt=80&wid=130" alt="" />
                </div>
                <div className={styles.info}>
                    <p>Tach Fauna Crochet Mini Dress</p>
                    <p>Expected to ship on May 26, 2022</p>
                    <p>Style <span>#69606119</span></p>
                    <p>Color: <span> BLACK</span></p>
                    <p>Size: <span>S</span> </p>
                </div>

            </div>
            <div className={`d-flex justify-content-around ${styles.itemsPrice}`}>
                <p className="my-0">$275</p>
                <select>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <p className="my-0">$275</p>
            </div>
            <div className={`${styles.remove}`}> <a href="">Remove</a> <a href="">Save for Later</a> </div>
        </div>
    </div>
  )
}

export default CartItem
