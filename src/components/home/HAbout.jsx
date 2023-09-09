import React from "react"
import OnlineCourses from "../allcourses/OnlineCourses"
import "../allcourses/courses.css"

const HAbout = () => {
  return (
    <>
     <section id={'section2'} className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>To Know About Our Therapeutic Diet Programs</h1>
          </div>
          <div  className='right row'>
            <input type='text' placeholder='Enter email address' />
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section>
      <section className='homeAbout'>
        <OnlineCourses />
      </section>
    </>
  )
}

export default HAbout
