import React from 'react'

function Slider() {
    return (
        <>
            <div id="carouselExampleAutoplaying" className="carousel slide mt-5" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className='slider1 text-light'>
                        <div className="carousel-item active position-relative">
                            <img height={500} src={require('./slider1.jpg')} className="d-block w-100" alt="..." />
                        </div>
                        <div className='text position-absolute'>
                            <h2>Destination</h2>
                            <p>HOME / DESTINATIONS</p>
                        </div>
                    </div>
                    <div className='slider1 text-light'>
                        <div className="carousel-item">
                            <img height={500} src={require('./slider2.jpg')} className="d-block w-100" alt="..." />
                        </div>
                        <div className='text position-absolute'>
                            <h2>Destination</h2>
                            <p>HOME / DESTINATIONS</p>
                        </div>
                    </div>

                    <div className='slider1 text-light'>
                        <div className="carousel-item">
                            <img height={500} src={require('./slider3.jpg')} className="d-block w-100" alt="..." />
                        </div>
                        <div className='text position-absolute'>
                            <h2>Destination</h2>
                            <p>HOME / DESTINATIONS</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


        </>
    )
}

export default Slider
