import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
            {/* <Route exact path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/reports" element={<Reports />} /> */}
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
