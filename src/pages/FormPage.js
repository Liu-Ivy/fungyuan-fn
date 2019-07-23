import React from 'react'
import Signup from "./Signup";
import Login from "./Login";

function FormPage() {
  return (
    <>
      <h1 className='about-us'>
        About Us
      </h1>
      <div>
        <h2>Signup</h2>
        <Signup />
        <h2>Login</h2>
        <Login />
      </div>
    </>
  )
}

export default FormPage;
