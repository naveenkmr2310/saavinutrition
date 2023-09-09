import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"
const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
            <div className='headdd'>
              <Heading subtitle='WELCOME TO SAAVINUTRITION,' title='DIET CONSULTATION & PROGRAMS' />
            </div>
            <div className='head-mobile'>
              <Heading subtitle='DIET CONSULTATION & PROGRAMS' title='' />
            </div>
            <div className='row'>
              <p>Our nutrition program provides you with the necessary knowledge and skills to sustain a healthy eating lifestyle, eliminating the need for fad diets or diet programs.</p>
              <div className='button'>
                <button>
                  GET STARTED <i className='fa fa-long-arrow-alt-right'></i>
                </button>
                {/* <button>
                    CONTACT US <i className='fa fa-long-arrow-alt-right'></i>
                </button> */}
              </div>
            </div>
        </div>
      </section>
      {/* <div className='margin'></div> */}

    </>
  )
}


export default Hero
