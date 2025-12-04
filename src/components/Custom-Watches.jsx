import React, { useState } from "react";
import '../components/CSS/custom.css';

function CustomWatches() {
    const [activeTab, setActiveTab] = useState("man");

    const watches = {
        man: [
            {
                img: "./src/assets/cate-2-2.png",
                title: "Limited Edition",
            },
            {
                img: "./src/assets/cate-2-3.png",
                title: "Luna Rossa",
            },
        ],
        woman: [
            {
                img: "./src/assets/cate-2-3.png",
                title: "Rose Gold",
            },
            {
                img: "./src/assets/cate-2-2.png",
                title: "Limited Edition",
            },
        ],
        kids: [
            {
                img: "./src/assets/cate-2-2.png",
                title: "Limited Edition",
            },
            {
                img: "./src/assets/cate-2-3.png",
                title: "Kids Edition",
            },
        ],
    };

    return (
        <div className="custom-watch-container d-flex  mt-5">
            <div className="left-section">
                <img
                    src="./src/assets/cate-main-2-1.jpg"
                    className="img-fluid main-watch-img"
                    alt="banner"
                />
            </div>

            <div className="right-section p-5">
                <p className="category-text">EXCLUSIVE CATEGORIES</p>
                <h1 className="custom-title">CUSTOM WATCHES</h1>

                <img src="./src/assets/title-shape-2.svg" alt="" className="mb-4" />

                <img src="./src/assets/cate-ele-2-2.svg" alt="" className="cate-ele" />
                <img src="./src/assets/cate-ele-2-1.png" alt="" className="cate-ele1" />

                <div className="tabs mt-4 d-flex gap-3" >
                    <button
                        className={`tab-btn ${activeTab === "man" ? "active" : ""}`}
                        onClick={() => setActiveTab("man")}
                    >
                        MAN
                    </button>
                    <button
                        className={`tab-btn ${activeTab === "woman" ? "active" : ""}`}
                        onClick={() => setActiveTab("woman")}
                    >
                        WOMAN
                    </button>
                    <button
                        className={`tab-btn ${activeTab === "kids" ? "active" : ""}`}
                        onClick={() => setActiveTab("kids")}
                    >
                        KIDS
                    </button>
                </div>

                <div className="watch-grid mt-5 row g-4 " data-aos="fade-up">
                    {watches[activeTab].map((item, index) => (
                        <div key={index} className="col-md-5 card-box p-4  text-center">
                            <img src={item.img} alt="watch" className="watch-img mb-3" />
                            <h5 className="watch-title">{item.title}</h5>
                            <button className="discover-btn mt-2">DISCOVER</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CustomWatches;