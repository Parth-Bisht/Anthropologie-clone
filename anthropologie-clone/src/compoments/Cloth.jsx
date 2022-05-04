import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import styles from "./Card.module.css";

const Cloth = () => {
    const [cloths, setCloths] = useState([]);

    const getData = () => {
        axios.get("http://localhost:3001/cloths").then((res) => {
        setCloths(res.data);
        });
    };
    useEffect(() => {
        getData();
    }, []);
    return (
        <div>
        <div className={styles.flex}>
            <div className={styles.h}>Women's Clothing</div>

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
            marginLeft:"280px",
            marginRight:"40px"
            }}
        >
            {cloths.map((item) => {
            return <Card key={item.id} item={item} />;
            })}
        </div>
        </div>
    );
};

export default Cloth;
