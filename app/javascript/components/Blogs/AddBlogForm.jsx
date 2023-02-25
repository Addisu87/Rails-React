import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

const AddBlogForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('');
  const [addRequestStatus, setAddRequestStatus] = useState('idle');

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

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

  const usersOptions = user.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <section className="container relative flex-col md:text-left md:flex-row  max-w-3xl px-10 justify-evenly mx-auto items-center">
      <div className="mb-12 md:col-span-2 space-y-8">
        <div className="px-4 sm:px-0">
          <h3 className="text-xl text-center font-medium leading-6 text-gray-900">
            Add a New Blog
          </h3>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="overflow-hidden drop-shadow-2xl sm:rounded-md">
            <div className="bg-white px-4 py-5 sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6">
                  <label htmlFor="blogTitle">Blog Title:</label>
                  <input
                    type="blogTitle"
                    name="blogTitle"
                    {...register('blogTitle', {
                      required: true,
                      maxLength: 20
                    })}
                    placeholder="blogTitle"
                    id="blogTitle"
                    autoComplete="blogTitle"
                    value={title}
                    onChange={onTitleChanged}
                    className="mt-1 block w-full border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-6">
                  <label htmlFor="blogAuthor">Author:</label>
                  <select
                    id="blogAuthor"
                    value={userId}
                    onChange={onAuthorChanged}
                    {...register('blogAuthor')}
                    className="mt-1 block w-full border-gray-300 shadow-sm
                      focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  >
                    <option value=""></option>
                    {usersOptions}
                  </select>
                </div>

                <div className="col-span-6">
                  <label htmlFor="blogContent">Content:</label>
                  <textarea
                    id="blogContent"
                    name="blogContent"
                    value={content}
                    onChange={onContentChanged}
                    {...register('blogContent', { required: true })}
                    placeholder="blogContent"
                    rows={4}
                    className="mt-1 block w-full border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 text-center md:text-left sm:px-6">
              <button
                type="submit"
                onClick={onSaveBlogClicked}
                disabled={!canSave}
                className="inline-flex justify-center rounded-2xl border border-transparent bg-zinc-900 px-16 py-3 md:py-2 md:px-8 text-base font-medium text-white shadow-sm hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2"
              >
                Save blog
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddBlogForm;
