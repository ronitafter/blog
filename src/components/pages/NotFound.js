import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="Missing">
      <h1>Not Found</h1>
      <p>Page not found...</p>
      <Link to="/">Go to Home Page</Link>
    </main>
  );
};

export default NotFound;
