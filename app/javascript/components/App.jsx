import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Sidebar from './Sidebar';
import Blogs from '../pages/Blogs';
import AddBlogForm from './Blogs/AddBlogForm';
import EditBlogForm from './Blogs/EditBlogForm';

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
            <Route path="/blogs" element={<Blogs />}>
              <Route path="/blogs/:blogId" element={<AddBlogForm />} />
              {/* <Route path="/editBlog/:blogId" element={<EditBlogForm />} /> */}
            </Route>

            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </Router>
      </main>
    </>
  );
};

export default App;
