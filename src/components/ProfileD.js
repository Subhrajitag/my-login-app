import { useEffect } from "react";
// import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import logo from "./dummy.png"

const ProfileD = ({userData,fetchUsers}) => {
  const { id } = useParams();
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   var items = JSON.parse(localStorage.getItem("Final list"));
  //   setData(items[id - 1]);
  // }, []);
  useEffect(()=>{
    fetchUsers();
},[]); 
console.log(userData);
console.log(userData.users[id-1]);

  return (
    <div style={{backgroundImage :"url(/background.webp)"}} className="min-h-screen min-w-screen p-5  bg-blue-200">
      <div class="p-3 bg-grey-200">
        <div class="container p-8 rounded-lg">
          <h1 className=" text-center text-3xl">
            <strong>Profile</strong>
          </h1>
        </div>
            <div className=" grid place-items-center container pt-6">
              
              <img className=" relative rounded-full content-center h-40 w-40 " src={logo} alt="" />
            </div>
    
    
        <div class="container p-8 rounded-lg">
          <h1 className=" text-center text-3xl">
            <strong>Personal Information</strong>
          </h1>
        </div>

        <div className=" flex place-content-center">

            <div className="flex flex-col float-left">
            <p  className="text-sm font-medium text-gray-900 px-6 py-4 ">
                Name:{userData.users[id-1].name}{" "}
              </p>
              <p className="text-sm font-medium text-gray-900 px-6 py-4 ">
                Phone : {userData.users[id-1].phone}
              </p>
              <p className="text-sm font-medium text-gray-900 px-6 py-4 ">
                Address : {userData.users[id-1].address?.city},{userData.users[id-1].address?.zipcode}{" "}
              </p>

            </div>
            <div className="flex flex-col float-right">
            <p className="text-sm font-medium text-gray-900 px-6 py-4">
                User Name :{userData.users[id-1].username}{" "}
              </p>
              <p className="text-sm font-medium text-gray-900 px-6 py-4 ">
                Email : {userData.users[id-1].email}{" "}
              </p>
              <p className="text-sm font-medium text-gray-900 px-6 py-4 ">
                Company : {userData.users[id-1].company?.name}
              </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileD;
