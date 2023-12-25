import React from 'react'

function BestTravel() {
  return (
    <>

    <section className='bg-4'>
    <div className='container mt-4'>
        <div className='row  col-md-d-flex'>
            <div className='col-lg-6 col-md-8 girlpic col-sm-12'>
                <img className='w-75 bg-secondary-subtle p-2' src={require('./girl1.jpg')}/>
            </div>
            <div className='col-lg-6 mt-5 col-md-4 about1'>
                <p className='text-secondary fw-semibold bb'>ABOUT FRENC</p>
                <h2 className='fw-bold pb-3 '>World Best Travel Agency Company Since 2008.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiu smod tempor incididunt ut labore dolore magna aliqua.Quis ipsum suspen disse ultrices gravida Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                <p> <i class="bi bi-check2 me-1"></i>Ratione voluptatem.sequi nesciunt.</p>
                <p> <i class="bi bi-check2 me-1"></i>Ratione voluptatem.</p>
                <p> <i class="bi bi-check2 me-1"></i>Ratione voluptatem sequi.</p>
            </div>
        </div>
     </div>
    </section>
      
    </>
  )
}

export default BestTravel
