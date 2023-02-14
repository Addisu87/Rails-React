import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Sidebar from './Sidebar';

const App = () => {
  return (
    <>
      <Sidebar />
      <main>
        <Router>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/sign_in" exact element={<SignIn />} />
            <Route path="/sign_up" exact element={<SignUp />} />
          </Routes>
        </Router>
      </main>
    </>
  );
};

export default App;
