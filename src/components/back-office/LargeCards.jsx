import { CreditCard, Layers, ShoppingCart } from 'lucide-react'
import LargeCard from './LargeCard'

const LargeCards = () => {
  
  const cardItems = [
    {
      title: 'Today Order',
      icon: <Layers />,
      className: 'bg-green-600 dark:shadow-green-700',
      price: 1000,
      otherDetails: [
        {
          title: "Cash",
          price: 100,
        },
        {
          title: "Card",
          price: 100,
        },
        {
          title: "Credit",
          price: 100,
        }
      ]
    },
    {
      title: 'Yesterday Order',
      icon: <Layers />,
      className: 'bg-blue-600 dark:shadow-blue-700',
      price: 1000,
      otherDetails: [
        {
          title: "Cash",
          price: 100,
        },
        {
          title: "Card",
          price: 100,
        },
        {
          title: "Credit",
          price: 100,
        }
      ]
    },
    {
      title: 'This Month',
      icon: <ShoppingCart />,
      className: 'bg-orange-600 dark:shadow-orange-700',
      price: 1000,
    },
    {
      title: 'Last Month',
      icon: <CreditCard />,
      className: 'bg-purple-600 dark:shadow-purple-700',
      price: 1000,
    },
    {
      title: 'All-Time Sales',
      icon: <CreditCard />,
      className: 'bg-cyan-600 dark:shadow-cyan-700',
      price: 1000,
    }
  ]
  
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
    lg:grid-cols-5 gap-4 my-10'>
      {/* CARD */}
      {
        cardItems.map((card, i) => (
          <LargeCard key={i}
          title={card.title} 
          className={card.className} 
          icon={card.icon}
          price={card.price}
          otherDetails={card.otherDetails}
          />
        ))
      }
    </div>
  )
}

export default LargeCards