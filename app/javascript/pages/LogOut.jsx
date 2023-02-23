import React from 'react';
import client from '../redux/axios';

const LogOut = ({ setCurrUser }) => {
  const logout = async () => {
    try {
      const response = await client
        .delete('/logout', {
          headers: {
            'Content-Type': 'application/json',
            authorization: localStorage.getItem('token')
          }
        })
        .then((res) => {
          const data = res.data;
          if (!response.ok) throw data.error;
          localStorage.removeItem('token');
          setCurrUser(null);
        });
    } catch (error) {
      console.log('error', error);
    }
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
