import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";
import { useContext } from "react";

export default function Cart(props) {
  const cartCtx = useContext(CartContext);
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((element) => {
        return (
          <CartItem
            id={element.id}
            name={element.name}
            price={element.price}
            amount={element.amount}
            addItem={cartCtx.addItem}
            removeItem={cartCtx.removeItem}
          ></CartItem>
        );
      })}
    </ul>
  );
  const totalAmount = `₫${(cartCtx.totalAmount * 1000).toLocaleString(
    "en-US"
  )}`;
  const hasItem = cartCtx.items.length >= 1;
  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button-alt"]} onClick={props.onHideCart}>
          Close
        </button>
        {hasItem && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
}
