import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Nav from './Nav';
import Table from './Table'


const Post = () => {
  const [posts,setPosts]= useState([]);
  const [localposts,setLocalposts] = useState([]);
  const [logindata,setLogindata] = useState([]);
  
  const {id} =useParams();
  //set Posts data to localStorage
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
      .then((res) => {
        setPosts(res.data)
        localStorage.setItem('Final Posts',JSON.stringify(res.data))
        
      })
      .catch((err) => {
        console.log(err);
      });
    }, [id])
  //get Post data from localStorage
    useEffect(()=>{
      var items = 
      JSON.parse(localStorage.getItem("Final Posts"));
      setLocalposts(items)
  
    },[]);
    // get User data from localStorage
    useEffect(()=>{
      var items = 
      JSON.parse(localStorage.getItem("Final list"));
      setLogindata(items[id-1])
  
    },[id]);
  console.log(localposts);


  return (
    <div className='bg-blue-100 '>
    <div>
       <Nav logindata={logindata}/>
    </div>
  
      <div>
        <Table localposts={localposts}/>
      </div>

    </div>
  )
}

export default Post