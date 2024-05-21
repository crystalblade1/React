import React, { useState } from "react";

const Modal = ({ isVisible, imageSrc, onClose, onThumbnailClick, currentIndex }) => {
  if (!isVisible) return null;

  const [imgList] = useState([
    "src/components/Ecommerce/images/image-product-1.jpg",
    "src/components/Ecommerce/images/image-product-2.jpg",
    "src/components/Ecommerce/images/image-product-3.jpg",
    "src/components/Ecommerce/images/image-product-4.jpg"
  ]);

    const previousImg = () => {
      const newIndex = (currentIndex - 1 + imgList.length) % imgList.length;
      onThumbnailClick(imgList[newIndex], newIndex);
    };

    const nextImg = () => {
      const newIndex = (currentIndex + 1 + imgList.length) % imgList.length;
      onThumbnailClick(imgList[newIndex], newIndex);
    };
    
  

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={imageSrc} alt="Enlarged" className="modal-image" />
        <img
          src="src/components/Ecommerce/images/icon-close.svg"
          onClick={onClose}
          className="modal-close-button"
        />
        <div className="round-button"onClick={previousImg}></div>
        <img
          src="src/components/Ecommerce/images/icon-previous.svg"
          onClick={previousImg}
          className="modal-previous-button"
        />
        <div className="round-button2" onClick={nextImg}></div>
        <img 
          src="src/components/Ecommerce/images/icon-next.svg"
          onClick={nextImg}
          className="modal-next-button"
        />


        <ul className="thumb">
          {
        imgList.map((item,index) =>(
      
          <li id = "items" key ={index}>
          
            <img
              src={item}
              width="100px"
              onClick={() =>
                onThumbnailClick(item, index)}
            />
          </li>     
        ))}
        </ul>
      </div>
    </div>
  );
};

export default Modal;
