import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Sidebar from './Sidebar';
import Blogs from '../pages/Blogs';
import AddBlogForm from './Blogs/AddBlogForm';
import LogInScreen from '../pages/LogInScreen';
import SignUpScreen from '../pages/SignUpScreen';
import User from './User';

const App = () => {
  return (
    <>
      <Sidebar />
      <main>
        <User />
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blogs" element={<Blogs />}>
              <Route path="/blogs/:blogId" element={<AddBlogForm />} />
            </Route>

            <Route path="/login" element={<LogInScreen />} />
            <Route path="/signup" element={<SignUpScreen />} />
          </Routes>
        </Router>
      </main>
    </>
  );
};

export default App;
