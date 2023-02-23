import React from 'react';
import { useDispatch } from 'react-redux';
import { reactionAdded } from '../../redux/slices/blogsSlice';

const reactionEmoji = {
  thumbsUp: '👍',
  hooray: '🎉',
  heart: '❤️',
  rocket: '🚀',
  eyes: '👀'
};

const ReactionButtons = ({ blog }) => {
  const dispatch = useDispatch();

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        className="muted-button reaction-button"
        onClick={() =>
          dispatch(reactionAdded({ blogId: blog.id, reaction: name }))
        }
      >
        {emoji} {blog.reactions[name]}
      </button>
    );
  });

  return (
    <div className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
      {reactionButtons}
    </div>
  );
};

export default ReactionButtons;
