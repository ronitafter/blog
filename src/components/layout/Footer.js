import React from "react";

const Footer = () => {
  const today = new Date();
  return (
    <footer className="footer Footer">
      <p>CopyRight &copy; {today.getFullYear()}</p>
      <h1>Footer</h1>
    </footer>
  );
};

export default Footer;
