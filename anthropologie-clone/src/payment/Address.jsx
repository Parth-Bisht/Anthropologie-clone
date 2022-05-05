import React from 'react'
import style from './address.module.css'
import { BsBoxSeam } from 'react-icons/bs';
//  import PaymentBox from './payment/Payment';

const Address = () => {
  return (<>
    <div className={style.box4}>
      <div>
        <h5>Already Have an Account?</h5>
        <p>Sign in to check out faster.</p>
      </div>
      <div>
        <button>SIGN IN</button>
      </div>
    </div> 
    <div className={style.container}>
      <div className={style.main}>
        <div className={style.font}>
          <div style={{ fontSize: "20px", marginRight: "10px" }}><BsBoxSeam /></div>
          <h3>Ship</h3>
        </div>
        <hr className={style.new1} />

        <h5 className={style.box2}>Shipping Address</h5>
        <span className={style.box1}>Country/Region*</span><br />
        <select name="" id="country" required className={style.box3}>
          <option value="India">India</option>
          <option value="Pakistan">Pakistan</option>
          <option value="Afghanistan">Afghanistan</option>
          <option value="Iraq">Iraq</option>
          <option value="Bangladesh">Bangladesh</option>
          <option value="Bhutan">Bhutan</option>
          <option value="China">China</option>
          <option value="Hong Kong">Hong Kong</option>
        </select>
        <br />
        <div className={style.boxs1}>
          <div>
            <span className={style.box1}>First Name*</span><br />
            <input  required type="text" className={style.box7} />
          </div>
          <div>
            <span className={style.box1}>Last Name*</span><br />
            <input  required type="text" className={style.box7} />
          </div>
        </div>

        <span className={style.box1}>Street Address*</span><br />
        <input  required type="text" placeholder='35 character limit,continue below.' className={style.boxs2} />
        <br />
        <span className={style.box1}>Address2*</span><br />
        <input  required type="text" placeholder="Building, Suite or Apartment Number" className={style.boxs2} />
        <br />
        <input  required type="checkbox" className={style.box5} /><span className={style.box1}>PO Box</span>
        <br />
        <div className={style.boxs1}>
          <div>
            <span className={style.box1}>City*</span><br />
            <input  required type="text" className={style.box7} />
          </div>
          <div>
            <span className={style.box1}>Province or Region*</span><br />
            <input  required type="text" placeholder='Province or Region' className={style.box7} />
          </div>
        </div>

        <span className={style.box1}>Postcode*</span><br />
        <input  required type="text" className={style.box7} />
        <br />
        <span className={style.box1}>Daytime Phone*</span><br />
        <input  required type="text" placeholder="Do not enter a country code" className={style.box7} />

      </div>
     
      {/* <!-- ------------------------second part----------------------------------  --> */}
     
      <div className={style.main2}>
       {/* <PaymentBox title="Processs to checkout"/> */}
      </div>
    </div>

  </>)
}

export default Address