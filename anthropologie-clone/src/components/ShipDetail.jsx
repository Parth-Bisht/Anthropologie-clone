import React from 'react'
import { useNavigate } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import PaymentBox from './Payment'
import style from './ShipDetail.module.css'
import CartItem from './CartItem'
import styles from './Cart.module.css'

const ShipDetail = () => {
  const navigate = useNavigate();
  const handlClick = ()=>{
    navigate("/carddeatils")
  }


  let data = JSON.parse(localStorage.getItem("cartData")) || [];

  const data1 =JSON.parse(localStorage.getItem("data"))
  console.log(data1)
  
  return (<>
    <div className={style.container}>
      <div className={style.main}>
        <h5>Shipping To {data1.first} {data1.last}</h5>
        <div className={style.box}>
          <div className={style.box1}>
            <p>{data1.first} {data1.last} </p>
            <p>{data1.address}</p>
            <p>{data1.address2}</p>
            <p>{data1.city} / {data1.province} / {data1.postcode}</p>
            <p>{data1.country}</p>
            <p>{data1.phone}</p>
          </div>
          <div className={style.box2}>
            <p>Express and Overnight orders placed after 1 PM ET typically ship the next business day.</p>
          </div>
          <div className={style.box3}>
            <h6>7-12 business days - $60.00</h6>
            <p>Standard International</p>
            <p>Your order will be delivered by your local postal service and carrier brokerage fees may apply. Duties & taxes will be assessed upon delivery and may be nonrefundable. Order total in checkout is calculated in USD.</p>
          </div>
         
         
          <div className="d-flex align-items-center justify-content-between py-3" style={{width:"100%",borderBottom:"1px solid #d3d3d3",borderTop:"1px solid #d3d3d3"}}>
            <div className={`d-flex justify-content-center align-items-center  ${styles.items}`}>
                <p className="my-0">Item</p>
            </div>
            <div className={`d-flex align-items-center justify-content-around ${styles.itemsPrice}`}>
                <p className="my-0">Item price</p>
                <p className="my-0">Quantity</p>
                <p className="my-0">Total Price</p>
            </div>
        </div>
        {data.map((item)=>{
          return <CartItem key={item.id} ele={item} width="100%"/>
        })}

        </div>
      </div>

      {/* <!-- ------------------------second part----------------------------------  --> */}

      <div className={style.main2}>
       <PaymentBox top="200px" clickMe={handlClick} title="Continue to Payment"/>
     {/* <Link to="/Cardetails">cartdetails</Link> */}
      </div>
    </div>
  </>)
}

export default ShipDetail