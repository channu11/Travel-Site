import React from 'react'
import Ddata from './Ddata'

function SportLight() {
    return (
        <>
            <div className='container mt-4'>
                <h3 className='text-center fw-bolder my-5'>In the Spotlight</h3>
                <div className='row mx-auto'>



                    {Ddata.map((a) => (

                        <div className='col-lg-4 mt-3 col-md-6 mt-md-2'>

                            <div className='position-relative aa '>
                                <img className='w-100 img1 ' src={a.Image} />
                                <div className='box1 fws-lighter me-lg-5  mt-lg-3 '>
                                     {a.block}
                                </div>
                            </div>
                            <div className='card-body'>


                                <h6 className='fws-semibold  mt-3'> {a.title}</h6>

                                <button type="button" class="btn btn1 fst-italic mt-1">More<i class="bi bi-plus fst-italic"></i></button>
                            </div>

                        </div>

                    ))}
                </div>
            </div>

        </>
    )
}

export default SportLight
