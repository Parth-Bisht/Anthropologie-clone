import React from "react";
import styles from './SingleProduct.module.css';
import { AiFillStar } from "react-icons/ai";

const SingleProduct = () => {
  const handleChange = (e) => {
    console.log(e.target.value);
  };
 
  const data = {
    id: 1,
    img1: "https://images.urbndata.com/is/image/Anthropologie/66667379_042_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    img2: "https://images.urbndata.com/is/image/Anthropologie/66667379_042_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
    title: "FREECITY Super-Vintage Sweat Pants",
    price: "$235.00",
  };
  const [mainimg,setMainimg] = React.useState(data.img2);
  const handleImage = (e)=>{
    setMainimg(e.target.src);
  }
  return (
    <div>
      <div
        className="conatiner mt-5 d-flex justify-content-around"
        style={{ width: "1354px" }}
      >
        <div style={{ width: "8%" }}>
          <img
          onClick={handleImage}
            className={`my-2 ${styles.changeImg}`}
            src={data.img2}
            alt=""
          />
          <img
          onClick={handleImage}
          className={`my-2 ${styles.changeImg}`}
            src={data.img1}
            alt=""
          />
        </div>
        <div style={{ width: "40%" }}>
          <img style={{ width: "100%" }} src={mainimg} alt="" />
        </div>
        <div style={{ width: "30%" }}>
          <h3 className={styles.title}>{data.title}</h3>
          <a style={{fontSize:"13px"}} href="">FREECITY</a>
          <div className="mb-1">
            <AiFillStar color="#cccccc" />
            <AiFillStar color="#cccccc" />
            <AiFillStar color="#cccccc" />
            <AiFillStar color="#cccccc" />
            <a style={{fontSize:"13px",marginLeft:"5px"}} href="">Write a review</a>
          </div>
          <p style={{marginBottom:"4px",fontSize:"18px"}}>{data.price}</p>
          <p style={{marginBottom:"-7px",fontSize:"13px",color:"#5c5c5f"}}>Or 4 interest-free installments of $58.75 with</p>
          <span>
            {" "}
            <img
              style={{ width: "10%" }}
              src="https://www.anthropologie.com/static/v3/images/klarna-logo-e1f1797f9730029d90fccb75c4be22cc.svg"
              alt=""
            />{" "}
          </span>
          <span>or</span>
          <span>
            {" "}
            <img
              style={{ width: "10%" }}
              src="https://www.anthropologie.com/static/v3/images/afterpay-logo-7904b549fb7a2a970c606efc9f1e8260.svg"
              alt=""
            />{" "}
          </span>
          <p className={`my-3 ${styles.online}`}>Online Exclusive</p>

          <hr />

          <p className={styles.color} >Color: <span> DARK BLUE</span></p>
          <p className={styles.family} style={{fontSize:"14px",marginBottom:"2px"}}>Size*</p>
          <div
            className="btn-group mb-3"
            role="group"
            aria-label="Basic radio toggle button group"
          >
            <input
              onChange={handleChange}
              value="S"
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio1"
              autoComplete="off"
            />
            <label className="btn btn-outline-primary" htmlFor="btnradio1">
              S
            </label>

            <input
              onChange={handleChange}
              value="M"
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio2"
              autoComplete="off"
            />
            <label className="btn btn-outline-primary" htmlFor="btnradio2">
              M
            </label>

            <input
              onChange={handleChange}
              value="L"
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio3"
              autoComplete="off"
            />
            <label className="btn btn-outline-primary" htmlFor="btnradio3">
              L
            </label>
          </div>

          <p style={{marginBottom:"3px"}} className={styles.family}>Qty"</p>
          <select className={styles.select}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <button className={styles.button}>ADD TO BASKET</button>

          <div style={{width:"85%"}} className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Product Details
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <p style={{fontSize:"13px",color:"#5c5c5f"}}>Style No. 66667379; Color Code: 042</p>
                  <ul style={{fontSize:"13px",color:"#5c5c5f"}}>
                    <li>Cotton</li>
                    <li>Machine Wash</li>
                    <li>USA</li>
                  </ul>
                  <p style={{color:"#5c5c5f"}}>DIMENSIONS</p>
                  <ul style={{fontSize:"13px",color:"#5c5c5f"}}>
                    <li>12" rise</li>
                    <li>24" inseam</li>
                    <li>5" leg opening</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  Shipping & Returns
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <h6>Shipping</h6>
                  <p style={{fontSize:"13px",color:"#5c5c5f"}}>
                    At checkout, we’ll provide you with an estimated delivery
                    date for your order based on your shipping method. Standard
                    shipping charges may apply based on the order value.
                    AnthroPerks members enjoy free Standard Shipping on all
                    orders $50+. Learn more about our shipping{" "}
                  </p>
                  <h6>Returns</h6>
                  <p style={{fontSize:"13px",color:"#5c5c5f"}}>
                    Merchandise must not be worn, washed, or altered. All tags
                    must be attached and items must be returned in original
                    packaging. Most merchandise can be returned within 60 days
                    of the purchase date. A refund will be issued to the
                    original form of payment at the original selling price. If
                    returned after 60 days, a merchandise credit will be issued
                    for the the original selling price.
                  </p>
                  <p style={{fontSize:"13px",color:"#5c5c5f"}}>For fast and free returns, find your local store.</p>
                  <p style={{fontSize:"13px",color:"#5c5c5f"}}>
                    Prefer to return by mail? View our complete return policy
                    and/or start your return online here.
                  </p>
                  <p style={{fontSize:"13px",color:"#5c5c5f"}}>
                    Just to note: shoes, bedding, curtains, and swimwear must be
                    shipped back to our warehouse and cannot be returned to a
                    store. Good news – online returns for these items are free!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ width: "6%" }}>
          <img
            className="my-2"
            style={{ width: "100%" }}
            src={data.img1}
            alt=""
          />
          <img
            className="my-2"
            style={{ width: "100%" }}
            src={data.img1}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
