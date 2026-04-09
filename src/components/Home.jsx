import React, { useEffect, useState } from "react";
import "./home.css";

const slides = [
  {
    image: "/images/gp_img_1.jpg",
    text: "Welcome to Our Website",
  },
  {
    image: "/images/gp_img_2.jpg",
    text: "We Build Amazing Apps",
  },
  {
    image: "/images/gp_img_3.jpg",
    text: "Your Growth is Our Goal",
  },
  {
    image: "/images/gp_img_4.jpg",
    text: "Innovative Solutions",
  },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto change slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      <img
        src={slides[currentIndex].image}
        alt="slider"
        className="slider-image"
      />

      <div className="slider-text">
        <h1>{slides[currentIndex].text}</h1>
      </div>
    </div>
  );
};

export default Home;