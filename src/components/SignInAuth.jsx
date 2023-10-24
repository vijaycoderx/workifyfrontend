import React, { useState } from "react";
import googleLogo from "../images/google.svg"
import githubLogo from "../images/github.svg"

const SignInAuth = ({ authProps }) => {
    const [formData, setFormData] = useState({});
    // console.log(JSON.stringify(formData) + " data ");
    
    const submitUser = async (e) => {
        e.preventDefault();
    }

    const authSignup = (e) => {
        authProps.authType[1]("signup");
    }


    // const formDataSet = (e) => {
    //     setFormData([...formData, e.target.value]);
    // }
    
    return (
        <div className="con flex flex-col w-1/4 border-2 border-solid border-[gray] rounded-[5px] items-center ">

            <div className="auth-title">
                <h2 className="text-4xl font-semibold">Sign in</h2>
            </div>

            <br />

            <div className="social-login-con flex justify-between items-center w-full">
                <div className="google-logo-con flex justify-center items-center w-1/3 h-[50px] mx-5 border border-[#f03af0] rounded">
                    <img src={googleLogo} alt=""  className="w-[40px]" />
                </div>
                <div className="linkedin-logo-con flex justify-center items-center w-1/3 h-[50px] mx-5 border border-[#f03af0] rounded">
                    <img src={githubLogo} alt=""  className="w-[40px]" />
                </div>
            </div>

            {/* <br /> */}
            <div className="or-con">
                <h3 className="text-2xl font-semibold">or</h3>
            </div>
            <br />

            <div className="email-login-con w-full">
                <form action="" className="flex flex-col" onSubmit={submitUser}>
                    <input type="text" placeholder="email or username" className="outline-none mx-5 h-[50px] rounded-[5px] px-5 border-2 border-solid border-[blueviolet] box-border text-gray-500" onChange={(e) => {
                        setFormData({ ...formData, "emailUsername": e.target.value });
                    }} /><br />

                    <input type="password" placeholder="password" className="outline-none mx-5 h-[50px] rounded-[5px] px-5 border-2 border-solid border-[blueviolet] box-border text-gray-500" onChange={(e) => {
                        setFormData({ ...formData, "password": e.target.value });
                    }} /><br />

                    <input type="submit" value="Sign in" className="bg-green-300 mx-5 h-[50px] rounded-[5px] px-5 box-border font-bold" />
                </form>
            </div>

            <div className="forgot-signup-con flex justify-between px-5 w-full">
                <div className="forgot-pass-con my-2 text-[#4c1d95] font-semibold"><a href="">Forgot Password</a></div>
                <div className="signup-con my-2 text-[#4c1d95] font-semibold" onClick={authSignup}>Sign up</div>
            </div>

        </div>
    )
}

export default SignInAuth;