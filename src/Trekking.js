import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
function Trekking() {
  return (
    <>

      <section className='bg2 '>
      
        <div className="container font- Poppin text-light">
        <h1 className='text-center text-light pt-5  font- Poppins'>Our Top Trekking</h1>
          <div className='row pt-4 pb-3'>
         
            <div className='col-lg-4 trekkings col-md-4'>
              <h3 className='pb-3'>
                Tea House Trekking
              </h3>
              <p><Link to="#">Annapurnas Region </Link> </p>
              <p> <Link to="#">Everest Region </Link></p>
              <p> <Link to="#"> Helambu Trek </Link></p>
              <p> <Link to="#">Gosainkund Lakes / Langtang </Link></p>
              <p> <Link to="#">Langtang / Helambu Via Ganjala Pass </Link></p>
              <p> <Link to="#">Shivapuri Trek</Link></p>

            </div>
            <div className='col-lg-4 trekkings col-md-4 mt-md-2'>
              <h3 className='pb-3'>
                Camping Trekking
              </h3>
              <p><Link to="#">Upper Mustang Trek</Link></p>
              <p><Link to="#">Kanchenjunga Base Camp Trek</Link></p>
              <p><Link to="#">Teri La Pass To Naar Phu</Link></p>
              <p><Link to="#">Dolpa Trek</Link></p>
              <p><Link to="#">Around Manaslu Trek</Link></p>
              <p><Link to="#">Around Dhaulagiri Trek</Link></p>
            </div>
            <div className='col-lg-4 trekkings  col-md-4 mt-md-2'>
              <h3 className='pb-3'>
                Tea House Trekking
              </h3>
              <p><Link to="#"> Annapurnas Region</Link></p>
              <p><Link to="#">Everest Region</Link></p>
              <p><Link to="#">Helambu Trek</Link></p>
              <p><Link to="#">Gosainkund Lakes / Langtang</Link></p>
              <p><Link to="#">Langtang / Helambu Via Ganjala Pass</Link></p>
              <p><Link to="#">Shivapuri Trek</Link></p>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default Trekking
