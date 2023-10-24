import axios from 'axios';
import React, { useEffect } from 'react'

const Admin = () => {

  // useEffect(() => {
  //   const jwtVerifyFun = async () => {
  //     if (localStorage.getItem("jwtToken")) {
  //       const jwtTokenData = {
  //       "jwtTokenStored" : localStorage.getItem("jwtToken")
  //       }
  //       console.log(jwtTokenData)
  //       const tokenStatus = await axios.post("http://localhost:8000/verify", jwtTokenData)
  //       console.log("token status" + tokenStatus)
  //     }
  //   }
  //   jwtVerifyFun();
    
  // },[])

  // const queryParams = new URLSearchParams(window.location.search);
  // const accessToken = queryParams.get("access_token");
  // console.log(accessToken + "access");
  // if (accessToken != undefined) {
  //   console.log(accessToken);
  //   localStorage.setItem("jwtToken", accessToken);
  // } else {
  //   console.log("jwt not passed")
  // }

  // const SignOUT = () => {
      
  // }
  return (
    <>
      <div>Admin </div>
      <button >logout</button>
    </>
    
)
}

export default Admin