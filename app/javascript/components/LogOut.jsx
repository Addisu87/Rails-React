import React from 'react';
import client from '../redux/axios';

const LogOut = (setCurrUser) => {
  const logout = async () => {
    localStorage.removeItem('token');
    setCurrUser(null);
    return await client
      .delete('/logout')
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log('error', error);
      });
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
