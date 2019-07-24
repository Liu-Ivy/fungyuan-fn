import React from 'react'


function Footer() {
  return (
    <div className="bg-dark text-light text-center">
      <h2>Contact Us</h2>
      <div className="text-center">
        <span>
          <h4 style={{margin: "0px"}} >Fungyuan Taiwan</h4>
          <p>Phone: +886 4 2245 2639</p>
          {/* <p >Address: No. 39, Anshun East 9th St, Beitun District, Taichung City, Taiwan</p> */}
        </span>
        <span >
          <h4 style={{margin: "0px"}}>Fungyuan Kunshan China</h4>
          <p>Phone: +86 0 2345 3654</p>
        </span>
        <span>
          <h4 style={{margin: "0px"}}>Fungyuan Shenzhen China</h4>
          <p>Phone: +86 0 3647 8576</p>
        </span>
      </div>
    </div>
  )
}


export default Footer
