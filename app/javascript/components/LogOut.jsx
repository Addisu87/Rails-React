import React from 'react';
import client from '../redux/axios';
// How to create a logout using axios?

const LogOut = ({ setCurrUser }) => {
  const logout = async (setCurrUser) => {
    try {
      await client.post('/logout', {
        headers: {
          Authorization:
            'Bearer ' + JSON.parse(localStorage.getItem('currentUser')).token
        }
      });
      localStorage.clear();
      setCurrUser.commit('setUser', {
        token: null,
        userId: null
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
