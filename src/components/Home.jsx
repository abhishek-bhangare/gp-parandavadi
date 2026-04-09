import React, { useEffect, useState } from "react";
import "./home.css";

const slides = [
  {
    image: "/gp-parandavadi/images/gp_img_1.jpg",
    text: "ग्रामपंचायत कार्यालय, परंदवडी ",
  },
  {
    image: "/gp-parandavadi/images/gp_img_6.jpg",
    text: "किल्ले लोहगड",
  },
  {
    image: "/gp-parandavadi/images/gp_img_5.jpg",
    text: "पवना धरण",
  },
  {
    image: "/gp-parandavadi/images/gp_img_7.jpg",
    text: "किल्ले विसापुर",
  },
  {
    image: "/gp-parandavadi/images/gp_img_2.jpg",
    text: "जागतिक दर्जाच्या नर्सरी असलेले गाव...",
  },
  {
    image: "/gp-parandavadi/images/gp_img_3.jpg",
    text: "चौराई देवी मंदिर, सोमाटणे",
  },
  {
    image: "/gp-parandavadi/images/gp_img_4.jpg",
    text: "बिर्ला गणपती, सोमाटणे ",
  },
];

const officials = [
  {
    image: "/gp-parandavadi/images/gp_sarpanch.png", // replace with real images
    name: "सौ. निर्मलाताई नवले ",
    post: "सरपंच",
  },
  {
    image: "/gp-parandavadi/images/gp_upsarpanch.png",
    name: "श्री. पोपटराव पवार ",
    post: "उपसरपंच",
  },
  {
    image: "/gp-parandavadi/images/gp_gramsevak.jpg",
    name: "श्री. माने एम. एम.",
    post: "ग्रामपंचायत अधिकारी",
  },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Slider Auto Change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* 🔹 Slider Section */}
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

      {/* 🔹 Officials Section */}
      <div className="officials-section">
        <h2 className="section-title">आपले प्रतिनिधी व अधिकारी</h2>

        <div className="officials-container">
          {officials.map((item, index) => (
            <div key={index} className="official-card">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.post}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;