import React from "react";
import { pageLinks, socialLinks } from "../data";

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map((pageLink) => (
          <li key={pageLink.id}>
            <a href={pageLink.href} className="nav-link">
              {" "}
              {pageLink.text}{" "}
            </a>
          </li>
        ))}
      </ul>
      <ul className="footer-icons">
        {socialLinks.map((socialLink) => (
          <li key={socialLink.id}>
            <a
              href={socialLink.href}
              target="_blank"
              rel="noreferrer"
              className="nav-icon"
            >
              <i className={socialLink.icon}></i>
            </a>
          </li>
        ))}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
