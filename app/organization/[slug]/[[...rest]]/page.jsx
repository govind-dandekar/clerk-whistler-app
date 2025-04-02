"use client"

import { Protect } from '@clerk/nextjs'
import { useOrganization } from '@clerk/nextjs'

import UserInfo from '../../../components/user-info'
import LoggedInUserMeals from '../../../components/logged-in-user-meals'
import AllUserMeals from '../../../components/all-user-meals'
import TotalWeeklyOrders from '../../../components/total-weekly-orders'

export default function OrganizationProfilePage() {
  const { organization } = useOrganization({})

  if (organization.name !== 'ski-club' || !organization) {
    // Handle loading state
    return <div className="-mt-16">
      Please request and invitation to the ski-club organization from your admin
    </div>
  }

  return (
    <div className="-mt-16">
      {/* show logged in users meal history */}
      <Protect
        role="org:ski_student"
      >
        "Student" View
        <LoggedInUserMeals />
      </Protect>

      <Protect
        permission="org:create:order"
      >
        <button className="mt-5 px-6 py-2 bg-blue-400">Create Weekly Order</button>
      </Protect>

      {/* show all ski-club meals to org:parent */}
      <Protect
        role="org:parent"
      >
        "Parent" View
        <AllUserMeals />
      </Protect>

      {/* show total orders to users with kitchen role */}
      <Protect
        role="org:kitchen"
      >
        "Kitchen" View
        <TotalWeeklyOrders />
      </Protect>

      {/* show historic orders and total orders to admin role */}
      <Protect
        role="org:admin"  
      >
        "Admin" View
        <AllUserMeals />
        <TotalWeeklyOrders />
      </Protect>

      {/* show logged-in user info */}
      <div className="mt-16 bg-slate-600 text-white px-4 py-4 rounded-xl">
        <UserInfo />
      </div>
    </div>
  )
}