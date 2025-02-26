import { USER_ORDER_ARRAY } from "../../lib/meal-data";

export default function AllUserMeals() {
  return (
    <>
      {USER_ORDER_ARRAY.map((userOrder) => {
        return (
          <div className="mb-4 mt-4">
            <table>
              <thead>
                <tr>
                  <td>User Id:</td>
                  <td>{userOrder.userId}</td>
                </tr>
                <tr>
                  <td>User Email:</td>
                  <td>{userOrder.email}</td>
                </tr>
              </thead>
              <tbody>
                {userOrder.mealOrders.map((mealOrder) => (
                  <tr key={mealOrder.week}>
                    <td key={mealOrder.week}>Week {mealOrder.week}</td>
                    <td>{mealOrder.order}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      })}
    </>
  );
}
