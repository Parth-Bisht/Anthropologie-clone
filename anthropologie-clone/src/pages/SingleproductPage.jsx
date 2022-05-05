import React from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SingleProduct from '../components/SingleProduct'
import { Slider } from '../components/Slider'

const SingleproductPage = () => {
  const {id,products} = useParams();
  
  return (
    <div>
    {/* {console.log(products)} */}
      <Navbar/>
      <SingleProduct location={products} id={id}/>
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
