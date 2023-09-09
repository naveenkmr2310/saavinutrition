import React from "react"
import Back from "../common/back/Back"
import "./contact.css"

const Contact = () => {
  const map ='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.2217351352274!2d80.1359959!3d12.957658499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525fae5aceb0db%3A0x5337c4d01bfb2f62!2sCafe%2033!5e0!3m2!1sen!2sin!4v1694210663250!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"'
  return (
    <>
      <Back title='Contact us' pathname="We're open for any suggestion or just to have a chat"/>
      <section className='contacts padd'>

        <div className='container flexSB'>
          <div className='left row'>
            <iframe src={map}></iframe>
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            {/* <p>We're open for any suggestion or just to have a chat</p> */}

            <div className='items flex'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p> No2, Navamani 2nd cross street, Central Bank colony, Chromepet, Chennai 600044</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p> naveenkmr2310@gmail.com</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p> +91 8754567203</p>
              </div>
            </div>

            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Subject' />
              <textarea cols='30' rows='10'>
                Create a message here...
              </textarea>
              <button className='primary-btn'>SEND MESSAGE</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
