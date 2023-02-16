import React from 'react';
import { Link } from 'react-router-dom';
import BlogAuthor from './BlogAuthor';
import ReactionButtons from './ReactionButtons';
import { TimeAgo } from './TimeAgo';

const BlogExcerpt = ({ blog }) => {
  return (
    <article className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
      <h3>{blog.title}</h3>
      <div>
        <BlogAuthor userId={blog.user} />
        <TimeAgo timestamp={blog.date} />
      </div>
      <p className="blog-content">{blog.content.substring(0, 100)}</p>

      <ReactionButtons blog={blog} />
      <Link to={`/blogs/${blog.id}`} className="button muted-button">
        View blog
      </Link>
    </article>
  );
};

export default BlogExcerpt;
