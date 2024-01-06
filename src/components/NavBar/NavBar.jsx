import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { DiAtom } from "react-icons/di";


const NavBar = () => {
  return (
    <nav className="NavBar">
      <div className="Bg-Nav">
        <div className="NavBarSuperior">
        <DiAtom size={150} />
          <Link to="/">
            <h1 className="title">Rk 4x4</h1>
          </Link>
          <div>
            <CartWidget />
          </div>
        </div>
        <ul className="NavBarInferior Link">
          <div className="Separador">
            <Link className="Link" to="/Category/Luces led">
            Luces led
            </Link>
            <Link className="Link" to="/Category/Snorkels">
            Snorkels
            </Link>
            <Link className="Link" to="/Category/Bumpers">
            Bumpers
            </Link>
          </div>
          <div className="Separador">
            <Link className="Link" to="/Category/Racks">
            Racks
            </Link>
            <Link className="Link" to="/Category/Malacates">
            Malacates
            </Link>
            <Link className="Link" to="/Category/Carpas">
            Carpas
            </Link>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;