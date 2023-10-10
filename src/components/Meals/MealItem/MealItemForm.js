import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import { useContext, useRef, useState } from "react";
import CartContext from "../../../store/cart-context";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const ctx = useContext(CartContext);

  const onClickHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    if (+enteredAmount === 0 || +enteredAmount < 1 || +enteredAmount > 5) {
      setAmountIsValid(false);
      return;
    }
    ctx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: +enteredAmount,
    });
  };
  return (
    <form className={classes.form} onSubmit={onClickHandler}>
      {/* #TODO: truyen amount len */}
      <Input
        ref={amountInputRef}
        label={"Amount"}
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      ></Input>
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a vlid amount (1~5)</p>}
    </form>
  );
};

export default MealItemForm;
