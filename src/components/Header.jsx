import { NavLink } from "react-router-dom";
import logoKasa from "../assets/img/logoHeader.svg";

const Header = () => {
  return (
    <>
      <header>
        <img src={logoKasa} alt="logo kasa" />
        <div className="navigation">
          <ul>
            <NavLink
              to="/"
              className={(nav) => (nav.isActive ? "navActive" : "")}
            >
              <li>Accueil</li>
            </NavLink>
            <NavLink
              to="/about"
              className={(nav) => (nav.isActive ? "navActive" : "")}
            >
              <li>A propos</li>
            </NavLink>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
