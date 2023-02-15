import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllBlogs } from '../../redux/blogSlice';

const BlogsList = () => {
  const blogs = useSelector(selectAllBlogs);
  return <div>BlogsList</div>;
};

export default BlogsList;
