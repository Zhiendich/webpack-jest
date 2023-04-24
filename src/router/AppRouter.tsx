import React from "react";
import { Route, Routes } from "react-router-dom";
import Users from "../component/Users";
import About from "../pages/About";
import Main from "../pages/Main";
import UserPage from "../pages/UserPage";
import ErrorPage from "../pages/ErrorPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="/users" element={<Users />} />
      <Route path="/users/:id" element={<UserPage />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRouter;
