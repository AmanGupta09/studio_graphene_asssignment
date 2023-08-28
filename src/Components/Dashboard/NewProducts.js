import React, { useEffect, useRef, useState } from "react";
import Categories from "./Categories";
import Card from "./Card";
import "./NewProducts.css";
import arrow1 from "../../assets/images/Arrow 1.png";
import arrow2 from "../../assets/images/Arrow 2.png";
import axios from "axios";
const NewProducts = () => {
  const [products, setProducts] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const fetchProducts = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    setProducts(result.data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  const carouselRef = useRef(null);
  const scrollToSlide = (slideIndex) => {
    const itemWidth = 280;
    carouselRef.current.scrollLeft = itemWidth * slideIndex;
  };

  const nextSlide = () => {
    const nextSlideIndex = (currentSlide + 1) % products.length;
    setCurrentSlide(nextSlideIndex);
    scrollToSlide(nextSlideIndex);
  };
  const prevSlide = () => {
    const prevSlideIndex = (currentSlide - 1 + products.length) % products.length;
    setCurrentSlide(prevSlideIndex);
    scrollToSlide(prevSlideIndex);
  };
  return (
    <div>
      <div className="mainproducts">
        <div className="newProducts">
          <div className="newProductsText">New products</div>
          <div className="productLine"></div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "16px",
            marginRight: "70px",
          }}
          className="destopArrow"
        >
          <div>
            <img onClick={prevSlide}  src={arrow2} alt="arrow2" />
          </div>
          <div>
            <img onClick={nextSlide} src={arrow1} alt="arrow1" />
          </div>
        </div>
      </div>
      {/* style={{ display: "flex", flexDirection: "column" }} */}
      <div className="newProducts">
        <Categories />
        <div ref={carouselRef} className="coursalContainer">
          {products.map((item) => (
            <Card
              title={item.title}
              description={item.description}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>
      </div>

      <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "16px",
            }}
          className="mobileArrow"
        >
          <div>
            <img onClick={prevSlide}  src={arrow2} alt="arrow2" />
          </div>
          <div>
            <img onClick={nextSlide} src={arrow1} alt="arrow1" />
          </div>
        </div>
    </div>
  );
};

export default NewProducts;
