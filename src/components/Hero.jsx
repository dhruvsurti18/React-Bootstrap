import React from "react";
import '../components/CSS/custom.css';

function Hero() {
    return (
        <>
            <section className="hero-main" >
                <div className="hero-sec" data-aos="fade-up">
                    <img src="./src/assets/hero-blue-S.svg" alt="" className="hero-blue" />
                </div>
                <div className="hero-pricing" data-aos="fade-up">
                    starting at
                    <span> $150.00</span>
                </div>
                <h1 className="hero-title">
                    <span>
                        <span class="text-highlight" data-aos="fade-right">time</span>
                        <span class="text1" data-aos="fade-left">travel</span>
                    </span>
                </h1>
                <div className="hero-bg-hand text-center w-100" data-aos="zoom-in">
                    <img src="./src/assets/hero-hand.png" alt=""></img>
                </div>
                
            </section>
        </>
    )
}
export default Hero;