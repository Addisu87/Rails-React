import React from 'react';
import client from '../redux/axios';

const LogOut = ({ setCurrUser }) => {
  const logout = async () => {
    const response = await client
      .delete('/logout', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token')
        }
      })
      .then((response) => {
        const data = response.json();
        if (!response.ok) throw data.error;
        localStorage.removeItem('token');
        setCurrUser(null);
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
