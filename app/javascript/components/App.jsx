import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Reports from '../pages/Reports';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import EditBlogForm from './Blogs/EditBlogForm';
import SingleBlogPage from './Blogs/SingleBlogPage';
import Sidebar from './Sidebar';

const App = () => {
  return (
    <>
      <Sidebar />
      <main>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/blogs/:blogId" element={<SingleBlogPage />} />
            <Route path="/editBlog/:blogId" element={<EditBlogForm />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </Router>
      </main>
    </>
  );
};

export default App;
