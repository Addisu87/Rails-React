import React from 'react';
import AddBlogForm from '../components/Blogs/AddBlogForm';
import BlogsList from '../components/Blogs/BlogsList';

const Blogs = () => {
  return (
    <article className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
      <AddBlogForm />
      <BlogsList />
    </article>
  );
};

export default Blogs;
