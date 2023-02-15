import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogs, selectAllBlogs } from '../../redux/blogSlice';

const BlogsList = () => {
  const dispatch = useDispatch();
  const blogs = useSelector(selectAllBlogs);

  const blogStatus = useSelector((state) => state.blogs.status);
  const error = useSelector((state) => state.blogs.error);

  useEffect(() => {
    if (blogStatus === 'idle') {
      dispatch(fetchBlogs());
    }
  }, [blogStatus, dispatch]);

  let content;

  if (postStatus === 'loading') {
    content = (
      <RotatingLines
        text="Loading..."
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    );
  }

  return <div>BlogsList</div>;
};

export default BlogsList;
