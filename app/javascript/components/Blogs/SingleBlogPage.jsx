import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectBlogById } from '../../redux/blogsSlice';
import BlogAuthor from './BlogAuthor';
import ReactionButtons from './ReactionButtons';
import { TimeAgo } from './TimeAgo';

const SingleBlogPage = ({ match }) => {
  const { blogId } = match.params;

  const blog = useSelector((state) => selectBlogById(state, blogId));

  if (!blog) {
    return (
      <section>
        <h2>blog not found!</h2>
      </section>
    );
  }

  return (
    <section>
      <article className="blog">
        <h2>{blog.title}</h2>
        <div>
          <BlogAuthor userId={blog.user} />
          <TimeAgo timestamp={blog.date} />
        </div>
        <p className="blog-content">{blog.content}</p>
        <ReactionButtons blog={blog} />
        <Link to={`/editblog/${blog.id}`} className="button">
          Edit blog
        </Link>
      </article>
    </section>
  );
};

export default SingleBlogPage;
