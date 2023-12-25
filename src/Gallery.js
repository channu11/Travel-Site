import React from 'react'

function Gallery() {
  return (
    <>
<div className='container mt-5'>
    <div className='row'>
        <div className='col-lg-4'>
            <img className='w-100' src={require('./image-3.jpeg')}/>
        </div>
        <div className='col-lg-4'>
        <img className='w-100' src={require('./image-1.webp')}/>
        </div>
        <div className='col-lg-4'>
        <img className='w-100' src={require('./image-4.jpeg')}/>
        </div>

    </div>
    <div className='row mt-3'>
        <div className='col-lg-4'>
            <img className='w-100' src={require('./footer4.jpg')}/>
        </div>
        <div className='col-lg-4'>
        <img className='w-100' src={require('./girl1.jpg')}/>
        </div>
        <div className='col-lg-4'>
        <img className='w-100' src={require('./travel4.jpg')}/>
        </div>

    </div>
</div>
    </>
  )
}

export default Gallery
