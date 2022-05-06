import React, { useState } from 'react'
import style from './address.module.css'
import { BsBoxSeam } from 'react-icons/bs';
import PaymentBox from './Payment';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
 
 
 

const Address = () => {
  let d = JSON.parse(localStorage.getItem("cartData")) || [];
  const isAuth = useSelector((state)=>state.isAuth);
  const navigate = useNavigate();
  const [formData, setformData] = useState({})
  
  const handleChange = (e) => {
    const inputName = e.target.name;
    setformData({ ...formData, [inputName]: e.target.value })
  }
  
  const handlClick = () => {
   if(formData.country==undefined || formData.first==undefined || formData.last==undefined || formData.address==undefined || formData.address2==undefined || formData.city==undefined || formData.province==undefined || formData.postcode==undefined || formData.phone==undefined){
     alert("Fill all Fields")
    }else{
      localStorage.setItem("data",JSON.stringify(formData));     
      navigate("/shippingPage")
      
   }
  }
  
  const [formData2, setformData2] = useState({})
  const [formData1, setformData1] = useState({})
  const [passtype, setpasstype] = useState(false)

  const handleChange2 = (e) => {
    const inputName = e.target.name;
    setformData2({ ...formData2, [inputName]: e.target.value })
     
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(formData2.first===undefined || formData2.last===undefined || formData2.email===undefined || formData2.password===undefined){
      alert("Fill all Fields")
    }else{
    localStorage.setItem("login",JSON.stringify(formData2))     
    }
  }
 
  const handleChange1 = (e) => {
    const inputName1 = e.target.name;
    setformData1({ ...formData1, [inputName1]: e.target.value })
  };

  const handleSubmit1 = (e) => {
    e.preventDefault()
    let data1 = JSON.parse(localStorage.getItem("login"))
    if(data1.email===formData1.email && data1.password===formData1.password1){
      alert("Login Success")
      
    }else{
      alert("Login Fail")
    }
  }

  return isAuth? (<>
    {/* <div className={style.boxs4}>
       <h5>Check out as a guest</h5>
       <span className={style.box1}>Email Address:*</span><br />
       <input onChange={handleChange} name='email' required type="text" className={style.box7}  />
    </div>  */}
    <div className={style.container}>
      <div className={style.main}>
        <div className={style.font}>
          <div style={{ fontSize: "20px", marginRight: "10px" }}><BsBoxSeam /></div>
          <h3>Ship</h3>
        </div>
        <hr className={style.new1} />

        <h5 className={style.box2}>Shipping Address</h5>
        <span className={style.box1}>Country/Region*</span><br />
        <select name="country" id="country" required className={style.box3} onChange={handleChange}>
          <option value=""></option>
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
            <input onChange={handleChange} name="first" required type="text" className={style.box7} />
          </div>
          <div>
            <span className={style.box1}>Last Name*</span><br />
            <input onChange={handleChange} name="last" required type="text" className={style.box7} />
          </div>
        </div>

        <span className={style.box1}>Street Address*</span><br />
        <input onChange={handleChange} name="address" required type="text" placeholder='35 character limit,continue below.' className={style.boxs2} />
        <br />
        <span className={style.box1}>Address2*</span><br />
        <input onChange={handleChange} name="address2" required type="text" placeholder="Building, Suite or Apartment Number" className={style.boxs2} />
        <br />
        <input required type="checkbox" className={style.box5} /><span className={style.box1}>PO Box</span>
        <br />
        <div className={style.boxs1}>
          <div>
            <span className={style.box1}>City*</span><br />
            <input onChange={handleChange} name="city" required type="text" className={style.box7} />
          </div>
          <div>
            <span className={style.box1}>Province or Region*</span><br />
            <input onChange={handleChange} name="province" required type="text" placeholder='Province or Region' className={style.box7} />
          </div>
        </div>

        <span className={style.box1}>Postcode*</span><br />
        <input onChange={handleChange} name="postcode" required type="text" className={style.box7} />
        <br />
        <span className={style.box1}>Daytime Phone*</span><br />
        <input onChange={handleChange} name="phone" required type="text" placeholder="Do not enter a country code" className={style.box7} />

      </div>
     
      {/* <!-- ------------------------second part----------------------------------  --> */}
     
      <div className={style.main2}>
        
       <PaymentBox data={d} top="200px" clickMe={handlClick} title="SHIP TO THIS ADDRESS "/>
      
      </div>
    </div>

  </>):(<> <div className={style.box4}>
    <div>
      <h5>Already Have an Account?</h5>
      <p>Sign in to check out faster.</p>
    </div>
    <div>
    <div className="modal" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
      <div className="modal-dialog modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="btn-close" data-bs-dismiss="modal"  ></button>
          </div>
          <p className='text-center fs-2 mb-auto'>Sign Up</p>
          <hr />
          <p className='text-center text-sm-start-center px-4 mt-auto'>Sign in so you can save items to your wishlists, track your orders, and check out faster!</p>
          <div className="modal-body">
            <div className={style.style2}>
              <form className={style.form} onSubmit={handleSubmit}>
                <p>FIRST NAME</p>
                <input  required onChange={handleChange2} name="first" type="text" className={style.style3} style={{ textTransform: "capitalize" }} />
                <p>LAST NAME</p>
                <input  required onChange={handleChange2} name="last" type="text" className={style.style3} style={{ textTransform: "capitalize" }} />
                <p>EMAIL</p>
                <input  required onChange={handleChange2} name="email" type="email" className={style.style3} />
                <p>PASSWORD</p>
                <input onChange={handleChange2} name="password" type={!passtype ? 'password' : 'text'} className={style.style3} />
                <i style={{ marginLeft: "-30px", cursor: "pointer" }} className="fa-solid fa-eye" onClick={() => { setpasstype(!passtype) }}></i>
                <p></p>
                <input  required type="submit" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" value="Create" className={style.style4} />
              </form>
            </div>
          </div>
          <div className="modal-footer">
            <p className='text-center mx-auto'>If Already Have An Account Click Sign In.</p>
            <button className="btn btn-secondary d-grid col-10 row-2 mx-auto" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Sign In</button>
          </div>
        </div>
      </div>
    </div>


    {/* --------------------------------sign in------------------------------ */}

    <div className="modal" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabndex="-1">
      <div className="modal-dialog modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <p className='text-center fs-1 mb-1'>Sign In</p>
          <hr />
          <div className="modal-body">
            <div className={style.style2}>
              <form className={style.form} onSubmit={handleSubmit1}>
                <p>EMAIL</p>
                <input  required onChange={handleChange1} name="email" type="email" className={style.style3} />
                <p>PASSWORD</p>
                <input  required onChange={handleChange1} name="password1" type={!passtype ? 'password' : 'text'} className={style.style3} />
                <i style={{ marginLeft: "-30px", cursor: "pointer" }} className="fa-solid fa-eye" onClick={() => { setpasstype(!passtype) }}></i>

                <p></p>
                <input data-bs-dismiss="modal"  onSubmit={handleSubmit1} type="submit" value="Sign In" className={style.style4} />
              </form>
            </div>
          </div>
          <div className="modal-footer">
            <p className='text-center mx-auto'>If Don't Have An Account Click Create An Account.</p>
            <button className="btn btn-secondary d-grid col-10 row-2 mx-auto" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">CREATE AN ACCOUNT</button>
          </div>
        </div>
      </div>
    </div>
    {/* <a className="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Open first modal</a> */}


      <button data-bs-toggle="modal" href="#exampleModalToggle" role="button">SIGN IN</button>
    </div>
  </div></>)
}

export default Address