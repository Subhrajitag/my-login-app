import React from "react";
import { Routes, Route } from "react-router-dom";
import DashBoard from "./components/DashBoard";
import Profile from "./components/Profile";
import SecondPage from "./components/SecondPage";
import Post from "./components/Post"; 
import ProtectedRoute from "./ProtectedRoute";
// import { AuthProvider } from "./components/auth";

function App() {
  return (
    
       <Routes>
      <Route  path="/" element={<Profile />} />
      <Route  path="/login/:id" element={<SecondPage />} />
      <Route element = {<ProtectedRoute/>} >
      <Route  path="/login/:id/dashboard" exact element={<DashBoard/>}/>
      <Route  path="/login/:id/dashboard/post" element={<Post/>} />
      </Route>
    </Routes>
  
   
  );
}

export default App;
