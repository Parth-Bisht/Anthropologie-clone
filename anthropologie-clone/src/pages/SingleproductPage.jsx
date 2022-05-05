import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SingleProduct from '../components/SingleProduct'
import { Slider } from '../components/Slider'

const SingleproductPage = () => {
  
  return (
    <div>
      <Navbar/>
      <SingleProduct/>
      <div style={{width:"80%",margin:"auto"}}>
      <h4 style={{margin:"0px"}}>Recommend For You</h4>
      <hr />
      </div>
      <Slider/>
      <Footer/>
    </div>
  )
}

export default SingleproductPage
