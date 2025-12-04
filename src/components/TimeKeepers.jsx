import React from "react";
import '../components/CSS/custom.css';

function TimeKeepers() {
    const products = [
        {
            id: 1,
            name: "Triumph Watch",
            price: "$355.00",
            img: "./src/assets/pro-1-1.png",
            new: false,
        },
        {
            id: 2,
            name: "Golden Line",
            price: "$355.00",
            img: "./src/assets/pro-1-2.png",
            new: true,
        },
        {
            id: 3,
            name: "Round Dial Semi",
            price: "$355.00",
            img: "./src/assets/pro-1-3.png",
            new: false,
        },
        {
            id: 4,
            name: "Black Dial Red",
            price: "$355.00",
            img: "./src/assets/pro-1-4.png",
            new: false,
        },
    ];

    return (
        <section className="hct-section text-center py-5" >
            <p className="hct-subtitle" data-aos="fade-right">FIND THE PERFECT</p>
            <h2 className="hct-title" data-aos="fade-left">HIGH CLASS TIMEKEEPERS</h2>
            <img src="./src/assets/title-shape-1.svg" alt="" className="mt-4" data-aos="fade-up"/>

            <div className="container mt-5">
                <div className="row gy-4 justify-content-center">

                    {products.map((item) => (
                        <div key={item.id} className="col-md-3 hct-watches" data-aos="fade-up">
                            <div className="hct-card p-3 position-relative">

                                {item.new && <span className="hct-newtag">NEW</span>}

                                <img src={item.img} alt={item.name} className="hct-img" />

                                <h5 className="hct-name">{item.name}</h5>
                                <p className="hct-price fs-5">{item.price}</p>
                                <p className="cart">ADD TO CART</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}
export default TimeKeepers;