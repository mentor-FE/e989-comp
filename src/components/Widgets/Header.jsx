import logo from "../../assets/logo989.png";
import header from "../../assets/header.png";

const Header = () => {
  return (
    <header>
      <img
        src={logo}
        className="max-w-full h-auto"
        alt="logo"
      />
    </header>
  );
};

export default Header;
