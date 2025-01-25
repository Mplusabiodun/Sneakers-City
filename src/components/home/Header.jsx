import { NavLink, useNavigate } from "react-router-dom";

import sneakerLogo from "../../assets/logo.png";
import shoppingCart from "../../assets/fi_shopping-cart.png";
import search from "../../assets/search.png";
import heart from "../../assets/fi_heart.png";
import user from "../../assets/fi_user.png";
import classes from "./Header.module.css";

export default function Header() {
  const navigate = useNavigate();

  function returnToHome() {
    navigate("/");
  }
  return (
    <header className={classes.header}>
      <div className={classes.logo} onClick={returnToHome}>
        <img src={sneakerLogo} alt="Snaeker logo" />
        <h2>SC.</h2>
      </div>
      <div className={classes.listContainer}>
        <NavLink
          to={"/listing"}
          style={{ fontWeight: 400, fontFamily: "Libre Baskerville" }}
        >
          New arrivals
        </NavLink>
        <NavLink>Men</NavLink>
        <NavLink>Women</NavLink>
        <NavLink>Kids</NavLink>
      </div>
      <div className={classes.icon}>
        <img id={classes.search} src={search} alt="search-icon" />
        <img src={shoppingCart} alt="shopping-cart" />
        <img src={heart} alt="heart" />
        <img src={user} alt="user" />
      </div>
    </header>
  );
}
