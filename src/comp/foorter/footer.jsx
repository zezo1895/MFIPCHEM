import React from "react";
import "./footer.css";
const Footer = () => {
  const scrollSmoothly = (value) => {
    if (window.innerWidth > 1130) {
      window.scrollBy({
        top: -value, // المسافة بالبيكسلات التي سيتم التمرير إليها
        behavior: "smooth", // التمرير السلس
      });
    }
    if (window.innerWidth < 1130 && window.innerWidth > 575) {
      window.scrollBy({
        top: -value - 2000, // المسافة بالبيكسلات التي سيتم التمرير إليها
        behavior: "smooth", // التمرير السلس
      });
    } else if (window.innerWidth < 575 && window.innerWidth > 402) {
      window.scrollBy({
        top: -value - 4000, // المسافة بالبيكسلات التي سيتم التمرير إليها
        behavior: "smooth", // التمرير السلس
      });
    } else if (window.innerWidth <= 402) {
      if (value === 3000) {
        window.scrollBy({
          top: -value - 4500, // المسافة بالبيكسلات التي سيتم التمرير إليها
          behavior: "smooth", // التمرير السلس
        });
      } else if(value===4500){
        window.scrollBy({
          top: -value - 6000, // المسافة بالبيكسلات التي سيتم التمرير إليها
          behavior: "smooth", // التمرير السلس
        });
      }
    }
  };
  return (
    <div
      className="footer"
      dir="rtl"
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <ul>
        <li onClick={(e) => scrollSmoothly(4500)}>الرئيسيه</li>
        <li onClick={(e) => scrollSmoothly(500)}>عن الشركه</li>
        <li onClick={(e) => scrollSmoothly(3000)}>المنتجات</li>
        <li>تواصل معانا</li>
      </ul>
      <div className="text-footer">MFIPCHEM</div>
    </div>
  );
};

export default Footer;
