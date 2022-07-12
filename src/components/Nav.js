
import React from 'react';
import {  Link, useNavigate } from "react-router-dom";
const Nav= ({logindata}) =>{
const navigate = useNavigate()
  const handleLogout = ()=>{
    localStorage.removeItem('userdata') ;
     navigate("/")
   
  }
  return (
  <div  className='flex bg-slate-400 rounded justify-between p-5 md:flex md:items-right '>
    <strong>
    Hi, {logindata.name}
    </strong>
    <div className='flex'>
    <div className='text-xl ml-10 pl-6 hover:text-cyan-500 duration-200 '>
    <Link to={`/login/${logindata.id}/dashboard`}>Profile</Link>
    </div>
      <div className='text-xl ml-10 pl-6 hover:text-cyan-500 duration-200 '>
      <Link to={`/login/${logindata.id}/dashboard/post`}>Posts</Link>
      </div>
    </div>
    
      <div>
      <Link className=' text-white ml-10  duration-500 px-6 py-2 rounded-lg
                    hover:bg-cyan-400' onClick={handleLogout} to={`/login/${logindata.id}`}>Logout</Link>
      </div>

  </div>
  );
}
export default Nav;