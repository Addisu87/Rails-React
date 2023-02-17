import React from 'react';
import BlogsList from '../components/Blogs/BlogsList';
import Blogs from './Blogs';

const Home = () => {
  return (
    <div className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
        <BlogsList />
    </div>
  );
};

export default Home;
