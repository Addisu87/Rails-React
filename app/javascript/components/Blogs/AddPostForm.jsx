import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const AddBlogForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('');
  const [addRequestStatus, setAddRequestStatus] = useState('idle');

  // omit useSelectors and change handlers

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

  return <div>AddBlogForm</div>;
};

export default AddBlogForm;
