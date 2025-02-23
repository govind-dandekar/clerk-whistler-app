'use client'

import * as React from 'react'
import { useState } from 'react'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { completeOnboarding } from './_actions'

export default function OnboardingComponent() {
  const [error, setError] = React.useState('')
  const { user } = useUser()
  const router = useRouter()

	const [startDate, setStartDate] = useState(new Date());

  const handleSubmit = async (formData: FormData) => {
    const res = await completeOnboarding(formData)
    if (res?.message) {
      // Reloads the user's data from the Clerk API
      await user?.reload()
      router.push('/')
    }
    if (res?.error) {
      setError(res?.error)
    }
  }
  return (
    <div>
      <form action={handleSubmit}>
        <div>
          <p className="text-2xl mb-10">Please enter your birthday to complete user registration!</p>
          <input type="date" name="userBirthday" required className="text-xl" />
        </div>
				{error && <p className="text-red-600">Error: {error}</p>}
        <button type="submit" className="mt-6 bg-sky-600 rounded-2xl py-2 px-10">Submit</button>
      </form>
    </div>
  )
}