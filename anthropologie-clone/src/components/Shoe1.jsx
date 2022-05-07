import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Shoe.module.css";

function Shoe1({ item,location }) {
    const navigate = useNavigate()
    const [ig, setIg] = useState(true);
    const handleHover = () => {
        setIg(!ig);
    };
    const handleOut = () => {
        setIg(!ig);
    };
    const handleClick=(id)=>{
        navigate(`/${location}/${id}`);
    }
    return (
        <div>
        <div style={{cursor:"pointer"}} >
            <div
            onClick={()=>handleClick(item.id)}
            className={styles.image}
            key={item.id}
            style={{ position: "relative",
            // border:"1px solid red"
            }}
            >
                <img
                onMouseOver={handleHover}
                onMouseOut={handleOut}
                style={{
                    height: "415px",
                    width: "100%",
                    // border:" 1px solid red"
                }}
                src={ig ? item.img1 : item.img2}
                alt="image"
                />
                <p>{item.title} </p>
                <p>${item.price}</p>
                <div className={styles.quick}>Quickshop</div>
            </div>
        </div>
        </div>
    );
}

export default Shoe1;
