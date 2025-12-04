import React from "react";
import '../components/CSS/custom.css';

function Layout(){
    return(
        <>
            <div className="container mb-5">
      <div className="row">
        <div className="col-md-6 left-watch" data-aos="fade-right">
          <div className="featured-card dark-card d-flex align-items-center justify-content-between px-4">
            <img src="./src/assets/banner-watch-1-1.png" alt="" className="featured-img" />

            <div className="featured-text text-white  px-5">
              <div className="featured-stars text-warning mb-2">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>

              <h3 className="fw-bold fs-1">Premium Model</h3>

              <p className="mb-5 fs-5">
                ONLY FROM <span className="text-warning fw-bold">$85.00</span>
              </p>

              <button className="shop-btn fw-bold">SHOP NOW</button>
            </div>
          </div>
        </div>
        
        <div className="col-md-6 right-watch" data-aos="fade-left">
          <div className="featured-card light-card d-flex align-items-center justify-content-between px-4 ">
            <img src="./src/assets/banner-watch-1-2.png" alt="Rubber Editions" className="featured-img" />

            <div className="featured-text  px-5">
              <div className="featured-stars text-dark mb-2">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>

              <h3 className="fw-bold fs-1">Rubber Editions</h3>

             <p className="mb-4 fs-5">
                ONLY FROM <span className="text-danger fw-bold">$35.0</span>
              </p>

              <button className="shop-btn fw-bold">SHOP NOW</button>
            </div>
          </div>
        </div>

      </div>
    </div>
        </>
    )
}
export default Layout;