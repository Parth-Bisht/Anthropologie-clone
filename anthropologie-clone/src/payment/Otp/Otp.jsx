import React, { useEffect, useLayoutEffect, useState } from 'react'
import style from './Otp.module.css'

const Otp = () => {
  const [formData, setformData] = useState("")
  const [randomOtp,setrandonOtp] = useState("")
    
  useEffect(()=>{
    let randomOtp= Math.floor(Math.random()*(9999-1000+1)+1000 )
    setrandonOtp(randomOtp)
    setTimeout(threeSeconds, 3000);
    function threeSeconds(){
    alert(`${randomOtp} is your OTP`)
    }
   },[]) 

  
  const handleSubmit = (e) => {
    e.preventDefault()
   if(formData==randomOtp){
     alert("Otp match Successfully")
   }else{
     alert("Invalid OTP")     
   }
  }
  
  return (<>
    <div className={style.otpBox}>
      <div>
        <p className={style.text1}>One-Time Password(OTP)</p>
        <p className={style.text2}>
          4-digit code has been sent on your registered mobile number
        </p>
      </div>
      <form  className={style.My} onSubmit={handleSubmit}>
        <div className={style.inputOTP}>
          <p >Enter You OTP : -</p>
          <input value={formData} onChange={(e)=> formData.length<4 && setformData(e.target.value)} className={style.OTP} type="number"  required />
        </div>
  
        <input type="submit" value="Submit OTP" className={style.btn} />
      </form>
    </div>

  </>)

}

export default Otp