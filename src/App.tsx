import React from "react";
import { Link } from "react-router-dom";
import AppRouter from "./router/AppRouter";
const App = () => {
  return (
    <div>
      <Link data-testid="main-link" to={"/"}>
        Main
      </Link>
      <Link data-testid="about-link" to={"/about"}>
        About
      </Link>
      <Link data-testid="users-link" to={"/users"}>
        Users
      </Link>
      <AppRouter />
    </div>
  );
};

export default App;
