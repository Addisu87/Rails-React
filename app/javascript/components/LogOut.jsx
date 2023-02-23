import React from 'react';
import client from '../redux/axios';

const LogOut = () => {
  const logout = async () => {
    localStorage.removeItem('user');
    return await client.delete('/signout').then((response) => {
      return response.data;
    });
  };

  return (
    <div>
      <input type="button" value="logout" />
    </div>
  );
};

export default LogOut;
