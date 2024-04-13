import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
  <ul className="header__nav">
    <NavLink to="/" className={({isActive})=>(isActive ? "link-active":"")}>
    <li>accueil</li>
    </NavLink>
    <NavLink to="a-propos" className={({isActive})=>(isActive ? "link-active":"")}>
    <li>à-propos</li>
    </NavLink>
    <NavLink to="projets" className={({isActive})=>(isActive ? "link-active":"")} >
    <li>projets</li>
    </NavLink>
  </ul>
  );
};

export default Navigation;