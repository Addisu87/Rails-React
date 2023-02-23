import React, { useState } from 'react';
import LogInScreen from '../pages/LogInScreen';
import LogOut from '../pages/LogOut';
import SignUpScreen from '../pages/SignUpScreen';

const User = ({ currUser, setCurrUser }) => {
  const [show, setShow] = useState(true);

  if (currUser)
    return (
      <div>
        Hello {currUser.email} <LogOut setCurrUser={setCurrUser} />
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
