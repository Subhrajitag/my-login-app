
import React , {useState} from 'react';
import TableData from './TableData';
import Pagination from './Pagination';


const Table = ({localposts}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage= 5;
  console.log(localposts);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = localposts.slice(indexOfFirstPost, indexOfLastPost);

  console.log(currentPosts);
  const paginateFront = ()=>{
    setCurrentPage(2)
  }
  const paginateBack = ()=>{
    if(currentPage===2)
    setCurrentPage(1)
  }
  return (
    <div>
  
<TableData localposts={currentPosts}/>
         <Pagination
         renderOnZeroPageCount = {null}
         paginateBack = {paginateBack}
         paginateFront = {paginateFront}
  
         /> 
    </div>
  )
}

export default Table