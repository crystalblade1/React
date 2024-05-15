import React, { useState } from "react";
import $ from "jquery";

function Shoeshop() {
  let [tnumber, setTnumber] = useState(0);

  function addCount() {
    setTnumber(tnumber + 1);
  }

  function minusCount() {
    setTnumber(tnumber - 1);
  }

  return (
    <div>
      <header>
        <a id="sneakers" href="#">
          Sneakers
        </a>

        <nav class="navbar">
          <a href="#">Collections</a>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#"></a>
        </nav>

        <div className="nav-img">
          <img
            src="src/components/Ecommerce/images/icon-cart.svg"
            height="auto"
            width="30px"
            alt="Logo"
          />
          <img
            id="profile"
            src="src/components/Ecommerce/images/image-avatar.png"
            alt="Logo"
          />
        </div>
      </header>
      <hr className="line" />

      <div className="wrapper">
        <div className="main-container">
          <div className="left-container">
            <div className="imgbox">
              <img src="src/components/Ecommerce/images/image-product-1.jpg" />
            </div>
            <ul className="thumb">
              <li>
                <a href="img1" target="imgbox">
                  <img
                    src="src/components/Ecommerce/images/image-product-1-thumbnail.jpg"
                    width="100px"
                  />
                </a>
              </li>
              <li>
                <a href="img2" target="imgbox">
                  <img
                    src="src/components/Ecommerce/images/image-product-2-thumbnail.jpg"
                    width="100px"
                  />
                </a>
              </li>
              <li>
                <a href="img3" target="imgbox">
                  <img
                    src="src/components/Ecommerce/images/image-product-3-thumbnail.jpg"
                    width="100px"
                  />
                </a>
              </li>
              <li>
                <a href="img4" target="imgbox">
                  <img
                    src="src/components/Ecommerce/images/image-product-4-thumbnail.jpg"
                    width="100px"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="right-container">
            <h4>SNEAKER COMPANY</h4>
            <h1>Fall Limited Edition Sneakers</h1>
            <p id="desc">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer.
            </p>

            <div className="prices">
              <h3>$125.00</h3>
              <div className="sec">
                <p>50%</p>
              </div>
            </div>
            <div className="discount">
              <del>$250.00</del>
            </div>

            <div className="counters">
              <div className="counter">
                <img
                  onClick={minusCount}
                  id="minus"
                  src="src/components/Ecommerce/images/icon-minus.svg"
                  width="20px"
                  alt="Logo"
                />

                <div className="counter-count">
                  <p>{tnumber}</p>
                </div>

                <img
                  onClick={addCount}
                  id="plus"
                  src="src/components/Ecommerce/images/icon-plus.svg"
                  width="20px"
                  alt="Logo"
                />
              </div>

              <button>
                <img
                  src="src/components/Ecommerce/images/icon-cart.svg"
                  width="20px"
                  alt="Logo"
                />
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shoeshop;
