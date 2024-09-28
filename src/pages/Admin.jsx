import axios from 'axios';
import React, { useEffect } from 'react';
// import dotenv from "dotenv"

// dotenv.config()

// console.log("dotenv", process.env.REACT_APP_BACKEND_ORIGIN)

import AdminHeader from '../components/AdminHeader';
import AdminOrganizations from '../components/AdminOrganizations';
import AdminOrganizationContent from '../components/AdminOrganizationContent';
import AdminJoinOrg from '../components/AdminJoinOrg';
import AdminOrganizationMembers from '../components/AdminOrganizationMembers';


import AdminAddOrg from '../components/AdminAddOrg';
import AdminAddTask from '../components/AdminAddTask';
import Counter from '../components/Counter';

import { userData } from '../redux/actions/userDataAction';


import { useDispatch, useSelector } from 'react-redux';

const Admin = () => {
  const dispatch = useDispatch();
  // const orgTaskValue = useSelector((state) => state.addOrgTaskReducer.add_org_task_join_org)
  // console.log("window value", orgTaskValue)
  const joinOrgAddOrgAddTask = useSelector((state) => state.addOrgTaskReducer.add_org_task_join_org);

  const getUserData = useSelector((state) => state.userDataReducer);
  console.log("user store data", getUserData)


  useEffect(() => {
    const jwtVerifyFun = async () => {
      if (localStorage.getItem("userJWTToken")) {
        // console.log("user present", process.env.BACKEND_ORIGIN)
        console.log("origin", process.env.REACT_APP_BACKEND_ORIGIN)
        // ${process.env.REACT_APP_BACKEND_ORIGIN}
        const res = await axios.post(`${process.env.REACT_APP_BACKEND_ORIGIN}/isSignedin`, { userJWTToken: localStorage.getItem("userJWTToken") });
        
        console.log("message", res.data.message);
        console.log(res.data);
        if (res.data.message) {
          console.log("jwt expired or invalid")
          localStorage.removeItem("userJWTToken");
          window.location.href = `${process.env.REACT_APP_FRONTEND_ORIGIN}/auth`;
        } else {
          // console.log(res.data)
          console.log("user verified");
            dispatch(userData(res.data))

        }
        // const tokenStatus = await axios.post("http://localhost:8000/verify", jwtTokenData)
        // console.log("token status" + tokenStatus)
      } else {
        console.log("user not present")
        window.location.href = `${process.env.REACT_APP_FRONTEND_ORIGIN}/auth`;
      }
    }
    jwtVerifyFun();
    
  },[])

  const queryParamsSearch = new URLSearchParams(window.location.search);
  const userJWTToken = queryParamsSearch.get("userJWTToken");
  // console.log(accessToken + "access");
  if (userJWTToken != undefined) {
    console.log(userJWTToken);
    localStorage.setItem("userJWTToken", userJWTToken);
  } else {
    console.log("jwt not passed")
  }

  // const SignOUT = () => {
      
  // }
  return (
    <div className="con flex justify-start items-center flex-col w-full  h-full px-5 ">
      <AdminHeader />
      <hr className='border-[1px] border-[solid] border-[gray] w-full' />
      <div className="org-holder flex justify-center items-start w-full flex-grow bg-blue-100 h-[calc(100%-52px)]">
        <AdminOrganizations />
        <AdminOrganizationContent />
        {/* <AdminOrganizationMembers /> */}

        {/* <AdminAddOrg /> */}
        {/* <AdminAddTask /> */}
        {/* <Counter /> */}
        {joinOrgAddOrgAddTask === "addTask" ? <AdminAddTask /> : joinOrgAddOrgAddTask === "addOrg" ? <AdminAddOrg /> : joinOrgAddOrgAddTask === "joinOrg" ? <AdminJoinOrg /> : ""}

        
        
      </div>
    </div>
    
)
}

export default Admin