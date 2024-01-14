'use client'
import React from 'react'
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2';
Chart.register(ArcElement, Tooltip, Legend)

const BestSellingProductsChart = () => {

    const data = {
        labels: ['Cabbage', 'Orange', 'Apple', 'Lichi'],
        datasets: [
          {
            label: '# of Votes',
            data: [50, 10, 15, 20],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1,
          },
        ],
    }

  return (
    <div className='rounded-xl p-5 shadow-lg bg-slate-100 dark:bg-slate-800'>
        <h2 className='text-xl font-bold mb-5'>Best Selling Products</h2>
        
        {/* CHART */}
        <Pie data={data} />
    </div>
  )
}

export default BestSellingProductsChart