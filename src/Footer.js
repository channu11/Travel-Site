import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div className='bg5 mt-5'>

                <div className='container'>
                    <div className='row mt-5 pb-5 mx-auto'>
                        <div className='col-lg-5 text-light mt-5 col-md-6 '>
                            <h5>Contact</h5>
                            <p className='footr pt-2'>Frens Himalayan Travels & Treks Pvt. Ltd.</p>
                            <p  className='footr'>Thamel, Kathmandu, Nepal</p>
                            <p  className='footr'>Phone : 00977- 1-4414766</p>
                            <p  className='footr'>Mobile : 9851015429, 9801015429 (Mahesh Silwal)</p>
                            <p  className='footr'>Email : - info@frenstravel.com,</p>
                        </div>
                        <div className='col-lg-2 text-light trekkings mt-5 col-md-3    text-start'>
                            <h5> Place</h5>
                            <p  className='footr pt-2'>  <Link to="#">Tibet</Link></p>
                            <p  className='footr'>  <Link to="#">Ladakh</Link></p>
                            <p  className='footr'>  <Link to="#">India</Link></p>
                            <p  className='footr'>  <Link to="#">Bhutan</Link></p>
                        </div>
                        <div className='col-lg-3 text-light col-md-3   trekkings mt-5'>

                            <h5> Quick Links</h5>
                            <p  className='footr pt-2'>  <Link to="#">Home</Link></p>
                            <p  className='footr'>  <Link to="#">Contach Us</Link></p>
                            <p  className='footr '>  <Link to="#">Term & Conditions</Link></p>
                            <p  className='footr '>  <Link to="#">Travel Information</Link></p>
                        </div>
                        <div className='col-lg-2 text-light trekkings mt-5 '>

                           
                            <div className='row '>
                                <div className='col-lg-6 col-md-3 col-sm-6 picc rounded'><img src={require('./footer2.jpg')}/></div>
                                <div className='col-lg-6 col-md-3 rounded picc col-sm-6'> <img src={require('./footer1.jpg')}/></div>
                                <div className='col-lg-6 col-md-3 mt-2 rounded picc col-sm-6'><img src={require('./footer3.jpg')}/></div>
                                <div className='col-lg-6 col-md-3 mt-2 rounded picc col-sm-6'> <img src={require('./footer4.jpg')}/></div>
                            
                            </div>
                        </div>
                        <p className='text-center text-light  footr pt-5 '>© 2016 Frens Travels. All Rights Reserved | Powered By :: Radiant Info Tech</p>
                    </div>

                
                </div>

            </div>
        </>
    )
}

export default Footer
