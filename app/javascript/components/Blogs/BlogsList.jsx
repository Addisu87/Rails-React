import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogs, selectAllBlogs } from '../../redux/blogSlice';

const BlogsList = () => {
  const dispatch = useDispatch();
  const blogs = useSelector(selectAllBlogs);

  const blogStatus = useSelector((state) => state.blogs.status);

  useEffect(() => {
    if (blogStatus === 'idle') {
      dispatch(fetchBlogs());
    }
  }, [blogStatus, dispatch]);

  return <div>BlogsList</div>;
};

export default BlogsList;
