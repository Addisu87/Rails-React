import React from 'react';
import { useSelector } from 'react-redux';
import { selectBlogById } from '../../redux/blogSlice';

const EditBlogForm = ({ match }) => {
  const { blogId } = match.params;

  const blog = useSelector((state) => selectBlogById(state, blogId));

  return <div>EditBlogForm</div>;
};

export default EditBlogForm;
