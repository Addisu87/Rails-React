import React from 'react';
import AddBlogForm from '../components/Blogs/AddBlogForm';
import BlogsList from '../components/Blogs/BlogsList';

const Blogs = () => {
  return (
    <div>
      <AddBlogForm />
      <BlogsList />
    </div>
  );
};

export default Blogs;
