import React, { useEffect, useState } from "react";
import "./style.css";

import blogImg1 from "../../assets/images/blogImg1.webp";
import blogImg2 from "../../assets/images/blogImg2.webp";
import blogImg3 from "../../assets/images/blogImg3.webp";
import BlogCard from "../BlogCard";
import Loader from "../Loader";
import { useBlogs } from "../../context/BlogContext";

const blogsData = [
  {
    id: 1,
    image: blogImg1,
    title: "Boost Your Skills Online, on Front-End & Design Basics",
  },
  {
    id: 2,
    image: blogImg2,
    title: "Boost Your Skills Online, on Front-End & Design Basics",
  },
  {
    id: 3,
    image: blogImg3,
    title: "Boost Your Skills Online, on Front-End & Design Basics",
  },
];

const wpBaseUrl = import.meta.env.VITE_WP_BASE_URL;

const BlogSec = ({ secTitle, categorySlug }) => {
  // const [loading, setLoading] = useState(true);
  // const [blogs, setBlogs] = useState([]);

  // useEffect(() => {
  //   const fetchLatestBlogs = async () => {
  //     try {
  //       setLoading(true);
  //       const response = await axios.get(`${wpBaseUrl}/posts?_embed`);
  //       setBlogs(response.data);
  //     } catch (error) {
  //       console.error("Failed to fetch blogs:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchLatestBlogs();
  // }, []);

  // const [categoryId, setCategoryId] = useState(null);
  // useEffect(() => {
  //   const fetchCategoryIdAndPosts = async () => {
  //     try {
  //       setLoading(true);

  //       // Step 1: Get category ID from slug
  //       const categoryRes = await axios.get(
  //         `${wpBaseUrl}/categories?slug=${categorySlug}`
  //       );
  //       const category = categoryRes.data[0];

  //       console.log("categoryRes", categoryRes);

  //       if (!category) {
  //         console.warn("Category not found");
  //         setBlogs([]);
  //         return;
  //       }

  //       setCategoryId(category.id);

  //       // Step 2: Fetch posts using category ID
  //       const postsRes = await axios.get(
  //         `${wpBaseUrl}/posts?_embed&categories=${category.id}`
  //       );
  //       setBlogs(postsRes.data);
  //     } catch (error) {
  //       console.error("Failed to fetch category blogs:", error);
  //       setBlogs([]);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchCategoryIdAndPosts();
  // }, [categorySlug]);

  const { blogs, loading, setCategorySlug } = useBlogs();

  console.log("blogs", blogs);
  

  // When categorySlug changes, we set it in context
  useEffect(() => {
    if (categorySlug) {
      setCategorySlug(categorySlug); // Update the category in context
    } else {
      setCategorySlug(null); // If no categorySlug, fetch all blogs
    }
  }, [categorySlug, setCategorySlug]);

  return (
    <section className="blogSec sec-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="secHead">
              <p className="sec-tag">NEWS FEED</p>
              <h4 className="secTitle" data-aos="fade-up" data-aos-delay="200">
                {secTitle || "News & Article"}
              </h4>
            </div>
          </div>
          {loading ? (
            <div className="text-center">
              <Loader />
            </div>
          ) : (
            blogs?.slice(0, 3)?.map((item, index) => (
              <div
                className="col-lg-4 col-md-6 mb-lg-0 mb-4"
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                {/* <BlogCard image={item.image} title={item.title} /> */}
                <BlogCard
                  image={item._embedded?.["wp:featuredmedia"]?.[0]?.source_url}
                  title={item.title.rendered}
                  author={item._embedded?.author?.[0]?.name || "admin"}
                  slug={item.slug}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogSec;
