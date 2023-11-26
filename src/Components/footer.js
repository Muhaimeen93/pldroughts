import React from "react";
import "./footer.css";
import logo from "../Images/logo.png";

const Footer = () => {
  const email = "pldroughts@gmail.com";

  return (
    <footer className="footer-container">
      <div className="copyright">©PLDroughts 2023</div>
      <div className="email">{email}</div>
      <img src={logo} alt="Logo" className="footer-logo" />
    </footer>
  );
};

export default Footer;
