import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Pizga Phô Mai",
    description:
      "Thưởng thức vị gà Karaage chiên giòn cắt lát trên nền pizza đậm vị, cùng nấm tươi, hành tây hoà quyện xốt phô mai",
    price: 119,
  },
  {
    id: "m2",
    name: "Pizza Rau Củ (Xốt Bơ Tỏi)",
    description:
      "Thanh Nhẹ Với Ô Liu Đen Tuyệt Hảo, Cà Chua Bi Tươi Ngon, Nấm, Thơm, Bắp, Hành Tây Và Phô Mai Mozzarella Cho Bạn Bữa Tiệc Rau Củ Tròn Vị",
    price: 89,
  },
  {
    id: "m3",
    name: "Pizza Gấp Đôi Nhân Phủ Hải Sản Xốt Pesto",
    description:
      "Pizza Hải Sản Xốt Pesto Với Hải Sản (Tôm, Mực) Nhân Đôi Cùng Với Nấm Trên Nền Xốt Pesto Đặc Trưng, Phủ Phô Mai Mozzarella Từ New Zealand Và Quế Tây.",
    price: 269,
  },
  {
    id: "m4",
    name: "Pizza Hải Sản Nhiệt Đới",
    description:
      "Khi biển cả cũng được thu gọn trong một chiếc pizza với đầy ắp tôm, thanh cua, xen lẫn cà chua, bắp, thơm, thì là trên nền phô mai đậm vị",
    price: 129,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((element) => {
    return (
      <>
        <MealItem
          key={crypto.randomUUID()}
          id={element.id}
          name={element.name}
          description={element.description}
          price={element.price}
        ></MealItem>
      </>
    );
  });
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
