"use client"
import React from 'react'
import Heading from './Heading'
import { X } from 'lucide-react'
import { useRouter } from 'next/navigation'

const FormHeader = ({ headerTitle }) => {
  const router = useRouter()
  return (
    <div className="flex items-center justify-between 
        rounded-xl p-5 shadow-lg
        bg-slate-100 
        dark:bg-slate-800">
        <Heading title={headerTitle} />
        <button onClick={()=>router.back()} className='text-yellow-600 
        hover:text-red-400 dark:hover:text-red-400
        dark:text-green-600'>
          <X />
        </button>
        </div>
  )
}

export default FormHeader