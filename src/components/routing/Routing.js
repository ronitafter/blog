import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../layout/Home";
import NewPost from "../pages/NewPost";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import PostPage from "../pages/PostPage";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="header" element={<Header />} />
      <Route path="footer" element={<Footer />} />
      <Route path="about" element={<About />} />
      <Route path="notfound" element={<NotFound />} />
      <Route path="post" element={<NewPost />} />
      <Route path="post/:id" element={<PostPage />} />
    </Routes>
  );
}

export default Routing;
