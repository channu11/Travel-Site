import React from 'react'
import Home from './Home';
import About from './About';
import Gallery from './Gallery';
import Nepal from './Nepal';
import Place from './Place';
import TrekkingPage from './TrekkingPage';

import { Routes, Route, Link } from "react-router-dom";

import PlaceOfInterest from './PlaceOfInterest';
import FestivalInNepal from './FestivalInNepal';
import Tibet from './Tibet';
import EveresetBaseCamp from './EveresetBaseCamp';
import KailashTour from './KailashTour';


function Navbar() {
  return (
    <>
      <section className="bg1">


        <nav className="navbar navbar-expand-lg  sticky-top ">
          <div className="container ">
            <Link className="navbar-brand" to="/"><div class="Logo">Frenc <br /> <span class="Himal">Himalayan Travels & Treks</span> </div></Link>
            <button className="navbar-toggler d-md-none fs-5 text-light  " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon  " />
            </button>
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About Us</Link>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/nepal" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Nepal
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/PlaceOfInterest">  Places of interest</a></li>
                    <li><a className="dropdown-item" href="/Festival"> Festivals in Nepal</a></li>
                    {/* <li><hr className="dropdown-divider" /></li> */}
                    <li><a className="dropdown-item" href="#"> Trekking in Nepal</a></li>
                    <li><a className="dropdown-item" href="#">  Peak climbing</a></li>
                    <li><a className="dropdown-item" href="#">  Jungle safari</a></li>
                    <li><a className="dropdown-item" href="#">  River rafting</a></li>
                    <li><a className="dropdown-item" href="#">  Extend your trip</a></li>
                    <li><a className="dropdown-item" href="#">  Air ticketing</a></li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/place" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Place
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/tibet"> Tibet</a></li>
                    <li><a className="dropdown-item" href="#"> Nepal</a></li>
                    {/* <li><hr className="dropdown-divider" /></li> */}
                    <li><a className="dropdown-item" href="/place"> Ladakh</a></li>
                    <li><a className="dropdown-item" href="/place">  India</a></li>
                    <li><a className="dropdown-item" href="/place"> Bhutan</a></li>
                    <li><a className="dropdown-item" href="/place"> Travel information</a></li>

                  </ul>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/gallery">Gallery</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/trekking">Trekking Maps</a>
                </li>


              </ul>

            </div>

            <div className='icons flex  '>
              <a href="#"><i class="bi bi-facebook "></i></a>
              <a href="#"><i class="bi bi-twitter ms-3 "></i></a>
              <a href="#"><i class="bi bi-google  ms-3 "></i></a>
              <a href="#"> <i class="bi bi-instagram  ms-3 "></i></a>
            </div>
          </div>

        </nav>



        <div className='container'>
          <div className="row">
            <div className='col-lg-6  Nature col-md-6'>
              <h2>Feel the Nature and <br />
                it's Beauty<br />
                Travel through Us</h2>
              <p>We are the best travel company for trekkings, expedition, tours in Himalays</p>
              <button type="button" class="btn btn1 ">Who are We?</button>
              <button type="button" class="btn btn1 ms-3 ">Day Tours</button>
            </div>

            <div className='col-lg-4 ms-5  form2 col-md-5 mb-5 mt-lg-5 '>
              <div className='box mt-md-0'>

                <form className="form  mt-5 mt-md-3  " role="search">
                  <input className="form-control me-2 w-100   " type="text" placeholder="Your Name" aria-label="Search" />
                  <input className="form-control me-2 w-100 mt-2" type="text" placeholder="Your Subject" aria-label="Search" />
                  <input className="form-control me-2 w-100 mt-2" type=" Email" placeholder="Your E-mail" aria-label="Search" />
                  <div class="mb-3 mt-2 mb-md-2">

                    <textarea class="form-control " placeholder='Enter your text here' id="exampleFormControlTextarea1" rows="5"></textarea>
                  </div>
                  <button type="button" class="btn btn1   ">Submit</button>

                </form>

              </div>
            </div>
          </div>
        </div>

      </section>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/nepal" element={<Nepal />} />
        <Route path="/place" element={<Place />} />
        <Route path="/trekking" element={< TrekkingPage/>} />
        <Route path="/PlaceOfInterest" element={< PlaceOfInterest/>} />
        <Route path="/Festival" element={< FestivalInNepal/>} />
        <Route path="/tibet" element={< Tibet/>} />
        <Route path="/everestbasecamp" element={<  EveresetBaseCamp/>} />
        <Route path="/kailashtour" element={< KailashTour/>} />
       
      </Routes>

    </>
  )
}

export default Navbar
