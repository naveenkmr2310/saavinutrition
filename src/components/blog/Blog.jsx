import React from "react"
import Back1 from "../common/back/Back1"
import BlogCard from "./BlogCard"
import "./blog.css"

const Blog = () => {
  return (
    <>
      <Back1 title='Blog Posts'  pathname='Know your everyday food!'/>
      <section className='blog1 blog'>
        <div className='container grid2'>
          <BlogCard />
        </div>
      </section>
    </>
  )
}

export default Blog
