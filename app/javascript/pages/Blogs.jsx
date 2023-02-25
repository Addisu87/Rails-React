import React, { useEffect, useState } from 'react';
import AddBlogForm from '../components/Blogs/AddBlogForm';
import client from '../redux/axios';

const Blogs = ({ currUser }) => {
  const [blogs, setBlogs] = useState(null);

  const getBlogs = async () => {
    await client
      .get('/blogs', {
        title,
        content
      })
      .then((response) => {
        if (response.data.id) {
          localStorage.getItem('token', JSON.stringify(response.data));
        }
        setBlogs(response.data);
      })
      .catch((error) => {
        console.log('error', error);
        setBlogs(null);
      });
  };

  useEffect(() => {
    if (currUser) {
      getBlogs();
    }
  }, [currUser]);

  return (
    <article className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
      {blogs && <AddBlogForm />}
    </article>
  );
};

export default Blogs;
