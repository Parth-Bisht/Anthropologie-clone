import { useEffect, useState } from "react";
import axios from "axios";
import Shoe1 from "./Shoe1";
import styles from "./Shoe.module.css";

const Shoe = ({products}) => {
    console.log(products)
    const [shoes, setShoes] = useState([]);

    const getData = () => {
        axios.get(`http://localhost:3001/${products}`).then((res) => {
        setShoes(res.data);
        });
    };
    useEffect(() => {
        getData();
    }, [products]);
    return (
        <div>
        <div className={styles.flex}>
            <div className={styles.h}>Women's {products}</div>
            <div>
            <label>Sort: </label>
            <select>
                <option value="">Fetured</option>
                <option value="">Price: low to high</option>
                <option value="">Price: high to low</option>
                <option value="">Newest</option>
                <option value="">Bestselling</option>
                <option value="">Rating: high to low</option>
                <option value="">A-Z</option>
                <option value="">Z-A</option>
            </select>
            </div>
        </div>
        <div
            style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap:"20px",
            marginTop:"40px",
            marginRight:"40px"
            }}
        >
            {shoes.map((item) => {
            return <Shoe1 key={item.id} item={item} />;
            })}
        </div>
        </div>
    );
};

export default Shoe;
