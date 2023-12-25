import React from 'react'
import Pdata from './Pdata'

function WithUs() {
    return (
        <>
            <div className='container'>

                <p className='text-center mt-5 text-secondary fw-semibold'>TRAVIO SPECIALS</p>
                <h2 className='text-center mt-3 mb-5 fw-bold'>Why Travel with Us?</h2>

                <div className='row'>
                 {Pdata.map((a)=>(
                        
                        <div className='col-lg-3  col-md-6  mb-md-2 mb-sm-2'>
                            <div className='card gy-sm-2 gy-xs-2 '>
    
                                <img className='w-100 img1 ' src={a.Image} />
                                <div className='card-body'>
                                    <div className='d-flex'>
                                    <i class="bi bi-person-hearts me-3 fs-3"></i>
                                    <h6 className='fw-bold'> {a.title}</h6>
                                    </div>
                               
                                </div>
                            </div>
                        </div>
                    
                 ))}
                 </div>
               
            </div>
        </>
    )
}

export default WithUs
