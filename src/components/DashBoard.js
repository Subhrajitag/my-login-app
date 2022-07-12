import { useState ,useEffect} from "react";
import {  useParams } from "react-router-dom";
// import { fetchUsers } from "../redux/user/userActions";
import Nav from "./Nav";
import ProfileD from "./ProfileD";
import { connect } from "react-redux";

const DashBoard = ({userData,fetchUsers}) => {
  const [user]= useState([])

  const {id} =useParams();
  //retrieve posts from local storage
  useEffect(()=>{
    // var items = 
    // JSON.parse(localStorage.getItem("Final list"));
    // setLogindata(items[id-1])
    // fetchUsers();

  },[]);
// save user data to localStorage
  localStorage.setItem('userdata',JSON.stringify(userData.users[id-1]));

  return (
    <div className='h-screen bg-blue-200'>
<div>
  <Nav logindata={userData.users[id-1]}/>

</div>
         <div>
          <ProfileD data={userData.users[id-1]} />
        </div> 
       
    </div>
  )
}



export default DashBoard;