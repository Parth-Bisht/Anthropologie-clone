import React from 'react'
// import { Link } from 'react-router-dom'
import PaymentBox from '../payment/Payment'
import style from './ShipDetail.module.css'

const ShipDetail = () => {
  
  return (<>
    <div className={style.container}>
      <div className={style.main}>
        <h5>Shipping To firstname lastname</h5>
        <div className={style.box}>
          <div className={style.box1}>
            <p>first name / last name</p>
            <p>address</p>
            <p>alternate address</p>
            <p>city / previens region / pin code</p>
            <p>country</p>
            <p>M.No.</p>
          </div>
          <div className={style.box2}>
            <p>Express and Overnight orders placed after 1 PM ET typically ship the next business day.</p>
          </div>
          <div className={style.box3}>
            <h6>7-12 business days - $60.00</h6>
            <p>Standard International</p>
            <p>Your order will be delivered by your local postal service and carrier brokerage fees may apply. Duties & taxes will be assessed upon delivery and may be nonrefundable. Order total in checkout is calculated in USD.</p>
          </div>
          <div className={style.box4}>
            <h5>Basket</h5>
            <div>
              <h6>Item Price</h6>
              <h6>Quantity</h6>
              <h6>Total Price</h6>
            </div>
          </div>



          <div className={style.box5} style={{gap:"60px",borderBotton: "1px solid"}}>
            <div className={style.box5}>
              <div>
                <img src="https://images.urbndata.com/is/image/Anthropologie/67542654_079_b?fit=constrain&fmt=webp&hei=195&qlt=80&wid=130" alt="" />
              </div>
              <div className={style.box6}>
                <p>first name / last name</p>
                <p>address</p>
                <p>alternate address</p>
                <p>city / previens region / pin code</p>
                <p>country</p>
                <p>M.No.</p>
              </div>

            </div>
            <div className={style.box7}>
            
              <h6>Item Price</h6>
              <h6>Quantity</h6>
              <h6>Total Price</h6>
            

            </div>
          </div>


        </div>
      </div>

      {/* <!-- ------------------------second part----------------------------------  --> */}

      <div className={style.main2}>
       <PaymentBox title="Continue to Payment"/>
     {/* <Link to="/Cardetails">cartdetails</Link> */}
      </div>
    </div>
  </>)
}

export default ShipDetail