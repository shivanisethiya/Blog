import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdClear } from "react-icons/md";

import Image from '../assets/logo.png';

export const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
      setSearchQuery(''); // Clear the input after searching
    }
  };

  return (
    <div className='flex flex-wrap items-center p-5 mt-4 bg-white w-full gap-10 fixed -top-4 left-0 justify-between'>
    <div className='flex gap-10 items-center '>
      <Link to='/'><img src={Image} alt='logo' width={100} /></Link>
      <Link to='/' className='text-lg font-semibold'>Home</Link>
      <Link to='/about' className='text-lg font-semibold'>About</Link>
  </div>
      <div className='items-center relative'>
        <input
          type='text'
          placeholder='Search...'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleSearch}
          className='rounded-lg px-4 py-2 w-[90vw] max-w-xs border-2 '
        />
        {searchQuery.length>0 ? (<MdClear onClick={() => setSearchQuery('') } className='absolute top-4  left-40'/>):(<></>)}
        
      </div>
    </div>
  );
};


