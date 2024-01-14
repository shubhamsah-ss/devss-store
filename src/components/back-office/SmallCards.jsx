import { Check, RefreshCcw, ShoppingCart, Truck } from 'lucide-react'
import SmallCard from './SmallCard'

const SmallCards = () => {
  const cardItems = [
    {
      title: 'Total Order',
      sales: 1000,
      icon: <ShoppingCart />,
      bgColor: 'bg-amber-600 text-white',
    },
    {
      title: 'Order Pending',
      sales: 500,
      pending: 1000,
      icon: <RefreshCcw />,
      bgColor: 'bg-sky-600 text-white'
    },
    {
      title: 'Order Processing',
      sales: 455,
      icon: <Truck />,
      bgColor: 'bg-teal-600 text-white'
    },
    {
      title: 'Order Delivered',
      sales: 360,
      icon: <Check />,
      bgColor: 'bg-emerald-600 text-white'
    },
  ]
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
    lg:grid-cols-4 gap-4 my-10'>
      {/* CARD */}
      {
        cardItems.map((card, i) => (
          <SmallCard key={i}
          title={card.title} 
          icon={card.icon}
          sales={card.sales}
          bgColor={card.bgColor}
          pending={card.pending}
          />
        ))
      }
    </div>
  )
}

export default SmallCards