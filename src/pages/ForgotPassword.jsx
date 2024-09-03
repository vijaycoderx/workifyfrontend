import React, { useEffect, useState } from "react";

import resetpass from "../images/reset-password.png";
import axios from "axios";
import bcrypt from "bcryptjs";
import { jwtDecode } from "jwt-decode";

const ForgotPassword = () => {
    const [email, setemail] = useState()
    const [pass, setpass] = useState({})
    const [rcond, setrcond] = useState()
    console.log("pass", pass)

    const okbtn = async (e) => {
        console.log("ok pressed");

        try {
            const reserpass = await axios.post("http://localhost:8000/reset", {"email": email});
            console.log("response", reserpass)
        }
        catch (error) {
            console.log(error);
        }
    }

    const cancelbtn = (e) => {
        console.log("cancel clicked");
        window.location.href = "http://localhost:3000/auth"
    }



    const urlParams = new URLSearchParams(window.location.search);
    const resetToken = urlParams.get("token");
    console.log("passtoken", resetToken)
    
    const resetpassbtn = async (e) => {
        
        if (pass["new password"] === pass["confirm password"]) {
            const salt = await bcrypt.genSalt(10);
            const passHash = await bcrypt.hash(pass["new password"], salt)
            console.log("pass", passHash,pass["new password"])

            const tokenData = jwtDecode(resetToken);
            const updatepass = await axios.post("http://localhost:8000/user/updatepassword", {
                password: passHash,
                email: tokenData.user,
            })
        } else {
            window.alert("password dont match")
        }
            console.log("reset btn clicked")
    }
    useEffect(() => {
        if (resetToken) {
            const tokenData = jwtDecode(resetToken);
            console.log("jwtdecode", tokenData, tokenData.user)
            const userResetData = {
                email: tokenData.user,
                token: resetToken
            }
            const tokenvalidation = async () => {
                const validres = await axios.post("http://localhost:8000/verifyresettoken", userResetData)
                console.log("res", validres, validres.data.status)
                
                if (validres.data.status) {
                    console.log("valid token")
                    setrcond(1)
                    
                } else {
                    console.log("Invalid token")
                    setrcond(0)
                    
                }
            }
            tokenvalidation()
        }
        

        
    }, [resetToken])
    // if (resetToken) {
    //     const tokenData = jwtDecode(resetToken);
    //     console.log("jwtdecode", tokenData)
    //     const userResetData = {
    //         emal: tokenData.email,
    //         token: resetToken
    //     }
    //     const validateToken = (async () => {
            
    //         console.log("validation", validation)
    //         if (validation.data.status.message) {
    //             return 0
    //         } else {
    //             return 1
    //         }
    //     })()

    //     if (validateToken) {
    //         console.log("no error", validateToken)
    //     } else {
    //         console.log("err")
    //     }
        
    // } else {
    //     console.log("No token")
    // }
    const rendercond = resetToken && rcond
    console.log(rendercond, "rend")
    return (
        
        !rendercond ?
            <>
                <div className="passcon w-full h-full flex justify-center items-center bg-[white]">
                    <div className="passcard  w-1/2 h-2/3 flex flex-col justify-center items-center ">
                        <div className="passimgholder flex justify-center items-center w-1/2 h-1/2 ">
                            <img src={resetpass} alt="" className="w-1/2" />
                        </div>
                
                        <div className="resetpaascon w-2/4 h-[100px] border-[2px] box-border p-1 border-[black] rounded">
                            <div className="passinput w-full h-1/2 flex justify-center items-align ">
                                <input type="text" placeholder="Email" className="w-full text-[1.4rem] outline-none border-b-[2px] border-slate-300" onChange={(e) => {
                                    setemail(e.target.value);
                                
                                }} />
                            </div>
                            <div className="cancel-ok w-full h-1/2 flex justify-end items-center gap-x-[20px]">
                                <button className="text-[1.2rem]" onClick={cancelbtn}>cancel</button>
                                <button className="text-[1.2rem]" onClick={okbtn}>ok</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            :
            <>
                <div className="pass-reset-con flex justify-center items-center w-1/2 ">
                    <div className="passcon w-1/2 border-[black] rounded border-[2px] flex flex-col justify-center items-center gap-y-[5px] box-border p-1">
                        <input type="text" placeholder="new password" className="w-full h-[50px] p-1 text-[1.2rem] outline-none" onChange={(e) => {
                            setpass({...pass, "new password": e.target.value});
                        
                        }} />
                        <input type="text" placeholder="confirm password" className="w-full h-[50px] p-1 text-[1.2rem] outline-none" onChange={(e) => {
                            setpass({...pass, "confirm password": e.target.value});
                        
                        }} />

                        <button className="resetbtn w-1/2 h-[50px] border-[2px] border-[black] rounded" onClick={resetpassbtn}>
                            ok
                        </button>
                    </div>
                </div>
            </>
        
            
    )
}


export default ForgotPassword;