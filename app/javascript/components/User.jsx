import React, { useState } from 'react';
import Blogs from '../pages/Blogs';
import LogInScreen from './LogInScreen';
import LogOut from './LogOut';
import SignUpScreen from './SignUpScreen';

const User = ({ currUser, setCurrUser }) => {
  // const [currUser, setCurrUser] = useState(null);
  const [show, setShow] = useState(true);

  if (currUser)
    return (
      <div>
        Hello {currUser.email}
        <Blogs currUser={currUser} />
        <LogOut setCurrUser={setCurrUser} />
      </div>
    );

  return (
    <div>
      {show ? (
        <LogInScreen setCurrUser={setCurrUser} setShow={setShow} />
      ) : (
        <SignUpScreen setCurrUser={setCurrUser} setShow={setShow} />
      )}
    </div>
  );
};

export default User;
