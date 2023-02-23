import React from 'react';

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('token'));
};

export default getCurrentUser;
