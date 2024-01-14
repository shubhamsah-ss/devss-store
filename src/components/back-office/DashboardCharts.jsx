import BestSellingProductsChart from './BestSellingProductsChart'
import WeeklySalesCharts from './WeeklySalesCharts'

const DashboardCharts = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-4'>
        <WeeklySalesCharts />
        <BestSellingProductsChart />
    </div>
  )
}

export default DashboardCharts