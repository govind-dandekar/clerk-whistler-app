import { Protect } from '@clerk/nextjs'

import { OrganizationProfile } from '@clerk/nextjs'
import UserInfo from '../../../components/user-info'
import LoggedInUserMeals from '../../../components/logged-in-user-meals'
import AllUserMeals from '../../../components/all-user-meals'
import TotalWeeklyOrders from '../../../components/total-weekly-orders'

export default function OrganizationProfilePage() {
  return (
  <>
    {/* show logged in user info */}
    <UserInfo />

    {/* show logged in users meal history */}
    <Protect
      role="org:ski_student"
    >
      <LoggedInUserMeals />
    </Protect>

    <Protect
      permission="org:create:order"
    >
      <button className="mt-5 px-6 py-2 bg-blue-400">Create Weekly Order</button>
    </Protect>

    {/* show all ski-club meals to org:admin */}
    <Protect
      role="org:admin"
    >
      <AllUserMeals />
    </Protect>

    {/* show total orders to users with kitchen role */}
    <Protect
      role="org:kitchen"
    >
      <TotalWeeklyOrders />
    </Protect>    
  </>
  )
}