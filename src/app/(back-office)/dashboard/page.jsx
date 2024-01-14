import CustomDataTable from '@/components/back-office/CustomDataTable'
import DashboardCharts from '@/components/back-office/DashboardCharts'
import Heading from '@/components/back-office/Heading'
import LargeCards from '@/components/back-office/LargeCards'
import SmallCards from '@/components/back-office/SmallCards'
import React from 'react'

const page = () => {
  return (
    <div className='space-y-10'>
      {/* HEADING */}
      <Heading title={"Dashboard Overview"} />
      {/* LARGE CARDS */}
      <LargeCards />
      {/* SMALL CARDS */}
      <SmallCards />
      {/* CHARTS */}
      <DashboardCharts />
      {/* RECENT ORDER TABLE */}
      <CustomDataTable tableHeading={"Recent Orders"} />
    </div>
  )
}

export default page