import React, { useState } from 'react'
import PaymentBox from './Payment'
import style from './cardetails.module.css'
import { useNavigate } from 'react-router-dom'
 

const Cardetails = () => {
  let d = JSON.parse(localStorage.getItem("cartData")) || [];
  const [formData, setformData] = useState("")
  const [formData1, setformData1] = useState("");
  const navigate = useNavigate();
  const data1 =JSON.parse(localStorage.getItem("data"))

  const handlClick = ()=>{
    navigate("/otp")
  }

  return (<>
    <div className={style.container}>
      <div className={style.main}>
        <h5>Payment Method</h5>
        <div style={{border:"1px solid"}}>
        <div className={style.box5}>
        <input type="radio" name="radio" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2" />
        <span className={style.card}>Credit Card</span><br />
        <img style={{ margin: "8px 0px 0px 15px" }} src={process.env.PUBLIC_URL + "/card.png"} alt="" />
        <div className="col">
          <div className="collapse multi-collapse" id="multiCollapseExample2">
            <div className="card card-body">
              <span className={style.box1}>CARD NUMBER*</span>
              <input required className={style.box2} type="number" placeholder='xxxx xxxx xxxx xxxx' value={formData1} onChange={(e)=> formData1.length<16 && setformData1(e.target.value)} /> <br />
              <div style={{ display: "flex", gap: "15px", marginTop: "-20px" }}>
                <div>
                  <span className={style.box1}>Expiration Date/Month*</span><br />
                  <select name="" id="country" className={style.box3}>
                    <option value="--Month--">--Month--</option>
                    <option value="01-January">01-January</option>
                    <option value="02-February">02-February</option>
                    <option value="03-March">03-March</option>
                    <option value="04-April">04-April</option>
                    <option value="05-May">05-May</option>
                    <option value="06-June">06-June</option>
                    <option value="07-July">07-July</option>
                    <option value="08-August">08-August</option>
                    <option value="09-September">09-September</option>
                    <option value="10-October">10-October</option>
                    <option value="11-November">11-November</option>
                    <option value="12-December">12-December</option>
                  </select>
                </div>
                <div>
                  <span className={style.box1}>Year*</span><br />
                  <select name="" id="country" className={style.box3} style={{ width: "35vh" }}>
                    <option value="--Year--">--Year--</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                    <option value="2030">2030</option>
                    <option value="2031">2031</option>
                    <option value="2032">2032</option>
                  </select>
                </div>
                <div>
                  <span className={style.box1}>CVV*</span><br />
                  <input  required className={style.box3} style={{ width: "27vh", borderRadius: "0px" }} type="number" placeholder='***' onChange={(e)=> formData.length<3 && setformData(e.target.value)} value={formData}/>
                </div>
              </div>
            </div>
            <div className={style.box4}>
              <h5>Billing Address</h5>
              <p>{data1.first} {data1.last} </p>
            <p>{data1.address}</p>
            <p>{data1.address2}</p>
            <p>{data1.city} / {data1.province} / {data1.postcode}</p>
            <p>{data1.country}</p>
            <p>{data1.phone}</p>
            </div>
          </div>
        </div>
        </div>
         <div className={style.box5}>
        <input  required type="radio" name="radio"/><span><img className={style.box6} src="https://www.anthropologie.com/static/v3/images/paypal-logo-ef75c426f33092b001a8a3d1a90d391f.svg" alt="" /></span><br />
        </div>
        <div className={style.box5}>
        <input  required type="radio" name="radio"/><span><img className={style.box6} src="https://www.anthropologie.com/static/v3/images/klarna-logo-e1f1797f9730029d90fccb75c4be22cc.svg" alt="" /></span><br />
        </div>
                 <div className={style.box5}>
        <input  required type="radio" name="radio"/><span><img className={style.box6} src="https://www.anthropologie.com/static/v3/images/afterpay-logo-7904b549fb7a2a970c606efc9f1e8260.svg" alt="" /></span><br />
        </div>
 
        </div>
      </div>

      {/* <!-- ------------------------second part----------------------------------  --> */}

      <div className={style.main2}>
       <PaymentBox data={d} top="200px" clickMe={handlClick}title="Order Placed"/>
      </div>
    </div>


  </>)
}

export default Cardetails