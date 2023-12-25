import React from 'react'
import Cdata from './Cdata'

function ChoosePlace() {
    return (
        <>
            <div className='container'>

                <p className='fw-semibold text-secondary text-center mt-5 '>CHOOSE YOUR PLACE</p>

                <h3 className='fw-bold text-center mt-3 mb-4'>Popular Destinations</h3>

                <div className='row'>
                    {Cdata.map((a) => (

                        <div className='col-lg-3 col-md-6 mt-md-2 mt-sm-2 '>
                            <div className='card'>

                                <img className='w-100 img1' src={a.Image} />
                                <div className='card-body'>
                                    
                                      
                                        <h5 className='fw-bolder '> {a.title}</h5>
                                        <p className='descrip'>{a.des}</p>
                                  

                                </div>
                            </div>
                        </div>
                    ))}


                </div>


            </div>
        </>
    )
}

export default ChoosePlace
