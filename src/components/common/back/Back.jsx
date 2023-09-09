import React from "react"
import { useLocation } from "react-router-dom"

const Back = ({ title, pathname }) => {
  const location = useLocation()

  return (
    <>
      <section className='back'>
        {/* <h2>Home / {location.pathname.split("/")[1]}</h2> */}
        <h1>{title}</h1>
        <h2>{pathname}</h2>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Back
