import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import blogData from '../data.json';
import { Navbar } from './Navbar';
import { Link } from 'react-router-dom';
import { GoChevronLeft } from "react-icons/go";
import animationData from '../assets/Animation - 1731582401724.json';
import Lottie from 'react-lottie';

export const SearchResults = () => {
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const location = useLocation();
  
  const searchQuery = new URLSearchParams(location.search).get('query') || '';

  useEffect(() => {
    const results = blogData.posts.filter((post) => {
      const query = searchQuery.toLowerCase();
      return (
        post.title.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query) ||
        post.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    });
    setFilteredBlogs(results);
  }, [searchQuery]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };


  return (
    <div>
      <Navbar/>
      <div className="w-screen px-5 bg-gray-100 flex flex-wrap gap-10 justify-center  mt-5 h-screen">

     
      <div className='p-4 bg-white mt-20 h-fit w-fit '>

      {filteredBlogs.length > 0 ? (<div>
        <h2 className='text-2xl font-semibold mb-4 text-center text-gray-500'>Search Results for "{searchQuery}"</h2>
      <Link to='/' className='flex gap-2 items-center  bg-blue-500 text-white rounded-md w-20 p-1 ml-5 '><GoChevronLeft />
      <button> Back</button>
      </Link>
      </div>):(<div></div>)}
      
     
      <div className="w-full h-full flex flex-wrap gap-4  items-start overflow-y-auto p-6">
      {filteredBlogs.length > 0 ? (
        filteredBlogs.map((Blog) => (
          <Link key={Blog.id} to={`/blog/${Blog.id}`} className="w-[19%] p-1 h-fit my-3 min-w-80 flex flex-col items-center rounded-xl overflow-hidden border border-gray-200 
          transition ease-in-out delay-150    hover:shadow-2xl duration-300 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
          ">
            <div className="bg-white rounded-md">
              <img
                src={Blog.img}
                alt="Blog"
                className="w-full h-28 object-cover rounded-md"
              />
              <div className="mt-2 mb-2 px-3">
                <div className="font-semibold">
                  {Blog.title.length > 25
                    ? Blog.title.substring(0, 22) + "..."
                    : Blog.title}
                </div>
                <div className="text-sm text-gray-600">{Blog.category}</div>
                <div className="text-sm text-gray-600">{Blog.author}</div>
                <div className="text-sm text-gray-600">
                  {new Date(Blog.date).toLocaleDateString()}
                </div>
                <div>
                  {Blog.content.length > 100
                    ? Blog.content.substring(0, 90) + "..."
                    : Blog.content}
                </div>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <div className='w-[90vw] h-screen bg-white flex flex-col gap-10 items-center'>
        <Lottie 
	    options={defaultOptions}
        width={400}
        height={300}
      />
      <p className='text-center text-gray-500 text-2xl font-bold'>Try searching something else</p>
      <Link to='/' className='flex gap-2 items-center  bg-blue-500 text-white rounded-md w-20 p-1 ml-5 '><GoChevronLeft />
      <button> Back</button>
      </Link>
        </div>
      
      
      )}
      </div>
    </div>
    </div>
    </div>
  
  );
};
