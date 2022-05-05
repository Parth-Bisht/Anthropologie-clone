import React from 'react'
import style from './Otp.module.css'
const Otp = () => {
  return (<>
    <div className={style.otpBox}>
      <div>
        <p className={style.text1}>One-Time Password(OTP)</p>
        <p className={style.text2}>
          4-digit code has been sent on your registered mobile number
        </p>
      </div>
      <form  className={style.My}>
        <div className={style.inputOTP}>
          <p >Enter You OTP : -</p>
          <input className={style.OTP} type="number" required />
        </div>
  
        <input type="submit" value="Submit OTP" className={style.btn} />
      </form>
    </div>

  </>)

}

export default Otp