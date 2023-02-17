import React from 'react';
import { Link } from 'react-router-dom';
import BlogAuthor from './BlogAuthor';
import ReactionButtons from './ReactionButtons';
import { TimeAgo } from './TimeAgo';

const BlogExcerpt = ({ blog }) => {
  return (
    <article className="px-2 py-2 border border-slate-700 rounded-md pt-2 ">
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
