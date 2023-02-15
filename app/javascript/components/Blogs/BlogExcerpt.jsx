import React from 'react';
import ReactionButtons from './ReactionButtons';
import { TimeAgo } from './TimeAgo';

const BlogExcerpt = ({ blog }) => {
  return (
    <article className="blog-excerpt">
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
