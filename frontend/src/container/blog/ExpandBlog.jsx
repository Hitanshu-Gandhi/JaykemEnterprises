import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ExpandBlog = () => {
  const { id } = useParams(); 
  const [blog, setBlog] = useState(null); 
  const [playing, setPlaying] = useState(false); 
  const [speech, setSpeech] = useState(null); 

  useEffect(() => {
    axios.get(`http://localhost:5000/blogs/${id}`)
      .then(response => {
        setBlog(response.data); 
      })
      .catch(error => {
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
    <div className="bg-gray-100 custombg min-h-screen flex justify-center items-center">
      <div className="max-w-3xl w-full p-8 bg-white rounded shadow-lg">
        {blog ? (
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-3xl font-bold mb-2">{blog.title}</h2>
                <div className="flex items-center text-sm text-gray-500">
                  <img src={blog.authorImage} className="w-8 h-8 rounded-full mr-2" alt="Author" />
                  <p>{blog.authorName}</p>
                </div>
              </div>
              <button 
                onClick={togglePlaying} 
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center"
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
            <div className="border-b-2 border-gray-200 mb-4"></div> {/* Underline */}
            <div className="prose max-w-none mt-4" dangerouslySetInnerHTML={{ __html: blog.content }} />
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default ExpandBlog;
