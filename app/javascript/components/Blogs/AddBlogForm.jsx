import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const AddBlogForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('');
  const [addRequestStatus, setAddRequestStatus] = useState('idle');

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  const canSave =
    [title, content, userId].every(Boolean) && addRequestStatus === 'idle';

  const onSaveBlogClicked = async () => {
    if (canSave) {
      try {
        setAddRequestStatus('pending');
        await dispatch(addNewBlog({ title, content, user: userId })).unwrap();
        setTitle('');
        setContent('');
        setUserId('');
      } catch (err) {
        console.error('Failed to save the blog: ', err);
      } finally {
        setAddRequestStatus('idle');
      }
    }
  };

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
      <h2>Add a New Blog</h2>
      <form>
        <label htmlFor="blogTitle">Blog Title:</label>
        <input
          type="text"
          id="blogTitle"
          name="blogTitle"
          placeholder="What's on your mind?"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="blogAuthor">Author:</label>
        <select id="blogAuthor" value={userId} onChange={onAuthorChanged}>
          <option value=""></option>
          {usersOptions}
        </select>
        <label htmlFor="blogContent">Content:</label>
        <textarea
          id="blogContent"
          name="blogContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button" onClick={onSaveBlogClicked} disabled={!canSave}>
          Save blog
        </button>
      </form>
    </section>
  );
};

export default AddBlogForm;
