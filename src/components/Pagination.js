import React from 'react'

const Pagination = ({paginateFront,paginateBack}) => {
 
  return (
    <div>
      <div className='py-2'>
    <nav className='block'></nav>
    <div>
      <nav
      className='relative z-0 inline-flex rounded-md shadow-sm -space-x-px'
      >
      <a href="#"   className='relative inline-flex items-center px-2 py-2 rounded-l-md 
      border border-gray-300 bg-white text-sm font-medium
       text-gray-500 hover:bg-gray-50' 
      onClick={()=>{paginateBack();}}> <span>Previous</span></a>
      <a href="#"   className='relative inline-flex items-center px-2 py-2 
      rounded-l-md border border-gray-300 bg-white text-sm 
      font-medium text-gray-500 hover:bg-gray-50' 
      onClick={()=>{paginateFront();}}> <span>Next</span></a>
      </nav>
    </div>
      
    
  
  </div></div>
  )
}

export default Pagination