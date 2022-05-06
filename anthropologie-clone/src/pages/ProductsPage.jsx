import React from 'react'

import { useParams } from 'react-router-dom';
import Acordian from '../components/Acordian';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Shoe from '../components/Shoe';



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
