import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import HomeContent from "./pages/HomeContent";
import AddBlog from "./pages/AddBlog";
import BlogDetail from "./pages/BlogDetail";

const Layout = ({ children }) => {
  const location = useLocation();
  const isBlogDetail = location.pathname.startsWith("/blog/");

  return (
    <div className="flex flex-col h-screen">
      {!isBlogDetail && <Header />}
      <main className="flex-1 p-4">{children}</main>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Wrap with Layout only for Home and AddBlog */}
        <Route
          path="/"
          element={
            <Layout>
              <HomeContent />
            </Layout>
          }
        />
        <Route
          path="/add-blog"
          element={
            <Layout>
              <AddBlog />
            </Layout>
          }
        />
        {/* BlogDetail should NOT be inside Layout */}
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
