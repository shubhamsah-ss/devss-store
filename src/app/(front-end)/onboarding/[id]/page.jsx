import Heading from '@/components/back-office/Heading'
import NewFarmerForm from '@/components/back-office/NewFarmerForm'
import { getData } from '@/lib/apiRequest'
import React from 'react'

export default async function Onboarding({ params: {id} }) {
  console.log(id)

  const data = await getData("users/65a64bd2b0201d308c6be845")
  return (
    <div className='flex flex-col items-center gap-10'>
      <Heading title={"Tell More About Yourself"} />
      <NewFarmerForm />
    </div>
  )
}
