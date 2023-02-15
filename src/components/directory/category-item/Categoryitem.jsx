
const CategoryItem = ({category}) => {
  const {imageUrl, title} = category

  return (
    <div className='group min-w-[30%] h-60 flex items-center justify-center border border-black overflow-hidden mt-0 mb-4 mx-2 flex-auto hover:cursor-pointer'>
      <div className='bg-cover bg-center w-full h-full group-hover:scale-110 group-hover:transition-transform group-hover:duration-6000 group-hover:ease-in-expo' style={{
        backgroundImage:`url(${imageUrl})`
      }}/>
      <div className='h-[90px] py-0 px-6 flex flex-col items-center justify-center border border-black opacity-70 bg-white absolute group-hover:opacity-90 '>
        <h2 className="font-bold text-2xl text-[#4a4a4a] my-0 mx-[6px]">{title}</h2>
        <p className="font-medium text-base">Shop Now</p>
      </div>
    </div>
  )
}

export default CategoryItem