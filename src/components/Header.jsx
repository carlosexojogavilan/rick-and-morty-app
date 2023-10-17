import logo from "../assets/images/Rick_and_Morty.svg";

const Header = () => {
  return (
    <header className="max-w-xl mx-auto">
      <img src={logo} alt="Rick and Morty Logo" />
    </header>
  );
};

export default Header;
