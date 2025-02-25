"use client";

import { useUser } from "@clerk/nextjs";

import { USER_ORDER_ARRAY } from "@/lib/meal-data";

export default function LoggedInUserMeals() {
  const { isSignedIn, user, isLoaded } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    return <div>Sign in to view this page</div>;
  }

  return (
    <>
      <div>
        <ul>
          <p>{user.emailAddresses[0].emailAddress}</p>
          {USER_ORDER_ARRAY.map((userOrder) => {
            if (userOrder.userId === user.id) {
              return userOrder.mealOrders.map((mealOrder) => (
                <li key={mealOrder.week}>
                  Week {mealOrder.week}: {mealOrder.order}
                </li>
              ));
            }
          })}
        </ul>
      </div>
    </>
  );
}
