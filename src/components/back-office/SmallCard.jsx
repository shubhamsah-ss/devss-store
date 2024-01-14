
const SmallCard = ({ title, sales, icon, bgColor, pending }) => {

  return (
    <div className='rounded-e-xl shadow-md dark:shadow-slate-800 border-l-4 border-l-yellow-600 dark:border-l-green-600 p-3'>
      <div className="flex space-x-4 items-center">
      <div className={`${!pending && "mt-4"} w-12 h-12 ${bgColor}
      rounded-full items-center flex justify-center`}>
        {icon}
      </div>
     <div className="">
     <p className="text-xl">{title}</p>
     <small className="text-rose-600 font-medium">
     {pending && `(${Number(pending).toFixed(2)})`}
      </small>
      <h3 className="text-2xl font-bold">{sales}</h3>
     </div>
      </div>
    </div>
  )
}

export default SmallCard