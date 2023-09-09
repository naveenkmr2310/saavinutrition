import React from "react"
import "../blog/blog.css"
import { blog, pic1,pic2,pic3 } from "../../dummydata"
import Heading from "../common/heading/Heading"
import { useHistory  } from "react-router-dom";

// copy code of blog => blogCard

const Hblog = () => {
  let history = useHistory(); 
  const routeChange = () =>{ 
    let path = `/blog`; 
    history.push(path)
  }
  return (
    <>
      <section id={'section4'} className='blog'>
        <div className='container'>
          <Heading subtitle='OUR BLOG' title='Recent From Blog' />
          <div className='grid2'>
              <div className='items shadow item1'>
                <div className='img'>
                  <img src={pic1} alt='' />
                </div>
                <div className='text'>
                  <div className='admin flexSB'>
                    <span>
                      <i className='fa fa-calendar-alt'></i>
                      <label htmlFor=''>MAY. 15, 2022</label>
                    </span>
                  </div>
                  <h1>6 Common mistakes you make when “Dieting”</h1>
                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>
              </div>
              <div className='items shadow item2'>
                <div className='img'>
                  <img src={pic2} alt='' />
                </div>
                <div className='text'>
                  <div className='admin flexSB'>
                    <span>
                      <i className='fa fa-calendar-alt'></i>
                      <label htmlFor=''>JAN. 18, 2021</label>
                    </span>
                  </div>
                  <h1>8 Great Benefits of Almonds</h1>
                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>
              </div>
              
              <div className='items shadow item3'>
                <div className='img'>
                  <img src={pic3} alt='' />
                </div>
                <div className='text'>
                  <div className='admin flexSB'>
                    <span>
                      <i className='fa fa-calendar-alt'></i>
                      <label htmlFor=''>DEC. 14, 2022</label>
                    </span>
                  </div>
                  <h1>he Complete Pocket Guide to Indian Diabetes</h1>
                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>
              </div>
            {/* {blog.slice(0, 3).map((val) => (
              <div className='items shadow'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <div className='admin flexSB'>
                    <span>
                      <i className='fa fa-calendar-alt'></i>
                      <label htmlFor=''>{val.date}</label>
                    </span>
                  </div>
                  <h1>{val.title}</h1>
                  <p>{val.desc}</p>
                </div>
              </div>
            ))} */}
          </div>
          <div id='heading1'>
          <button className='readMore' onClick={routeChange}>
                  Read more
          </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hblog
