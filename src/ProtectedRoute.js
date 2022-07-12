import React from 'react'
import { Outlet } from 'react-router-dom'
import SecondPage from './components/SecondPage';
const useAuth = () =>{
    if(JSON.parse(localStorage.getItem("userdata"))){
        return true;
    }else{
        return false;
    }
}

const ProtectedRoute = () => {
    const isAuth = useAuth();
  return (
    isAuth ? <Outlet/> : <SecondPage/>
  )
}

export default ProtectedRoute