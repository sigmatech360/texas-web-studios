import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
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
import Loader from "../../components/Loader";
import { useModal } from "../../context/ModalContext";
import { useBlogs } from "../../context/BlogContext";
import ReactHelmet from "../../components/ReactHelmet";
import axios from "axios";

const blogsData = [
  {
    id: 1,
    image: blogPageImg1,
    title: "Boost Your Skills Online, on Front-End & Design Basics",
  },
  {
    id: 2,
    image: blogPageImg2,
    title: "Boost Your Skills Online, on Front-End & Design Basics",
  },
  {
    id: 3,
    image: blogPageImg3,
    title: "Boost Your Skills Online, on Front-End & Design Basics",
  },
  {
    id: 4,
    image: blogPageImg4,
    title: "Boost Your Skills Online, on Front-End & Design Basics",
  },
  {
    id: 5,
    image: blogPageImg5,
    title: "Boost Your Skills Online, on Front-End & Design Basics",
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

const webUrl = import.meta.env.VITE_WEB_URL;
const wpBaseUrl = import.meta.env.VITE_WP_BASE_URL;
const apiUrl = import.meta.env.VITE_API_BASE_URL;

const Blog = () => {
  const { setShowModal } = useModal();
  const [email, setEmail] = useState("");

  const [formLoading, setFormLoading] = useState(true);
  // const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState(null);

  const [categories, setCategories] = useState([]);

  const { blogs, loading, setLoading, categorySlug, setCategorySlug } = useBlogs();

  const baseURL = import.meta.env.VITE_WP_BASE_URL;

  // const baseURL = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    axios
      .get(`${baseURL}/categories`)
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => console.error("Category Error:", err));
  }, []);

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

  // useEffect(() => {
  //   const baseURL = process.env.REACT_APP_BA
  //   setLoading(true);
  //   const url = activeCategory
  //     ? `${baseURL}/posts?categories=${activeCategory}&_embed`
  //     : `${baseURL}/posts?_embed`;

  //   axios
  //     .get(url)
  //     .then((res) => {
  //       setPosts(res.data);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       console.error("Error fetching posts:", err);
  //       setLoading(false);
  //     });
  // }, [activeCategory]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormLoading(true);

    try {
      const response = await fetch(`${apiUrl}/newsletter-subscription`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();
      // console.log(result);

      if (result.status) {
        toast.success("Email Submitted Successfully");
        // toast.success(result.message);
        setEmail("");
      } else {
        const messages = result.message;
        Object.keys(messages).forEach((field) => {
          messages[field].forEach((msg) => {
            toast.error(msg);
          });
        });
      }
    } catch (error) {
      console.log(`Error submitting email:`, error);
      toast.error("Submission failed. Please try again.");
    } finally {
      setFormLoading(false);
    }
  };

  return (
    <>
      <ReactHelmet
        title="Blogs - Texas Web Studios"
        description="Explore the latest blog posts from Texas Web Studios on web design, SEO, mobile apps, and digital marketing. Stay informed with expert insights and trends."
        // keywords=""
        url={`${webUrl}/blog`}
        // url="https://texaswebstudios.com/blog"
      />
      <DefaultLayout>
        <InnerBanner
          bgImage={blogBanner}
          title="Blogs"
          description="Stay updated on the digital trends and insights on how you can bring perfection to your digital business! Explore our blogs below and learn from our experts."
          pageName="Blogs"
        />

        <section className="blogPageSec py-5">
          <div className="container">
            <div className="row ">
              <div className="col-lg-9 order-lg-1 order-2">
                {loading ? (
                  <>
                    <Loader />
                  </>
                ) : (
                  <div className="row ">
                    <h3 className="text-danger fw-bold mb-3 text-uppercase">{categorySlug ? categorySlug.split('-').join(" "):'All Categories'}</h3>
                    {blogs.map((item, index) => (
                      <div className="col-md-6 mb-4" key={index}>
                        <BlogCard
                          image={
                            item._embedded?.["wp:featuredmedia"]?.[0]
                              ?.source_url
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
              <div className="col-lg-3 order-lg-2  order-1 mb-lg-0 mb-4">
                <div className="categoriesList blogDetail-sideBar">
                  <h2>CATEGORY</h2>
                  <ul className="blogCardList">
                    <li className={`list-group-item ${categorySlug == null ? 'active':''}`} onClick={() => setCategorySlug(null)}>
                        {/* <Link to={`/blog/category/${cat.slug}`}> */}
                          All
                        {/* </Link> */}
                      </li>
                    {categories.filter(item=> item.slug !== 'uncategorized').map((cat) => {
                      console.log('categorySlug', categorySlug, 'cat.slug', cat.slug, 'same?', categorySlug == cat.slug);
                      
                      return(
                      <li key={cat.id} className={`list-group-item ${categorySlug == cat.slug ? 'active':''}`} onClick={() => setCategorySlug(cat.slug)}>
                        {/* <Link to={`/blog/category/${cat.slug}`}> */}
                          {cat.name}
                        {/* </Link> */}
                      </li>
                    )})}
                  </ul>
                  <button
                    className="theme-btn icon-btn"
                    onClick={() => setShowModal(true)}
                  >
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
                  <p
                    className="sec-tag-sm"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    Visit Our Blog! Follow The Developments in The Technology &
                    Entrepreneur World
                  </p>
                  <h3
                    className="secTitle"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    Subscribe to Our Newsletter Free and Stay Updated on The
                    Latest Developments!
                  </h3>
                  <div className="news-latterForm">
                    <form onSubmit={handleSubmit}>
                      <input
                        data-aos="fade-up"
                        data-aos-delay="600"
                        type="text"
                        className="form-control mb-4"
                        placeholder="Newsletter"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <button
                        type="submit"
                        className="theme-btn icon-btn"
                        data-aos="fade-up"
                        data-aos-delay="600"
                      >
                        Subscribe Now <IoIosArrowRoundForward />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </DefaultLayout>
    </>
  );
};

export default Blog;
