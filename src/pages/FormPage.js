import React from 'react'
import Signup from "./Signup";
import Login from "./Login";


function FormPage() {
  return (
    <>
      <div className='about-us  mb-3'>
        <div className='about-us-card'>
        <h2 className='text-center pt-4'>
          About Us
        </h2>
        <h4 className="text-center p-3" >FUNGYUAN Grinding Wheel Ltd. is located in Taichung, Taiwan. It is the best grinding wheel sholesaler with over 50 years experience of selling our products. Our goal is to provide a product with the best quality with good fit with your need. We promise to offer the fastest service to your company.
        </h4>
        </div>
      </div>
      <div className="form">
        <h2 className="ml-5">Signup</h2>
        <Signup/>
        <h2 className="ml-5 mt-5">Login</h2>
        <Login />
      </div>
    </>
  )
}

export default FormPage;
