import { USER_ORDER_ARRAY } from "../../lib/meal-data";

export default function AllUserMeals() {
  return (
    <>
      {USER_ORDER_ARRAY.map((userOrder) => {
        return (
          <div className="mb-4">
            <p>{userOrder.userId}</p>
            <p>{userOrder.email}</p>
            <ul>
              {userOrder.mealOrders.map((mealOrder) => (
                <li key={mealOrder.week}>
                  Week {mealOrder.week}: {mealOrder.order}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </>
  );
}
