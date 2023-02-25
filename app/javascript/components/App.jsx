import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Sidebar from './Sidebar';
import Blogs from '../pages/Blogs';
import AddBlogForm from './Blogs/AddBlogForm';
import LogInScreen from './LogInScreen';
import SignUpScreen from './SignUpScreen';
import User from './User';

const App = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // 👇️ navigate programmatically
    navigate('/blogs', { replace: true });
  };
  return (
    <>
      <Sidebar />
      <main>
        <User />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blogs />}>
            <Route path="/blogs/:blogId" element={<AddBlogForm />} />
          </Route>

          <Route
            path="/login"
            onClick={handleClick}
            element={<LogInScreen />}
          />
          <Route path="/signup" element={<SignUpScreen />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
