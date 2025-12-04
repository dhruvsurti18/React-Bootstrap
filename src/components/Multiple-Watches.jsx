import React from "react";
import '../components/CSS/custom.css';

const watches = [
  { id: 1, img: "./src/assets/inssta-2-1.jpg" },
  { id: 2, img: "./src/assets/inssta-2-2.jpg" },
  { id: 3, img: "./src/assets/inssta-2-3.jpg" },
  { id: 4, img: "./src/assets/inssta-2-4.jpg" },
  { id: 5, img: "./src/assets/inssta-2-5.jpg" }
];

 function MultipleWatches(){
     return (
    <div className="watch-section">
      <div className="watch-gridd">
        {watches.map((item) => (
          <div className="watch-card" key={item.id}>
            <img src={item.img} alt="" />
            <div className="watch-overlay">
              <div className="insta-box">INSTAGRAM</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
 }
 export default MultipleWatches;