import React from 'react'
import Acordian from '../compoments/Acordian';
import Footer from '../compoments/Footer';
import Navbar from '../compoments/Navbar';
import Shoe from '../compoments/Shoe';
import { useParams } from 'react-router-dom';



function ProductsPage() {
    const {products} = useParams();

  return (
    <div>
      <Navbar/>
      <div style={{display:"flex"}}>
        <Acordian/>
        <Shoe products={products}/>
      </div>
      <Footer/>
    </div>
  )
}

export default ProductsPage
