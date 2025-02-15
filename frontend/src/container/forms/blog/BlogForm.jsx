import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Input, Button, Typography } from "@material-tailwind/react";
import JoditEditor from "jodit-react";
import { useNavigate } from "react-router-dom";
import bloginfo from "../../../assets/vectors/BlogForm Info.svg";

const BlogForm = ({ placeholder }) => {
  const navigate = useNavigate();
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [authorName, setAuthorName] = useState("");
  const [title, setTitle] = useState("");

  const handleSubmit = () => {
    const data = {
      title: title,
      authorName: authorName,
      image: file,
      blogContent: content,
      coverImage: coverImage,
    };
console.log(data)
    axios
      .post("http://localhost:5000/blogs", data)
      .then((res) => {
        console.log(res);
        // Reset state variables to empty strings after successful submission
        setTitle("");
        setAuthorName("");
        setFile("");
        setCoverImage("");
        setContent("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLogout = () => {
    // Clear authentication state
    localStorage.removeItem("auth");
    // Redirect to login page
    navigate("/login");
  };

  useEffect(() => {
    if (!localStorage.getItem("auth")) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="bg-brown-50 min-h-screen md:grid md:grid-cols-3 md:gap-4 ">
      <div className="md:col-span-1 border-r-2 border-gray-400 p-4 md:flex justify-center items-center hidden">
        <img src={bloginfo} alt=""/>
      </div>
      <div className="flex justify-center items-center col-span-2">
        <div className="max-w-4xl w-full p-4">
          <Button 
            className="m-4 bg-red-700" 
            onClick={handleLogout}
          >
            Logout
          </Button>
          {/* Logout Button */}
          <Typography
            variant="h4"
            color="blue-gray"
            className="text-center underline mb-6"
          >
            Blog Form
          </Typography>
          <form className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Typography variant="h6" color="blue-gray" className="mb-2">
                  Title:
                </Typography>
                <Input
                  size="lg"
                  placeholder="Title"
                  className="w-full"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div>
                <Typography variant="h6" color="blue-gray" className="mb-2">
                  Author Image URL:
                </Typography>
                <Input
                  size="lg"
                  placeholder="Image Url"
                  className="w-full"
                  onChange={(e) => setFile(e.target.value)}
                />
              </div>
              <div>
                <Typography variant="h6" color="blue-gray" className="mb-2">
                  Cover Image URL:
                </Typography>
                <Input
                  size="lg"
                  placeholder="Image Url"
                  className="w-full"
                  onChange={(e) => setCoverImage(e.target.value)}
                />
              </div>
              <div>
                <Typography variant="h6" color="blue-gray" className="mb-2">
                  Author Name:
                </Typography>
                <Input
                  size="lg"
                  placeholder="Your Name"
                  className="w-full"
                  onChange={(e) => setAuthorName(e.target.value)}
                />
              </div>
              <div className="col-span-2">
                <Typography variant="h6" color="blue-gray" className="mb-2">
                  Blog Content:
                </Typography>
                <JoditEditor
                  ref={editor}
                  value={content}
                  tabIndex={1}
                  onBlur={(newContent) => setContent(newContent)}
                  className="w-full h-[25rem]" // Adjusted height to make it larger
                />
              </div>
            </div>
            <Button
              className="mt-6 bg-blue-400"
              onClick={handleSubmit}
              fullWidth
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogForm;
