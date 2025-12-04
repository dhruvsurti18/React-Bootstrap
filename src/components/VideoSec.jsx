import React from "react";
import '../components/CSS/custom.css';

function VideoSection() {
    return (
        <>
            <section>
                <div className="video-layout">
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="title-area text-center">
                                    <img src="./src/assets/title-shape-4.svg" alt="" />
                                    <h2 className="text-white sec-text">TIMEKEEPERS</h2>
                                    <span class="sec-subtitle text-white">WATCHES NOW UPDATE!</span>
                                    <br />
                                    <br />
                                    <a href="https://www.youtube.com/watch?v=eNn5DYBV-mw" class="play-btn popup-video">
                                        <i>
                                            <svg width="17" height="24" viewBox="0 0 17 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14.785 9.439L0 0V24L14.779 14.527C15.2092 14.2566 15.5639 13.8816 15.8099 13.437C16.0559 12.9924 16.1852 12.4928 16.1858 11.9847C16.1864 11.4765 16.0583 10.9766 15.8133 10.5314C15.5683 10.0862 15.2146 9.7104 14.785 9.439ZM13.705 12.834L2.005 20.334V3.658L13.712 11.132C13.8563 11.2223 13.9752 11.3479 14.0574 11.497C14.1397 11.6461 14.1824 11.8137 14.1817 11.9839C14.181 12.1542 14.1369 12.3214 14.0534 12.4699C13.97 12.6183 13.8501 12.7429 13.705 12.832V12.834Z" fill="white"></path>
                                            </svg>
                                        </i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default VideoSection;