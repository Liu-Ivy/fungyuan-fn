import React from 'react'
import Signup from "./Signup";
import Login from "./Login";


function FormPage() {
  return (
    <>
      <div className='bg-dark text-light'>
        <h2 className='text-center pt-4'>
          About Us
        </h2>
        <h4 className="text-center p-3" style={{margin: "0px"}}>FUNGYUAN Grinding Wheel Ltd. is located in Taichung, Taiwan. It is the best grinding wheel sholesaler with over 50 years experience of selling our products. Our goal is to provide a product with the best quality with good fit with your need. We promise to offer the fastest service to your company.
          {/* We attribute our products’ success to the active client service and the continues assessment of the emerging market needs. We serve our partners’ best interests by developing new, higher performance grinding tools and solutions. We have a strong client support, which is best demonstrated by our ability to deliver customized and cost effective solutions for our clients assorted and in time more complex grinding needs. */}
        </h4>
      </div>
      <div className='about-us'>
        <h2>Signup</h2>
        <Signup />
        <h2>Login</h2>
        <Login />
      </div>
    </>
  )
}

export default FormPage;
