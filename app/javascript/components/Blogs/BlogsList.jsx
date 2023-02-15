import React, { useEffect } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogs, selectAllBlogs } from '../../redux/blogSlice';
import BlogExcerpt from './BlogExcerpt';

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

  if (blogStatus === 'loading') {
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
  } else if (blogStatus === 'succeeded') {
    // Sort blogs in reverse chronological order by datetime string
    const orderedBlogs = blogs
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    content = orderedBlogs.map((blog) => (
      <BlogExcerpt key={blog.id} blog={blog} />
    ));
  } else if (blogStatus === 'failed') {
    content = <div>{error}</div>;
  }

  return (
    <section className="blogs-list">
      <h2>Blogs</h2>
      {content}
    </section>
  );
};

export default BlogsList;
