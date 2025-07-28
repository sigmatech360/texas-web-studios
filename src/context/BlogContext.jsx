import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const BlogContext = createContext();

export const useBlogs = () => useContext(BlogContext);

export const BlogProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const [categorySlug, setCategorySlug] = useState(null); // This will store the category slug

  const wpBaseUrl = import.meta.env.VITE_WP_BASE_URL;

  // UseEffect to fetch data based on categorySlug
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);

        if (categorySlug) {
          // If categorySlug is passed, fetch blogs for the specific category
          const categoryRes = await axios.get(
            `${wpBaseUrl}/categories?slug=${categorySlug}`
          );
          const category = categoryRes.data[0];

          if (!category) {
            console.warn("Category not found");
            setBlogs([]);
            return;
          }

          // Fetch posts for this category
          const postsRes = await axios.get(
            `${wpBaseUrl}/posts?_embed&categories=${category.id}`
          );
          setBlogs(postsRes.data);
        } else {
          // If no categorySlug is passed, fetch all blogs
          const response = await axios.get(`${wpBaseUrl}/posts?_embed`);
          setBlogs(response.data);
        }
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [categorySlug, wpBaseUrl]);

  return (
    <BlogContext.Provider
      value={{ blogs, loading, setBlogs, setLoading, setCategorySlug }}
    >
      {children}
    </BlogContext.Provider>
  );
};
