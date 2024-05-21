import React, { useState, useEffect, useRef } from "react";
import Modal from "./Modal";

function Shoeshop() {
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);
  const [iscartNumber, setIscartNumber] = useState(false);
  const [iscartIconNumber, setIscartIconNumber] = useState(0);
  const [iscartFill, setIscartFill] = useState("Your cart is empty");
  const [iscartEmpty, setIscartEmpty] = useState(false);
  const cartIconRef = useRef(null);
  const popupRef = useRef(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const imgList = [
    "src/components/Ecommerce/images/image-product-1.jpg",
    "src/components/Ecommerce/images/image-product-2.jpg",
    "src/components/Ecommerce/images/image-product-3.jpg",
    "src/components/Ecommerce/images/image-product-4.jpg"
  ];

  const togglePopUp = () => {
    setIsPopUpVisible(!isPopUpVisible);
  };

  const toggleCartNumber = () => {
    if (tnumber > 0) {
      const pricePerItem = 125.0;
      const totalPrice = pricePerItem * tnumber;
      const newCartIconNumber = tnumber + iscartIconNumber;
      setIscartNumber(true);
      setIscartEmpty(true);
      setIscartIconNumber(newCartIconNumber);
      setIscartFill(
        `Fall Limited Edition Sneakers $${pricePerItem.toFixed(
          2
        )} x  ${newCartIconNumber} $${totalPrice.toFixed(2)}`
      );
    } else {
      alert("Please put an item in the cart first");
    }
  };

  function deleteItem() {
    event.stopPropagation();
    setIscartEmpty(false);
    setTnumber(0);
    setIscartIconNumber(0);
  }

  const handleClickOutside = (event) => {
    if (
      popupRef.current &&
      !popupRef.current.contains(event.target) &&
      cartIconRef.current &&
      !cartIconRef.current.contains(event.target)
    ) {
      setIsPopUpVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // MODAL FUNCTION -------------------------------------------

  const openModal = (imageSrc,index) => {
    setModalImageSrc(imageSrc);
    setIsModalVisible(true);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setModalImageSrc("");
  };

  const handleThumbnailClick = (imageSrc,index) => {
    setModalImageSrc(imageSrc);
    setCurrentIndex(index);
  };

  // COUNTER FUNCTION -----------------------------------------

  let [tnumber, setTnumber] = useState(0);

  function addCount() {
    setTnumber(tnumber + 1);
  }

  function minusCount() {
    if (tnumber > 0) {
      setTnumber(tnumber - 1);
    }
  }
  //--------------------------------------------------------

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
            onClick={togglePopUp}
            ref={cartIconRef}
            id="cart"
            src="src/components/Ecommerce/images/icon-cart.svg"
            height="auto"
            width="30px"
            alt="Logo"
          />
          {iscartNumber && (
            <div className="cart-number" id="hidden-cart-number">
              {iscartIconNumber}
            </div>
          )}
          <img
            id="profile"
            src="src/components/Ecommerce/images/image-avatar.png"
            alt="Logo"
          />
          {isPopUpVisible && (
            <div id="cartPopup" ref={popupRef}>
              <p>Cart</p>
              <hr id="breakline" />

              {iscartEmpty ? (
                <div className="primary-cart-fill">
                  <div className="cart-fill">
                    <img
                      id="cart-thumbnail"
                      src="src/components/Ecommerce/images/image-product-1.jpg"
                      width="60px"
                    />

                    {iscartFill}
                    <img
                      onClick={deleteItem}
                      id="bin"
                      src="src/components/Ecommerce/images/icon-delete.svg"
                      height="20px"
                      width="15px"
                    />
                  </div>
                  <button id="closeCartPopup">Checkout</button>
                </div>
              ) : (
                <p>Your cart is empty</p>
              )}
            </div>
          )}
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
            {imgList.map((item, index) => (
                <li key={index}>
                  <img
                    src={`src/components/Ecommerce/images/image-product-${index + 1}-thumbnail.jpg`}
                    width="100px"
                    onClick={() => openModal(item, index)}
                  />
                </li>
              ))}
              {/* <li>
                <img
                  src="src/components/Ecommerce/images/image-product-2-thumbnail.jpg"
                  width="100px"
                  onClick={() =>
                    openModal(
                      "src/components/Ecommerce/images/image-product-2.jpg"
                    )
                  }
                />
              </li>
              <li>
                <img
                  src="src/components/Ecommerce/images/image-product-3-thumbnail.jpg"
                  width="100px"
                  onClick={() =>
                    openModal(
                      "src/components/Ecommerce/images/image-product-3.jpg"
                    )
                  }
                />
              </li>
              <li>
                <img
                  src="src/components/Ecommerce/images/image-product-4-thumbnail.jpg"
                  width="100px"
                  onClick={() =>
                    openModal(
                      "src/components/Ecommerce/images/image-product-4.jpg"
                    )
                  }
                />
              </li> */}
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

              <button id="addtocart" onClick={toggleCartNumber}>
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
      <Modal
        isVisible={isModalVisible}
        imageSrc={modalImageSrc}
        onClose={closeModal}
        onThumbnailClick={handleThumbnailClick}
        currentIndex={currentIndex}
      />
    </div>
  );
}

export default Shoeshop;
