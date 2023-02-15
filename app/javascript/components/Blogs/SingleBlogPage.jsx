import React from 'react';
import { useSelector } from 'react-redux';
import { selectBlogById } from '../../redux/blogSlice';

const SingleBlogPage = ({ match }) => {
  const { blogId } = match.params;

  const blog = useSelector((state) => selectBlogById(state, blogId));

  return <div>SingleBlogPage</div>;
};

export default SingleBlogPage;
