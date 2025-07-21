import React from "react";
import "./style.css"

import blogImg1 from "../../assets/images/blogImg1.webp";
import blogImg2 from "../../assets/images/blogImg2.webp";
import blogImg3 from "../../assets/images/blogImg3.webp";
import BlogCard from "../BlogCard";

const blogsData = [
  {
    id: 1,
    image: blogImg1,
    title: "Boost Your Skills Online, On Front-End & Design Basics",
  },
  {
    id: 2,
    image: blogImg2,
    title: "Boost Your Skills Online, On Front-End & Design Basics",
  },
  {
    id: 3,
    image: blogImg3,
    title: "Boost Your Skills Online, On Front-End & Design Basics",
  },
];

const BlogSec = () => {
  return (
    <section className="blogSec sec-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="secHead">
              <p className="sec-tag">NEWS FEED</p>
              <h3 className="secTitle">News & Article</h3>
            </div>
          </div>
          {blogsData.map((item, index) => (
            <div className="col-lg-4 col-md-6 mb-lg-0 mb-4" key={index}>
              <BlogCard
                image={item.image}
                title={item.title}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSec;
