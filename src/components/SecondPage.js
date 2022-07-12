import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Email from "./Email";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { saveLoginUser } from "../redux/loginuser/loginuserActions";


const SecondPage = () => {
  const [allUsers,setAllUsers] = useState([])
  const [password,setPassword] = useState("")
  const {id} = useParams()
  const dispatch = useDispatch()
  const userState = useSelector((state)=>state.user)
  useEffect(()=>{
    if(userState.length>1){
      setAllUsers(userState)
    }
 },[userState])
console.log(allUsers)
console.log(allUsers[id-1])


// const loginUserState = useSelector((state)=>state.loginuser)
// console.log(loginUserState);
// useEffect(()=>{{
//   console.log("save Login User");
//   dispatch(saveLoginUser(allUsers[id-1]));
// }},[])

// dispatch(saveLoginUser(allUsers[id-1]));

  const navigate = useNavigate();
  const clickHandle=()=>{
    if(allUsers[id-1].email && allUsers[id-1].username!==password){
            alert("Enter the password again");
    }else
      {
      navigate(`/login/${id}/dashboard`);
    }
  }
  return (
    <>
      {/* <div
        className="min-h-screen
          w-screen
          flex
          justify-center
          items-center
          bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-900"
      >
        <form class="p-10 bg-white rounded-xl drop-shadow-lg space-y-5bg-center w-1/3 h-3/5">
        <div class="container bg-white p-5  rounded-lg">
            
            <h1 className='pb-3 text-center text-3xl'> 
              <strong>Login Form</strong>
            </h1>
      
        </div>
          <Email data={allUsers[id-1]}/>
          <div>
                 Password <br />
                <input type="password" className='
                relative
                w-full px-3 py-2 rounded-md border border-slate-400'
                value={password}
                 onChange={(e)=>setPassword(e.target.value)} required />
            </div>
          <div className='py-5'>
                <button className='
                   bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-900
                   w-full h-10 px-6 text-indigo-100  rounded-lg '
                   onClick={()=>clickHandle(allUsers[id-1].id)}
                   >
                    Login
                </button>
            </div>
        </form>
        
      </div> */}
    </>
  );
};



export default SecondPage;
