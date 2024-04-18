import { useState } from "react";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  const buttonStyle = {
    position: "fixed",
    width: "50px",
    height: "50px",
    bottom: "40px",
    right: "40px",
    background: "#0C9",
    color: "#fff",
    borderRadius: "50px",
    textAlign: "center",
    fontSize: "30px",
    zIndex: "1000",
    display: visible ? "inline" : "none",
  };

  return (
    <button
      className= {buttonStyle}
      onClick={scrollToTop}
    >button</button>
  );
};

export default ScrollButton;
