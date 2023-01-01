import logo from "../../assets/logo989.png";
import header from "../../assets/header.png";

const Header = () => {
  return (
    <header>
      <div className={''} style={{backgroundImage: 'url("../../assets/logo989.png")', height: `100vh`, width: '100vw', display: 'block'}}>
        {/* <img src={logo} className={'h-[1000px]'} alt="logo" /> */}
      </div>

      {/* <img
        src={header}
        className="max-w-full h-1/2"
        alt="header"
      /> */}
    </header>
  );
};

export default Header;
