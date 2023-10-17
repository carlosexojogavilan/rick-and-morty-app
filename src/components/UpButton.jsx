import { useState, useEffect } from "react";
import UpButtonIcon from "../assets/icons/UpIcon.svg";

const UpButton = () => {
  const [showButton, setShowButton] = useState(false);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const top = document.documentElement.scrollTop;
      setShowButton(top > window.innerHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {showButton && (
        <button
          className="fixed bottom-4 right-4 p-2 rounded-full border-2 border-[#829C1C] bg-[#BFDE42] hover:bg-[#9FBF22]"
          onClick={goToTop}
        >
          <img src={UpButtonIcon}></img>
        </button>
      )}
    </>
  );
};

export default UpButton;
