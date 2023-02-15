import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
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
            <Route path="/" exact element={<Home />} />
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
