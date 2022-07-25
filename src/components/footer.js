import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="logo-section">
        <div className="footer-logo">
          <h3>Interactive Website</h3>
        </div>

        <p>
          PwC refers to the PwC network and/or one <br />
          or more of its member firms, each of which
          <br />
          is a separate legal entity.
        </p>
      </div>
      <div className="navigation">
        <h4 className="linked">Links</h4>
        <nav>
          <a href="../../index.html">Home</a>
          <a href="about-us.html">About </a>
          <a href="./contact-us.html">Contact</a>
        </nav>
      </div>
      <div className="navigation">
        <nav>
          <a href="./gallery.html">Gallery</a>
          <a href="./application/application.html">Application</a>
          <a href="./students-data.html">Students Data</a>
        </nav>
      </div>
      <div className="contact">
        <h4>Contact Information</h4>
        <p className="emailstyle">
          <b>Email:</b> ng_pwc.enquiry@pwc.com
        </p>
        <p>
          <b>Phone Number:</b> 08084571513
        </p>
        <p>
          <b>Address:</b> 5B Water Corporation Road, Victoria Island
        </p>
      </div>
      <div className="socials">
        <h4>Social Media Links</h4>
        <ul>
          <li>
            <a href="#">Twitter</a>
          </li>
          <li>
            <a href="#">LinkedIn</a>
          </li>
          <li>
            <a href="#">Instagram</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
