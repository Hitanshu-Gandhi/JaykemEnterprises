import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../../components/navbar/Header";
import Header2 from "../../components/navbar/Header2";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.jaykementerprises.com/blogs")
      .then((res) => {
        setBlogs(res.data.blogs);
        console.log(res.data.blogs);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <Header2 />
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-semibold text-center text-gray-900 mb-16">
          Latest Blogs
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogs.map((blog, index) => (
            <Link key={blog._id} to={`/blogs/${blog._id}`}>
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-105 overflow-hidden">
                <div className="relative">
                  <img
                    className="w-full h-[220px] object-cover rounded-t-xl transition-all duration-300 hover:scale-105"
                    src={blog.coverImage}
                    alt="Blog Cover"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20 transition-all duration-300 hover:opacity-0"></div>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    {blog.title}
                  </h2>
                  <p className="text-gray-700 text-base mb-6">
                    {blog.plainText.substring(0, 120)}...
                  </p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <div className="flex items-center">
                      <img
                        src={blog.authorImage}
                        className="w-8 h-8 rounded-full"
                        alt="Author"
                      />
                      <span className="ml-2">
                        {new Date(blog.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="text-center py-1 px-3 bg-blue-500 text-white text-sm rounded-full">
                      <span>{new Date(blog.createdAt).getDate()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
