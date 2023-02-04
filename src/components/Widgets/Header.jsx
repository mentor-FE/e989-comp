import logo from "../../assets/logo989.png";

const Header = ({ headerClass, classNames, styles, logoClass }) => {
  return (
    <header className="">
      <img src={logo} className={logoClass} alt="logo" />
      <div className={classNames} style={styles}></div>
    </header>
  );
};

export default Header;
