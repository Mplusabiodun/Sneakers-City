import sneakerLogo from "../assets/logo.png";
import shoppingCart from "../assets/fi_shopping-cart.png";
import heart from "../assets/fi_heart.png";
import user from "../assets/fi_user.png";
import classes from "./Header.module.css";

export default function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img src={sneakerLogo} alt="Snaeker logo" />
        <h2>SC.</h2>
      </div>
      <div className={classes.listContainer}>
        <li>New arrivals</li>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
      </div>
      <div className={classes.icon}>
        <img src={shoppingCart} alt="shopping-cart" />
        <img src={shoppingCart} alt="shopping-cart" />
        <img src={heart} alt="heart" />
        <img src={user} alt="user" />
      </div>
    </header>
  );
}
