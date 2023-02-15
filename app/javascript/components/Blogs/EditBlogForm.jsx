import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectBlogById } from '../../redux/blogsSlice';

const EditBlogForm = ({ match }) => {
  const { blogId } = match.params;

  const blog = useSelector((state) => selectBlogById(state, blogId));

  const [title, setTitle] = useState(blog.title);
  const [content, setContent] = useState(blog.content);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  const onSaveBlogClicked = () => {
    if (title && content) {
      dispatch(blogUpdated({ id: blogId, title, content }));
      navigate.push(`/blogs/${blogId}`);
    }
  };

  return (
    <section>
      <h2>Edit blog</h2>
      <form>
        <label htmlFor="blogTitle">blog Title:</label>
        <input
          type="text"
          id="blogTitle"
          name="blogTitle"
          placeholder="What's on your mind?"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="blogContent">Content:</label>
        <textarea
          id="blogContent"
          name="blogContent"
          value={content}
          onChange={onContentChanged}
        />
      </form>
      <button type="button" onClick={onSaveBlogClicked}>
        Save blog
      </button>
    </section>
  );
};

export default EditBlogForm;
