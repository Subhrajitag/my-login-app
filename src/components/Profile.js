import { useState,useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { saveUsers} from "../redux/user/userActions";
import axios from "axios";

const Profile = () => {
  const [allUsers, setAllUsers] = useState([])
  const dispatch= useDispatch();
  const navigate = useNavigate();
  const clickHandler = (user) => {
    navigate("login/" + user);
  };
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res=>{
      dispatch(saveUsers(res.data))
    })
    .catch(err=>{
      alert("fetch user api error")
    })
   
  }, []);

  const userState = useSelector((state)=>state.user)
 useEffect(()=>{
    if(userState.length>1){
      setAllUsers(userState)
    }
 },[userState])
console.log(allUsers)
  return (
    <div className=" mx-auto my-auto bg-emerald-500 ">
      <div className="grid grid-cols-5 p-10">
        {
          allUsers.map((user) => {
            return (
              <div
                className=" 
           bg-zinc-200 mt-3 mx-3 text-center rounded-xl
           "
              >
                <div className=" grid place-items-center container pt-6">
                  <img
                    className=" relative rounded-full content-center h-40 w-40 "
                    src="dummy.png"
                    alt="dummy"
                  />
                </div>

                <div className="p-3 ">{user.name}</div>
                <div className="p-1 truncate">{user.email}</div>
                <div>
                  <button
                    className="inline-block relative bg-sky-500
                text-white px-7 py-2 mb-5 rounded-lg  shadow-lg text-sm tracking-wide mt-4"
                    onClick={() => clickHandler(user.id)}
                  >
                    Login
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
// const mapStateToProps = (state) => {
//   return {
//     userData: state.user,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchUsers: () => dispatch(fetchUsers()),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Profile);
export default Profile

