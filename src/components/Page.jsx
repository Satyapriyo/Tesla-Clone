import React from "react";
import "../Page.css";
AOS.init({
  offset: 300,
});
const Page = () => {
  return (
    <div>
      <section className="page">
        <div className="content1" data-aos="slide-left">
          <img src="/model3.jpg" className="img1" alt="img1" />
        </div>
        <div className="upper1">
          <b>Model 3</b>
          <br />
          <code>Leasing starting at $349/mo</code>
        </div>
        <div className="lower1">
          <button className="first">View Inventory</button>
          <button className="second">Custom Order</button>
        </div>
        <div className="content2" data-aos="slide-right">
          <img src="/modelY.jpg" className="img2" alt="img1" />
        </div>

        <div className="upper2">
          <b>Model Y</b>
          <br />
          <code>Schedule a Demo Drive</code>
        </div>
        <div className="lower2">
          <button className="first">View Inventory</button>
          <button className="second">Custom Order</button>
        </div>
        <div className="content3" data-aos="slide-left">
          <img src="/modelS.jpg" className="img3" alt="img1" />
        </div>
        <div>
          <div className="upper3">
            <b>Model S</b>
            <br />
            <code>Schedule a Demo Drive</code>
          </div>
          <div className="lower3">
            <button className="first">View Inventory</button>
            <button className="second">Custom Order</button>
          </div>
        </div>
        <div className="content4" data-aos="slide-right">
          <img src="/modelX.jpg" className="img4" alt="img1" />
        </div>
        <div className="upper4">
          <b>Model X</b>
          <br />
          <code>Schedule a Demo Drive</code>
        </div>
        <div className="lower4">
          <button className="first">View Inventory</button>
          <button className="second">Custom Order</button>
        </div>
        <div className="content5" data-aos="slide-left">
          <img src="/solarPanels.jpg" className="img4" alt="img1" />
        </div>
        <div className="upper5">
          <b>Solar Panels</b>
          <br />
          <code>Lowest Cost Solar Panels in India</code>
        </div>
        <div className="lower5">
          <button className="first">View Inventory</button>
          <button className="second">Custom Order</button>
        </div>
        <div className="content6">
          <img src="/accessesories.jpg" className="img6" alt="img1" />
        </div>
        <div className="upper6">
          <b>accessesories</b>
          <br />
          <code></code>
        </div>
        <div className="lower6">
          <button className="first">Custom Order</button>
        </div>
      </section>
    </div>
  );
};

export default Page;
