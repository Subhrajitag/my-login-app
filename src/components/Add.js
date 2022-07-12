import React from 'react'
import { useState } from 'react'

const TableData = ({localposts}) => {
    const [searchItem,setSearchItem] = useState("")
const handleChange=(e)=>{
   let search=e.target.value;
   setSearchItem(search);
}
  return (
    <div>
        
       < div className='p-4  text-lg bg-blue-200'>
         
         <div className='flex justify-between  rounded ' > 
         <h1 className='text-slate-700 ' ><strong>Posts</strong></h1>
          <form >
            <input className="form-control relative flex-auto min-w-0 block w-full
             px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
             focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text" 
            placeholder='search title' value={searchItem} onChange={handleChange}  />
        
          </form>
         </div>
         
      </div>
         <table className='m-4 table-auto'>
                <thead>
                <tr>
                  <th className='text-sm font-medium text-gray-900 px-6 py-4 text-center'>Post Id</th>
                   <th className='text-sm font-medium text-gray-900 px-6 py-4 text-center'>Title</th>
                   <th className='text-sm font-medium text-gray-900 px-6 py-4 text-center'>Body</th>
                   </tr>
                </thead>
                { 
                 localposts.filter((post)=>{
                  if(searchItem===""){
                     return post;
                  }else if(post.title.toLowerCase().includes(searchItem.toLowerCase())){
                    return post;
                  }
                  else if(searchItem!==post.title){
                    // alert("hul")
                   }
                }).map(pd =>
                
                <tbody>
                    <tr  key={pd.id}>
                    <td className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>{pd.id}</td>
                    <td className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>{pd.title}</td>
                    <td className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>{pd.body}</td>
                    </tr>
                </tbody>
              )
              }
                </table>
          
    </div>
  )
}

export default TableData