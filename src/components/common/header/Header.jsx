import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)
 
  return (
    <>
      <div className="saavihead">
        <Head />
      </div>
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li 
              onClick={() => {
                let section = document.getElementById("section1");
                section && section.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              <Link to='/'>About US</Link>
            </li>
            <li
              onClick={() => {
                let section = document.getElementById("section2");
                section && section.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              <Link to='/'>Why Us</Link>
            </li>
            <li
              onClick={() => {
                let section = document.getElementById("section3");
                section && section.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              <Link to='/'>Testimoials</Link>
            </li>
            <li 
              onClick={() => {
                let section = document.getElementById("section4");
                section && section.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              <Link to='/'>Blog</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
          <div className='start'>
            {/* <div className='button'> */}
              <h1>saavinutrition</h1>
              <span>THE KEY TO HEALTH</span>
            {/* </div> */}
            {/* <div className='button'>SAAVINUTRITION</div> */}
          </div>
          <button className='toggle' onClick={() => setClick(!click) }>
            {click ? <i className='white fa fa-times'> </i> : <i className='dark fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
