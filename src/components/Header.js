import reactLogo from "../images/logo.png";

const Header = (props) => {
  return (
    <nav className="nav">
      <div className="left-nav">
        <img src={reactLogo} alt="logo" />
        <h3 className="logo-text">ReactFacts</h3>
      </div>

      <h4 className="title-text">React Course - Project 1</h4>

      <div className="toggler">
        <p className="toggler--light">Light</p>
        <div className="toggler--slider" onClick={props.toggleDarkMode}>
          <div className="toggler--slider--circle"></div>
        </div>
        <p className="toggler--dark">Dark</p>
      </div>
    </nav>
  );
};

export default Header;
