import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const price = `₫${(props.price * 1000).toLocaleString("en-US")}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <MealItemForm
        id={props.id}
        price={props.price}
        name={props.name}
      ></MealItemForm>
    </li>
  );
};

export default MealItem;
