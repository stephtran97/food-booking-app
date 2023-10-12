import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

import pizzaImage from "../../assets/pizzahut.webp";
import logo from "../../assets/logo.png";
export default function Header(props) {
  return (
    <>
      <header className={classes.header}>
        <img className={classes.logo} src={logo}></img>
        <HeaderCartButton
          onShowCart={props.onShowCart}
          onHideCart={props.onHideCart}
        ></HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={pizzaImage} alt="Pizza banner"></img>
      </div>
    </>
  );
}
