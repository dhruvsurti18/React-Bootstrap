import React from "react";
import '../components/CSS/custom.css';


function Header() {

  return (
    <header className="lux-header " data-aos="fade-down">
      <div className="container-fluid d-flex justify-content-between align-items-center main-header sticky-top">
        <ul className="nav left-nav">
          <li className="nav-item">
            <a className="nav-link nav-icon">HOME</a>
            </li>
          <li className="nav-item divider">|</li>
          <li className="nav-item">
            <a className="nav-link nav-icon">ABOUT</a>
            </li>
          <li className="nav-item divider">|</li>
          <li className="nav-item">
            <a className="nav-link nav-icon">WATCH</a>
            </li>
          <li className="nav-item divider">|</li>
          <li className="nav-item">
            <a className="nav-link nav-icon">JEWELLERY</a>
            </li>
        </ul>

        <div className="logo">
          <img src="./src/assets/logo.svg" alt="" />
        </div>

        <ul className="nav right-nav">
          <li className="nav-item"><a className="nav-link">PAGES</a></li>
          <li className="nav-item divider">|</li>
          <li className="nav-item"><a className="nav-link">CONTACT</a></li>
          <div className="icons d-flex align-items-center">
            <li className="nav-item ms-3"><i className="bi bi-search nav-icon"></i></li>
            <li className="nav-item ms-3"><i className="bi bi-heart nav-icon"></i></li>
            <li className="nav-item ms-3">
              <i className="bi bi-bag nav-icon"></i>
            </li>
          </div>
        </ul>

      </div>
      <div className="header-bottom text-center">
        <img src="./src/assets/header-bottom.svg" alt=""/>
      </div>
    </header>
  );
}

export default Header;