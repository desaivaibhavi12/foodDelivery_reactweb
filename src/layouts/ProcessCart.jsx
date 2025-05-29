import React from 'react'

const ProcessCart = ({img,title,desc}) => {
  return (
    <div className='bg-gray-50 dark:bg[#1f1d2b] p-6 rounded-2xl shadow-md hover:shadow-xl'>
      <div className='w-full h-36 flex items-center justify-center'>
        <img src={img} alt={title} className='w-44 h-44 object-contain' />
      </div>
      <h3 className='text-xl font-semibold mb-2'> {title} </h3>
      <p className='text-gray-600'>{desc}</p>
    </div>
  )
}

export default ProcessCart
