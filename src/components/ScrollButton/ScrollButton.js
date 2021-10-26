import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button"
// import { MdOutlineArrowUpward } from "react-icons/md";


export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
// }
  // Set the top coordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Show button when page is scrolled upto given distance
    const toggleVisibility = () => {
      if (!isVisible && window.pageYOffset > 400) {
        setIsVisible(true);
      } else {
      // if(isVisible && window.pageYOffset <= 400) {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div >
      {isVisible && (
        <Button
          smooth={true}
          duration={500}
          spy={true}
          exact={true}
          offset={-80}
          onClick={scrollToTop}
          style={{ display: isVisible ? "inline" : "none"}}
          className="scroll-to-top text-replace scroll--is-visible scroll--fade-out"
        ></Button>
      )}
    </div>
  );
}
