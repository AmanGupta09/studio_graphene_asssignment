import React,{useState} from "react";
import "./Navbar.css";
import boy from "../../assets/images/ladka.png";
import star from "../../assets/images/Star 3.png";
import MenuNavItem from "./MenuItem";
import Humburger from "./Humburger";

const navbar = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  {
    name: "Our Products",
    id: "product",
    child: [
      { name: "Product 1", id: "p1" },
      { name: "Product 2", id: "p2" },
      { name: "Product 3", id: "p3" },
      { name: "Product 4", id: "p4" },
    ],
  },
  { name: "Contact Us", id: "contact" ,
    child:[
      { name: "Product 1", id: "p1" },
    { name: "Product 2", id: "p2" },]},
];

const Navbar = () => {
 
  return (
    <nav className="headerNav">
      <div className="navHeading">
        <span className="navMainHeading">Shopkart</span>
        <span>
          <span className="navSecondHeading">Wishlist(0)</span>
          <span className="navSecondHeading">Bag(0)</span>
          <span className="humburgerMenu"><Humburger /></span>
        </span>
      </div>
      <div>
        <div
          style={{ maxWidth: "1460px", height: "1px", background: "white" }}
        ></div>
      </div>
      <div className="navMenu">
         {navbar.map((item)=>{
          if(item?.child)
          {
            return(<MenuNavItem menu={item}/>)
          }
          else{
            return(<span>{item.name}</span>)
          }
         })}
      </div>
      <div className="orangeFresh">Fresh</div>
      <div className="orange2022">2022</div>
      <div className="orangelook">LOOK</div>
      <div className="orange"></div>
      <div>
        <img className="ladka" src={boy} alt="boy" />
      </div>
      <div>
        <img className="star" src={star} alt="star" />
      </div>
      <div className="orange1"></div>
    </nav>
  );
};

export default Navbar;
