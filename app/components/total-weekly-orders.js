import { TOTAL_ORDER_ARRAY_FOR_KITCHEN } from "@/lib/meal-data.js";

export default function TotalWeeklyOrders() {
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th>meal</th>
          <th># of orders</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Chicken Fingers</td>
          <td>{TOTAL_ORDER_ARRAY_FOR_KITCHEN[0].chicken_fingers}</td>
        </tr>
        <tr>
          <td>Pepperoni Pizza</td>
          <td>{TOTAL_ORDER_ARRAY_FOR_KITCHEN[0].pepperoni_pizza}</td>
        </tr>
        <tr>
          <td>Grilled Cheese</td>
          <td>{TOTAL_ORDER_ARRAY_FOR_KITCHEN[0].grilled_cheese}</td>
        </tr>
        <tr>
          <td>Ham & Cheese Sandwich</td>
          <td>{TOTAL_ORDER_ARRAY_FOR_KITCHEN[0].ham_and_cheese_sandwich}</td>
        </tr>
        <tr>
          <td>Jam Sandwich</td>
          <td>{TOTAL_ORDER_ARRAY_FOR_KITCHEN[0].jam_sandwich}</td>
        </tr>
        <tr>
          <td>Cheese Pizza</td>
          <td>{TOTAL_ORDER_ARRAY_FOR_KITCHEN[0].cheese_pizza}</td>
        </tr>
      </tbody>
    </table>
  );
}
