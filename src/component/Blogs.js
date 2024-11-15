import React, { useEffect, useState } from 'react';
import BlogList from './BlogList';
import data from "../data.json";

const Blogs = () => {
  const [loading, setLoading] = useState(false);
  const [blogList, setBlogList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [filteredBlogList, setFilteredBlogList] = useState([]);

  const addCategory = (category) => {
    if (!selectedCategories.includes(category)) {

      setSelectedCategories(category);
    }
  };

  const removeCategory = (category) => {
    if (selectedCategories.includes(category)) {

      setSelectedCategories([]);
    }
  };



  useEffect(() => {
    if (selectedCategories.length === 0) {
      setFilteredBlogList(blogList);
  
    } else {
      setFilteredBlogList(
        blogList.filter((item) => selectedCategories.includes(item.category))
      );
    }
  }, [selectedCategories, blogList]);

  const getBlogs = () => {
    setLoading(true);

   
        const posts = data.posts;
        setBlogList(posts);
        setFilteredBlogList(posts);


        const uniqueCategories = Array.from(new Set(posts.map((post) => post.category)));
        setCategories(uniqueCategories);
      
   
        setLoading(false);
   
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
   
  <div className="w-screen h-screen px-5 bg-gray-100 flex justify-center items-center mt-10">
      <div className="w-full h-[90%] rounded-md bg-white mt-20 -ml-4">
        <div className="relative w-full h-[15%] flex items-center overflow-x-auto p-6">
        
          {categories.map((category) => (
            <div
              key={category}
              onClick={() => {
                if (selectedCategories.includes(category)) {
                  removeCategory(category);
                } else {
                  addCategory(category);
                }
              }}
              className={`w-fit min-w-fit h-8 mx-2 px-5 py-2 flex flex-row justify-center hover:border-2 hover:border-purple-600  transition ease-in-out delay-50  items-center text-sm border  rounded-3xl cursor-pointer transition-all duration-300 ${
                selectedCategories.includes(category)
                  ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white'
                  : 'border-gray-500 bg-white text-gray-900'
              }`}
            >
              {category}
            </div>
          ))}
          {/* <div
            onClick={() => resetCategory()}
            className={`${
              selectedCategories.length > 0 ? 'opacity-100' : 'opacity-0 pointer-events-none'
            } sticky right-0 w-fit h-full px-5 flex justify-center items-center text-blue-500 bg-white backdrop-blur-lg cursor-pointer hover:text-blue-700 transition-all duration-300`}
          >
            View All
          </div> */}
        </div>
        <BlogList filteredBlogList={filteredBlogList} loading={loading} />
      </div>
    </div>
  
    
  );
};

export default Blogs;
