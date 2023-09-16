import React from "react"
import { testimonal } from "../../../dummydata"
import Heading from "../../common/heading/Heading"
import "./style.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Testimonal = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <>
      <section  id={'section3'} className='testimonal'>
        <div className='container'>
          <Heading subtitle='TESTIMONIAL' title='Our Successful Clients' />
          <div className='content'>
          <Carousel  
                    responsive={responsive} 
                    containerClass="carousel-container"
                    itemClass="carousel-item"
                    swipeable={true}
                    autoPlaySpeed={1000}
                    renderButtonGroupOutside
                    ssr={true}
                    >
              {testimonal.map((val) => (
                <div className='items shadow'>
                  <div className='box flex'>
                    <div className='img'>
                      <img src={val.cover} alt='' />
                      <i className='fa fa-quote-left icon'></i>
                    </div>
                    <div className='name'>
                      <h2>{val.name} </h2>
                      <span>{val.post}</span>
                    </div>
                  </div>
                  <p>{val.desc}</p>
                </div>
              ))}
            </Carousel>
          </div>

          {/* <div className='content grid2'>
            {testimonal.map((val) => (
              <div className='items shadow'>
                <div className='box flex'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                    <i className='fa fa-quote-left icon'></i>
                  </div>
                  <div className='name'>
                    <h2>{val.name}</h2>
                    <span>{val.post}</span>
                  </div>
                </div>
                <p>{val.desc}</p>
              </div>
            ))}
          </div> */}
        </div>
      </section>
    </>
  )
}

export default Testimonal
