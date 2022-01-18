import reactLogo from "../images/logo.png";

const Header = () => {
  return (
    <nav className="nav">
      <div className="left-nav">
        <img src={reactLogo} alt="logo" />
        <h3 className="logo-text">ReactFacts</h3>
      </div>

      <h4 className="title-text">React Course - Project 1</h4>
    </nav>
  );
};

export default Header;
