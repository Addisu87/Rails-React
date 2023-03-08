import React from 'react';
import client from '../redux/axios';

const LogOut = ({ setCurrUser }) => {
  const logout = async (setCurrUser) => {
    await client
      .delete('/logout')
      .then((response) => {
        localStorage.getItem('token');
        return response.data;
      })
      .catch((error) => {
        console.log('error', error);
      });
    localStorage.removeItem('token');
    setCurrUser(null);
  };

  const handleClick = (e) => {
    e.preventDefault();
    logout(setCurrUser);
  };

  return (
    <div>
      <input type="button" value="logout" onClick={handleClick} />
    </div>
  );
};

export default LogOut;
