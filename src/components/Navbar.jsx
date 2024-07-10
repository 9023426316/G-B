import React from "react";
import logo1 from "./Images/instagram-logo.png";
import logo2 from "./Images/facebook-logo.png";
import logo3 from "./Images/in-logo.png";
import logo4 from "./Images/company-logo.png";

export default function Navbar() {
  return (
    <div>
      <div className="info-div">
        <span className="material-symbols-outlined" id="info-contact-span">
          phone_in_talk
        </span>{" "}
        <p className="info-contact">+91 9510508939</p>
        <span className="material-symbols-outlined" id="info-email-span">
          mail
        </span>{" "}
        <p className="info-email">gojariyabrotherexport@gmail.com</p>
        <img src={logo1} alt="" className="info-instagram" />
        <img src={logo2} alt="" className="info-facebook" />
        <img src={logo3} alt="" className="info-in" />
      </div>

    <div >
      <nav className="navbar navbar-expand-lg bg-body-tertiary main-nav" >
      <img src={logo4} alt="" className="company-logo"/>
        <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" id="nav-btn1">
      <span class="navbar-toggler-icon"></span>
    </button>
          <div className="collapse navbar-collapse nav-div" id="navbarNav">
            <ul className="navbar-nav">
            <a className="nav-link" href="#">
              <li className="nav-item">
                  Home
              </li>
              </a>
              <a className="nav-link" href="#">
              <li className="nav-item">
                  About Us
              </li>
              </a>
              <a className="nav-link" href="#">
              <li className="nav-item">
                  Products
              </li>
              </a>
              <a className="nav-link" href="#">
              <button className="nav-btn">Contact Us</button>
              </a>
            </ul>
          </div>
        </div>
      </nav>
</div>

    
    </div>
  );
}
