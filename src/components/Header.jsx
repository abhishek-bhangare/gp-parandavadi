import React, { useState, useRef, useEffect } from "react";
import "./header.css";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const navRef = useRef();

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  // 🔥 Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      {/* Top Bar */}
      <div className="top-bar">महाराष्ट्र शासन | Government of Maharashtra</div>

      {/* Header */}
      {/* Header */}
      {/* Header */}
<div className="main-header">
  <img
    src={process.env.PUBLIC_URL +"/images/header_logo_black.png"}
    alt="Header Logo"
    className="header-logo"
  />

  {/* Hamburger */}
  <div
    className="hamburger"
    onClick={() => setMobileMenu(!mobileMenu)}

  >
    ☰
  </div>
</div>

      {/* Navbar */}
      <div className={`navbar ${mobileMenu ? "active" : ""}`} ref={navRef}>
        <ul>
          <li>मुखपृष्ठ</li>
          <li>गाव बद्दल</li>

          {/* GP */}
          <li
            onClick={() => toggleMenu("gp")}
            onMouseEnter={() => window.innerWidth > 768 && setActiveMenu("gp")}
            onMouseLeave={() => window.innerWidth > 768 && setActiveMenu(null)}
          >
            ग्रामपंचायत विषयी ▾
            {activeMenu === "gp" && (
              <ul className="dropdown-menu">
                <li>रचना व प्रशासन</li>
                <li>पदाधिकारी</li>
                <li>ग्रामपंचायत समिती</li>
                <li>ग्रामस्तरीय कर्मचारी</li>
                <li>१५ वा वित्त आयोग</li>
              </ul>
            )}
          </li>

          {/* Officer */}
          <li
            onClick={() => toggleMenu("officer")}
            onMouseEnter={() =>
              window.innerWidth > 768 && setActiveMenu("officer")
            }
            onMouseLeave={() => window.innerWidth > 768 && setActiveMenu(null)}
          >
            मान्यवर व अधिकारी ▾
            {activeMenu === "officer" && (
              <ul className="dropdown-menu">
                <li>मान्यवर माहिती</li>
              </ul>
            )}
          </li>

          {/* Media */}
          <li
            onClick={() => toggleMenu("media")}
            onMouseEnter={() =>
              window.innerWidth > 768 && setActiveMenu("media")
            }
            onMouseLeave={() => window.innerWidth > 768 && setActiveMenu(null)}
          >
            प्रचार व प्रसिद्धी ▾
            {activeMenu === "media" && (
              <ul className="dropdown-menu">
                <li>नाविन्यपूर्ण उपक्रम</li>
                <li>छायाचित्र दालन</li>
                <li>चलचित्र दालन</li>
                <li>बातम्या</li>
              </ul>
            )}
          </li>

          {/* Yojana */}
          <li
            onClick={() => toggleMenu("yojana")}
            onMouseEnter={() =>
              window.innerWidth > 768 && setActiveMenu("yojana")
            }
            onMouseLeave={() => window.innerWidth > 768 && setActiveMenu(null)}
          >
            योजना माहिती ▾
            {activeMenu === "yojana" && (
              <ul className="dropdown-menu">
                <li>जि.प. स्वनिधी योजना</li>
              </ul>
            )}
          </li>

          {/* RTI */}
          <li
            onClick={() => toggleMenu("rti")}
            onMouseEnter={() => window.innerWidth > 768 && setActiveMenu("rti")}
            onMouseLeave={() => window.innerWidth > 768 && setActiveMenu(null)}
          >
            RTI/सेवा हमी कायदा ▾
            {activeMenu === "rti" && (
              <ul className="dropdown-menu">
                <li>सेवा हमी कायदा</li>
                <li>माहिती अधिकार</li>
              </ul>
            )}
          </li>

          {/* Other */}
          <li
            onClick={() => toggleMenu("other")}
            onMouseEnter={() =>
              window.innerWidth > 768 && setActiveMenu("other")
            }
            onMouseLeave={() => window.innerWidth > 768 && setActiveMenu(null)}
          >
            इतर सेवा ▾
            {activeMenu === "other" && (
              <ul className="dropdown-menu">
                <li>संपर्क</li>
                <li>ब्लॉग</li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
