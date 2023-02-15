import React from 'react'
import CategoryItem from './category-item/Categoryitem'

const Directory = ({categories}) => {
  return (
    <div className='flex flex-wrap justify-between w-full h-full'>
      {categories.map((category) => 
        <CategoryItem key={category.id} category={category} />
      )}
    </div>
  )
}

export default Directory