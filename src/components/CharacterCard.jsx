import AOS from "aos";
import "aos/dist/aos.css";
import "../index.css";

import AliveIcon from "../assets/icons/AliveIcon.svg";
import DeadIcon from "../assets/icons/DeadIcon.svg";
import UnknownIcon from "../assets/icons/UnknownIcon.svg";
import HumanIcon from "../assets/icons/HumanIcon.svg";
import AlienIcon from "../assets/icons/AlienIcon.svg";
import MaleIcon from "../assets/icons/MaleIcon.svg";
import FemaleIcon from "../assets/icons/FemaleIcon.svg";

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

const CharacterCard = ({
  image,
  status,
  name,
  specie,
  gender,
  location,
  origin,
}) => {
  const statusType =
    status === "Alive"
      ? "bg-[#71CA44] text-[#182D0D] border border-[#182D0D]"
      : status === "Dead"
      ? "bg-[#CA5A44] text-[#2D120D] border border-[#2D120D]"
      : "bg-[#949494] text-[#202020] border border-[#202020]";

  const statusIcon =
    status === "Alive" ? AliveIcon : status === "Dead" ? DeadIcon : UnknownIcon;

  const genderType =
    gender === "Male"
      ? "bg-[#6495ED] text-black border border-[#182D0D]"
      : gender === "Female"
      ? "bg-[#ED6494] text-black border border-[#2D120D]"
      : "bg-[#949494] text-[#202020] border border-[#202020]";

  const genderIcon =
    gender === "Male"
      ? MaleIcon
      : gender === "Female"
      ? FemaleIcon
      : UnknownIcon;

  const specieType =
    specie === "Human" ? HumanIcon : specie === "Alien" ? AlienIcon : "";

  return (
    <li>
      <div
        className="max-w-[300px] sm:max-w-none flex flex-col sm:flex-row overflow-hidden border-2 border-[#bfde42] rounded-xl bg-[#42B4CA]"
        data-aos="fade-up"
      >
        <div className="relative">
          <img
            src={image}
            className="select-none border-b-2 sm:border-b-0 sm:border-r-2 border-[#bfde42] sm:h-full sm:w-[216px] sm:object-cover sm:object-center"
          />
          <span
            className={`text-xs font-semibold px-2.5 py-0.5 rounded absolute top-4 left-4 flex items-center gap-1 ${statusType}`}
          >
            <img src={statusIcon} />
            {status}
          </span>
        </div>
        <div className="flex flex-col p-4 sm:w-[350px]">
          <h3 className="text-2xl font-semibold">{name}</h3>
          <span
            className={`w-fit flex items-center gap-1 mt-1 text-xs font-medium px-2.5 py-0.5 rounded ${genderType}`}
          >
            {gender}
            <img src={genderIcon} />
          </span>
          <div className="flex-1 flex flex-col justify-around">
            <div className="mt-2">
              <span className="text-lg font-semibold">Specie:</span>
              <div className="flex gap-1">
                <p>{specie}</p>
                <img src={specieType} />
              </div>
            </div>
            <div className="mt-1">
              <span className="text-lg font-semibold">
                Last known location:
              </span>
              <p>{location}</p>
            </div>
            <div className="mt-1">
              <span className="text-lg font-semibold">First seen in:</span>
              <p>{origin}</p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CharacterCard;
