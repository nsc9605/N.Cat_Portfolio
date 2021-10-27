import React, { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (!isVisible && window.pageYOffset > 400) {
        setIsVisible(true);
      } else if(isVisible && window.pageYOffset <= 400) {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [isVisible]);

  return (
    <>
      {isVisible && (
        <button
          duration={1000}
          onClick={scrollToTop}
          style={{ display: isVisible ? "inline" : "none"}}
          className="scroll-to-top"
          title="Scroll to Top"
        >
        </button>
      )}
    </>
  );
}
