import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

import pizzaImage from "../../assets/pizzahut.webp";

export default function Header(props) {
  return (
    <>
      <header className={classes.header}>
        <h1>PIZZA HUT</h1>
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
