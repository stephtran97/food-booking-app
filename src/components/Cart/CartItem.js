import classes from "./CartItem.module.css";

export default function CartItem(props) {
  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>
            {(props.price * 1000).toLocaleString("en-US")}
          </span>
          <span className={classes.amount}>x{props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button
          onClick={() => {
            props.removeItem(props.id);
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            props.addItem({
              id: props.id,
              name: props.name,
              price: props.price,
              amount: 1,
            });
          }}
        >
          +
        </button>
      </div>
    </li>
  );
}
