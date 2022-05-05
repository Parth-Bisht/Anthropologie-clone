import React from "react";
import styles from "./Navbar.module.css";
import { RiGlobeLine } from "react-icons/ri";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { AiOutlineUser, AiOutlineSearch } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      {/* banner */}

      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner" style={{ height: "40px" }}>
          <div
            style={{ background: "#5e7678" }}
            className="carousel-item active "
          >
            <div className="d-flex  justify-content-center">
              <p className={`${styles.para} ${styles.small}`}>
                the season's best look are as easy as 1,2,3
              </p>
              <p className={styles.para}>New: Summer,Naturally</p>
              <a className={styles.link} href="">
                shop the latest edit
              </a>
            </div>
          </div>
          <div style={{ background: "#4b585d" }} className="carousel-item">
            <div className="d-flex  justify-content-center">
              <p className={`${styles.para} ${styles.small}`}>just added!</p>
              <p className={styles.para}>NEW SALE STYLES</p>
              <a className={styles.link} href="/">
                shop, sale clothing, home & more
              </a>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
          style={{ left: "-76px" }}
        >
          <span
            className="carousel-control-prev-icon"
            style={{ height: "1.5rem" }}
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
          style={{ right: "-76px" }}
        >
          <span
            className="carousel-control-next-icon"
            style={{ height: "1.5rem" }}
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Sign-In/sign-up part */}
    
      <div
        className="d-flex justify-content-end align-items-center py-1"
        style={{ background: "#f7f6f2" }}
      >
        <div className={`mx-3 ${styles.cont}`}>
          <RiGlobeLine fontSize="24px" color="#2e80a1" />{" "}
          <span className={styles.spans}> English ($) </span>{" "}
          <MdOutlineKeyboardArrowDown color="#2e80a1" />
        </div>
        <div className={`me-5 ${styles.cont}`}>
          <AiOutlineUser fontSize="24px" color="#2e80a1" />{" "}
          <span className={styles.spans}>SignIn / SignUp</span>
        </div>
      </div>

    {/* Search-area */}

      <div
        className="d-flex justify-content-between "
        style={{ borderBottom: "1px solid #d3d3d3" }}
      >
        <div className="d-flex  ms-5">
          <div className="py-3" style={{borderLeft:"1px solid #d3d3d3",borderTop:"3px solid #167a92"}}>
          <a href="" style={{padding:"0px 20px"}}> 
          <img src="https://images.ctfassets.net/5de70he6op10/53ZOE4rRqrxcvv0hg2eSLV/a849085e5f600c618132be2475017746/anthro-logo.svg" alt="" />
          </a>
            
          </div>
          <div className="py-3" style={{borderLeft:"1px solid #d3d3d3",borderRight:"1px solid #d3d3d3"}}>
          <a href="" style={{padding:"0px 20px"}}>
           <img src="https://images.ctfassets.net/5de70he6op10/y1O9tEDOvCGliGUvT9RoJ/eb8ab4734c5e3778b8b61da70ed441ac/AL_NewLogo_2.svg" alt="" />
          </a>
          </div>
        </div>
        <div className="d-flex align-items-center me-5 pt-2">
          <form action="" className="mx-4">
            <div className="input-group">
              <input
                type="text"
                className=" form-control-lg"
                placeholder="Search Anthropologie"
                style={{
                  fontSize: "14px",
                  outline: "none",
                  border: "1px solid #d3d3d3",
                }}
              />
              <button
                type="submit"
                className="input-group-text"
                style={{ background: "white", border: "1px solid #d3d3d3" }}
              >
                <AiOutlineSearch color="#77a0b2" fontSize="23px" />
              </button>
            </div>
          </form>
          <Link to="/cart"><BsHandbag color="#2e80a1" fontSize="23px" /></Link>
        </div>
      </div>

            <div className="d-flex"
        style={{ borderBottom: "1px solid #d3d3d3" }} >
            <ul className={styles.lists}>
                <li><Link to=""> New!</Link></li>
                <li><Link to=""> Gift for Mom</Link></li>
                <li><Link to=""> Dresses</Link></li>
                <li><Link to="/cloths"> Clothing</Link></li>
                <li><Link to="/shoes"> Shoes</Link></li>
                <li><Link to=""> Accessories</Link></li>
                <li><Link to=""> Home & Furniture</Link></li>
                <li><Link to=""> Beauty & Wellness</Link></li>
                <li><Link to=""> Garden & Outdoor</Link></li>
                <li><Link to=""> Weddings</Link></li>
                <li><Link to=""> Sale</Link></li>
            </ul>
            </div>

    </div>
  );
}

export default Navbar;
