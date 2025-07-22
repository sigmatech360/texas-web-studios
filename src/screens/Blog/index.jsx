import React, { useEffect, useState } from "react";
import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";

import { IoIosArrowRoundForward } from "react-icons/io";

import blogBanner from "../../assets/images/blogBanner.webp";

import blogPageImg1 from "../../assets/images/blogPageImg1.webp";
import blogPageImg2 from "../../assets/images/blogPageImg2.webp";
import blogPageImg3 from "../../assets/images/blogPageImg3.webp";
import blogPageImg4 from "../../assets/images/blogPageImg4.webp";
import blogPageImg5 from "../../assets/images/blogPageImg5.webp";

import BlogCard from "../../components/BlogCard";
import axios from "axios";
import Loader from "../../components/Loader";

const blogsData = [
  {
    id: 1,
    image: blogPageImg1,
    title: "Boost Your Skills Online, On Front-End & Design Basics",
  },
  {
    id: 2,
    image: blogPageImg2,
    title: "Boost Your Skills Online, On Front-End & Design Basics",
  },
  {
    id: 3,
    image: blogPageImg3,
    title: "Boost Your Skills Online, On Front-End & Design Basics",
  },
  {
    id: 4,
    image: blogPageImg4,
    title: "Boost Your Skills Online, On Front-End & Design Basics",
  },
  {
    id: 5,
    image: blogPageImg5,
    title: "Boost Your Skills Online, On Front-End & Design Basics",
  },
];

const blogCategorries = [
  {
    id: 1,
    name: "IT Design",
  },
  {
    id: 2,
    name: "Web Development",
  },
  {
    id: 3,
    name: `Ui Ux Design`,
  },
  {
    id: 4,
    name: "Branding Design",
  },
  {
    id: 5,
    name: "IT Management",
  },
  {
    id: 6,
    name: "Logo Design",
  },
  {
    id: 7,
    name: "Seo & Content Writing",
  },
];

const wpBaseUrl = import.meta.env.VITE_WP_BASE_URL;

const Blog = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);

  console.log("blogs", blogs);

  useEffect(() => {
    const fetchLatestBlogs = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${wpBaseUrl}/posts?_embed`);
        setBlogs(response.data);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestBlogs();
  }, []);

  return (
    <DefaultLayout>
      <InnerBanner
        bgImage={blogBanner}
        title="Blogs"
        description="Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Mi Eget Mauris Pharetra Et Ultrices."
        pageName="Blogs"
      />
      <section className="blogPageSec sec-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 order-lg-1 order-2">
              {loading ? (
                <>
                  <Loader />
                </>
              ) : (
                <div className="row">
                  {blogs.map((item, index) => (
                    <div className="col-md-6 mb-4" key={index}>
                      <BlogCard
                        image={
                          item._embedded?.["wp:featuredmedia"]?.[0]?.source_url
                        }
                        title={item.title.rendered}
                        author={item._embedded?.author?.[0]?.name || "admin"}
                        slug={item.slug}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="col-lg-3 order-lg-2 order-1 mb-lg-0 mb-4">
              <div className="categoriesList">
                <h4>SOLUTIONS</h4>
                <ul className="packageCardList">
                  {blogCategorries.map((item, listIndex) => (
                    <li key={listIndex}>{item.name}</li>
                  ))}
                </ul>
                <button className="theme-btn icon-btn">
                  Get Started <IoIosArrowRoundForward />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="subscribeNow sec-padding bgPink">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="secHead">
                <p className="sec-tag-sm">
                  Visit Our Blog! Follow The Developments In The Technology &
                  Entrepreneur World
                </p>
                <h3 className="secTitle">
                  Subscribe To Our Newsletter Free And Stay Updated On The
                  Latest Developments!
                </h3>
                <button className="theme-btn icon-btn">
                  Subscribed Now <IoIosArrowRoundForward />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default Blog;
