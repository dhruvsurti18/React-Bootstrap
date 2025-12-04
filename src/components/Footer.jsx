import React from "react";
import "../components/CSS/custom.css";

function Footer  () {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-col footer-brand">
          <img src="./src/assets/logo.svg" alt="logo" className="footer-logo" />

          <p className="address-title">ADDRESS :</p>
          <p className="address-text">966 Munich Expressway<br />Sue 700 Germany, TX 7859</p>

          <div className="payment-icons">
            <img src="./src/assets/payments.png" alt=""/>
          </div>
        </div>

        <div className="footer-col">
          <h4>SHOPPING</h4>
          <a href="#">Gift Card</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Delivery</a>
        </div>

        <div className="footer-col">
          <h4>ABOUT STORE</h4>
          <a href="#">Shopping</a>
          <a href="#">Order Cart</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Help</a>
        </div>

        <div className="footer-col">
          <h4>SUBSCRIBE FOR <span>NEWSLETTER</span></h4>

          <div className="subscribe-box">
            <input type="text" placeholder="Enter your email" />
            <button>→</button>
          </div>

          <h4 className="follow-title">FOLLOW</h4>

          <div className="social-icons">
            <a href="#"><div className="icon fb">
                <i class="bi bi-facebook"></i></div></a>
            <a href="#"><div className="icon insta">
                <i class="bi bi-instagram"></i></div></a>
            <a href="#"><div className="icon twitter">
                <i class="bi bi-twitter"></i></div></a>
            <a href="#"><div className="icon linkedin">
                <i class="bi bi-linkedin"></i></div></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        COPYRIGHT © 2024 <span>LUXRIO.</span> ALL RIGHTS RESERVED BY <span>VECURO.</span>
      </div>

    </footer>
  );
};

export default Footer;
