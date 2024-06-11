import "./App.css";
// import { FaCartArrowDown } from "react-icons/fa";
// import { FaCartPlus } from "react-icons/fa";
import img from "./Components/Images/image-avatar.png";
import img1 from "./Components/Images/image-product-1.jpg";
import img1part from "./Components/Images/image-product-1-thumbnail.jpg";

import img2 from "./Components/Images/image-product-2.jpg";
import img2part from "./Components/Images/image-product-2-thumbnail.jpg";
import img3 from "./Components/Images/image-product-3.jpg";
import img3part from "./Components/Images/image-product-3-thumbnail.jpg"
import img4 from "./Components/Images/image-product-4.jpg"
import img4part from "./Components/Images/image-product-4-thumbnail.jpg"
import { useState } from "react";

import {FaCartPlus} from "react-icons/fa";


function App() {

  const product={
    price:125.00
  }

  const [quantity,setQuantity] = useState(1)
  const [amount,setAmount] = useState(125)
  const [mainImage, setMainImage] = useState(img1);
  const [blurredIndex, setBlurredIndex] = useState(null);

  const handleIncrement=()=>{
    if(quantity<10){
      setAmount(value => value + product.price)
      setQuantity(value => value +1)
    }
  }

  const handleDecrement=()=>{
    if(quantity>1){
      setAmount(value => value - product.price)
      setQuantity(value => value - 1)
    }

  }

  const handleImageClick = (image, index) => {
    setMainImage(image);
    setBlurredIndex(index);
  };
  

  
  return (
     <div className="container">
      <div className="main-container">
        <div className="header-main">
          <div className="header-first">
            <div className="logo">
              
              <h3>Sneakers</h3>
            </div>
            <div className="nav-links">
              <ul>
                <li>Collection</li>
                <li>Man</li>
                <li>Women</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          <div className="header-second">
            <div className="icons-first">
            <FaCartPlus />
              
            </div>
            
            <div className="img-avatar">
            
              <img src={img} width="40px" height="40px" alt="" />
            </div>
          </div>
        </div>
        <div className="main-content">
        <div className="main-content-first">
            <div className="main-img">
              <img className="main-img-part1" src={mainImage} alt="" width="450px" height="400px" />
            </div>
            <div className="collective-img">
              {[img1part, img2part, img3part, img4part].map((image, index) => (
                <div key={index} className={`small-img ${blurredIndex === index ? "blur" : ""}`}>
                  <img
                    className="img-img"
                    src={image}
                    width="90px"
                    height="90px"
                    alt=""
                    onClick={() => handleImageClick([img1, img2, img3, img4][index], index)}
                  />
                </div>
              ))}
            </div>
            </div>
          <div className="main-content-second">
            <div className="box1" ><h5>SNEAKERS COMPANY</h5></div>
            <div className="box2"><h1>Fall Limited Adition Sneakers</h1></div>
            <div className="box3"><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia repudiandae sint modi aut, eos dolores perferendis sapiente rerum distinctio. Rem veritatis temporibus incidunt illum cum voluptatem laudantium, delectus praesentium error, possimus ipsam quos? Doloremque, laborum </p></div>
            <div className="box4">
              <div className="box4part1" ><h2 >$125.00</h2></div>
              <div className="box4part2"><button>50%</button></div>
            </div>
            <div className="box5"><h4>{amount}</h4></div>
            <div className="box6">
              <div className="box6part1">
                <button onClick={handleIncrement} >+</button>
                <button>{quantity}</button>
                <button onClick={handleDecrement} >-</button>

              </div>
               <div className="box6part2"><button>Add to Cart</button></div>
            </div>

          </div>
        </div>
      </div>
      </div>
    
  );
}

export default App;
