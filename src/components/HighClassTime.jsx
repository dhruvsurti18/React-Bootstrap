import React from "react";
import '../components/CSS/custom.css';

function HighClassTime(){
    return (
    <section className="highclass-section d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-md-5" data-aos="fade-up">
            <p className="process-text">THE PROCESS</p>
            <h1 className="high-title">
              HIGH CLASS <br /> <span>TIME</span>
            </h1>
          </div>

          <div className="col-md-3 text-center" data-aos="fade-down">
            <img
              src="./src/assets/process-img-1-1.png"
              alt="watch"
              className="watch-img"
            />
          </div>

          <div className="col-md-4" data-aos="fade-up">
            <h1 className="right-title">
              CUSTOMIZE <span className="orange-text">WRIST</span> WATCH
            </h1>
            <p className="right-desc">
              Always Committed To Providing Its Partners With
              A Comprehensive And Excellent Tjari Watch
              Business Solution Only Design.
            </p>
            <p className="contact-btn">Contact us</p>
          </div>

        </div>
      </div>
    </section>
  );
}
export default HighClassTime;