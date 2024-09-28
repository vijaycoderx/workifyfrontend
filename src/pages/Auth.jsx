import React, {useState} from "react";
import SignInAuth from "../components/SignInAuth";
import SignUpAuth from "../components/SignUpAuth";
import axios from "axios";
// import dotenv from "dotenv"
// dotenv.config()

console.log("dotenv", process.env.REACT_APP_BACKEND_ORIGIN)
const Auth = () => {
    const [authType, setAuthType] = useState("signin");
    const authJson = {
        "authType": [authType, setAuthType]
    }
    
    // const userJSONWEBTOKEN = { userJWTToken: localStorage.getItem("userJWTToken") };
    // if (localStorage.getItem("userJWTToken")) {
    //     const verifyUserRes = async () => {
    //         const verifyRes = await axios.post("http://localhost:8000/isSignedin", { userJWTToken: localStorage.getItem("userJWTToken") })
            
    //         // if (verifyRes.data.message) {
    //         //     console.log("user not valid")
    //         // } else {
    //         //     console.log("auth user present")
    //         // }
    //         console.log(verifyRes)
    //     }
    //     verifyUserRes();
        
    // }
    return (
        <>
            {(authType === "signin") ? <SignInAuth authProps={authJson} /> : <SignUpAuth authProps={authJson} />}
        </>
    )
}

export default Auth;