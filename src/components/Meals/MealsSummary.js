import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>
        WE MAKE THE PIZZA.
        <br /> YOU MAKE THE DIFFERENCE.
      </h2>

      <p>
        Choose your favorite meal from our broad selection of pizza and enjoy a
        delicious meal at home.
      </p>
      <p>
        Our pizza are cooked with high-quality ingredients, just-in-time and of
        course by experienced chefs!
      </p>
    </section>
  );
};

export default MealsSummary;
