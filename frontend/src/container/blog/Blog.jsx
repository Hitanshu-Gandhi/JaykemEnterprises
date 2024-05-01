import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../../components/navbar/Header";
import Header2 from "../../components/navbar/Header2";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/blogs")
      .then((res) => {
        setBlogs(res.data.blogs);
        console.log(res.data.blogs)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Header />      
      <Header2 />
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {blogs.map((blog, index) => (
            <Link key={blog._id} to={`/blogs/${blog._id}`}>
              <div className={`rounded-lg overflow-hidden shadow-lg transition transform hover:scale-105 duration-300 ease-in-out delay-${index}`}>
                <img className="w-full h-[25.166rem]" src={blog.coverImage} alt="Blog Cover" /> 
                <div className="p-4">
                  <div className="font-bold text-xl mb-2">{blog.title}</div>
                  <p className="text-gray-700 text-base">
                    {blog.plainText.substring(0, 100)}...
                  </p>
                </div>
                <div className="bg-gray-200 p-2 flex items-center justify-between">
                  <div className="flex items-center">
                    <img src={blog.authorImage} className="w-8 h-8 rounded-full" alt="Author" />
                    <p className="text-sm text-gray-600 ml-2">{new Date(blog.createdAt).toLocaleDateString()}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center text-white text-sm">
                    <span>{new Date(blog.createdAt).getDate()}</span>
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
