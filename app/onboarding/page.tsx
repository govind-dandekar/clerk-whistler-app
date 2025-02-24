'use client'

import * as React from 'react'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { completeOnboarding } from './_actions'

export default function OnboardingComponent() {
  const [error, setError] = React.useState('')
  const { user } = useUser()
  const router = useRouter()

  const handleSubmit = async (formData: FormData) => {
    const res = await completeOnboarding(formData)
    if (res?.message) {
      // Reloads the user's data from the Clerk API
      await user?.reload()
			//route to organization page upon completion
      router.push('/organization')
    }
    if (res?.error) {
      setError(res?.error)
    }
  }
  return (
		<>
    <p className="text-xl mb-10">Please enter your birthday, city, and state to complete registration!</p>
      <form action={handleSubmit} className="max-w-sm mx-auto">
					<div>
						<label className="block mb-2 text-sm font-medium text-gray-900">Birthday</label>
						<input type="date" name="userBirthday" required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
					</div>
					<div className="mt-5">
						<label className="block mb-2 text-sm font-medium text-gray-900">City</label>
						<input type="text" name="userCity" required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
					</div>
					<div className="mt-5">
						<label className="block mb-2 text-sm font-medium text-gray-900">State</label>
						<input type="text" name="userState" required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
					</div>
					{error && <p className="text-red-600">Error: {error}</p>}
					<button type="submit" className="text-2xl mt-6 bg-sky-600 rounded-2xl py-2 px-12 hover:bg-sky-800 hover:text-white hover:scale-105">Submit</button>
			</form>
			</>
  
  )
}