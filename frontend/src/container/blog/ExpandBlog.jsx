import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ExpandBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [speech, setSpeech] = useState(null);

  useEffect(() => {
    axios
      .get(`http://api.jaykementerprises.com/blogs/${id}`)
      .then((response) => {
        setBlog(response.data);
      })
      .catch((error) => {
        console.error('Error fetching blog:', error);
      });
  }, [id]);

  useEffect(() => {
    setSpeech(new SpeechSynthesisUtterance());
  }, []);

  const togglePlaying = () => {
    setPlaying(!playing);

    if (playing) {
      window.speechSynthesis.cancel();
    } else {
      if (speech && blog && blog.plainText) {
        speech.text = blog.plainText;
        speech.lang = 'en-US';
        window.speechSynthesis.speak(speech);
      }
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center py-12">
      <div className="max-w-3xl w-full p-8 bg-white rounded-xl shadow-lg">
        {blog ? (
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-4xl font-semibold text-gray-900 mb-2">{blog.title}</h1>
                <div className="flex items-center text-sm text-gray-600">
                  <img
                    src={blog.authorImage}
                    className="w-10 h-10 rounded-full mr-3"
                    alt="Author"
                  />
                  <p className="font-medium">{blog.authorName}</p>
                </div>
              </div>
              <button
                onClick={togglePlaying}
                className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full transition-all duration-200"
              >
                {playing ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
                {playing ? 'Stop' : 'Listen Blog'}
              </button>
            </div>
            <div className="border-b-2 border-gray-200 mb-6"></div>
            <div className="prose max-w-none mt-4">
              <div dangerouslySetInnerHTML={{ __html: blog.content }} />
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center">
            <svg
              className="w-12 h-12 text-blue-600 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpandBlog;
