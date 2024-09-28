import React, {useEffect, useState} from 'react'
import googleLogo from "../images/google.svg"
import githubLogo from "../images/github.svg"
import axios from 'axios'
import bcrypt from "bcryptjs"




const SignUpAuth = ({ authProps }) => {
    const [formData, setFormData] = useState({});

    // console.log(JSON.stringify(formData) + " data ");

    // let generateSalt;
    // let inp_password_hash;
    // let con_password_hash;
    // let isPassMatched;


    //hash generator
    const hashGenerator = async (password, salt) => {
        let passHashed = await bcrypt.hash(password, salt);
        return passHashed;
    }

    const submitUser = async (e) => {
        e.preventDefault();
        let inp_password_hash;
        let con_password_hash;
        let passwordHashMatched;

        try {
            if (formData.password === undefined || formData.confirmPassword === undefined || formData.password === "" || formData.confirmPassword === "") {
                
            } else {
                const isPassMatched = (formData.password === formData.confirmPassword);
                if (isPassMatched) {
                    const generateSalt = await bcrypt.genSalt(10);
                    inp_password_hash = await hashGenerator(formData.password, generateSalt);
                    con_password_hash = await hashGenerator(formData.confirmPassword, generateSalt);
                    (inp_password_hash == con_password_hash) ? passwordHashMatched = true : passwordHashMatched = false;
                } else {
                    
                }
                
            }
            
            
            // console.log(inp_password_hash + " y " + con_password_hash);
        } catch (error) {
            console.log("error cathed" + error)
            // throw error;
        }
        // console.log(generateSalt + " xxx " + inp_password_hash + " xxx " + con_password_hash);
        // console.log(formData.username + formData.email + formData.password + formData.confirmPassword);
        

        if (formData.username === undefined || formData.username === "" || formData.email === "" || formData.email === undefined) {
            setFormData({...formData, "alertMessage" : "fields cannot be empty"});
        } else {
            if (formData.password === undefined || formData.password === "" || formData.confirmPassword === undefined || formData.confirmPassword === "") {
                setFormData({...formData, "alertMessage" : "password cannot be empty"});
            } else {
                const isPassMatched = (inp_password_hash === con_password_hash);
                if (isPassMatched) {
                    // console.log("pass matched");
                    setFormData({...formData, "alertMessage" : ""});
                } else {
                    setFormData({...formData, "alertMessage" : "passwords do not match"});
                }
                // setFormData({...formData, "alertMessage" : await inp_password_hash});
            }
        }
        console.log("hash function" + inp_password_hash + " x " + con_password_hash);

        if (passwordHashMatched) {
            // try {
            //     const res = await axios.get("http://localhost:8000/getUsers");
            //     console.log(res);
            // } catch (error) {
            //     console.log(error);
            // }

            const userDataForDB = {
                email: formData.email,
                username: formData.username ? formData.username : undefined,
                password: formData.confirmPassword,
                accountType: "email",
        
            }

            try {
                const res = await axios.post(`${process.env.REACT_APP_BACKEND_ORIGIN}/auth/email/signup`, userDataForDB);
                if (res.status === 200) {
                    console.log(res.data);
                    localStorage.setItem("userJWTToken", res.data.userJWTToken);
                    window.location.href = `${process.env.REACT_APP_FRONTEND_ORIGIN}/admin`;
                } else {
                    console.log(res);
                }
            } catch (error) {
                console.log(error);
            }
            
            
        
        }
    }

    const authSignin = (e) => {
        // console.log(JSON.stringify(authProps) + " data ");
        authProps.authType[1]("signin");  
    }


    const googleGetURL = async () => {
        try {
            const res = await axios.post(`${process.env.REACT_APP_BACKEND_ORIGIN}/auth/google/signup`);
            // console.log(JSON.stringify(res) + " bbb " + res.data.generatedUrl);
            window.location.href = await res.data.generatedUrl;
        } catch (error) {
            console.log("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeer" , error);
        }
        
    }
    const githubGetURL = async () => {

        try {
            const res = await axios.post(`${process.env.REACT_APP_BACKEND_ORIGIN}/auth/github/signup`);
            // console.log(JSON.stringify(res) + " bbb " + res.data.generatedUrl);
            window.location.href = await res.data.generatedUrl;
        } catch (error) {
            console.log(error);
        }
        
    }

    return (
        <div className="con flex flex-col w-1/4 border-2 border-solid border-[gray] rounded-[5px] items-center">
            <div className="auth-title">
                <h2 className="text-4xl font-semibold">Sign up</h2>
            </div>
        
            <br />

            <div className="social-login-con flex justify-between items-center w-full">
                <div className="google-logo-con flex justify-center items-center w-1/3 h-[50px] mx-5 border border-[#f03af0] rounded">
                    <img src={googleLogo} alt=""  className="w-[40px]" onClick={() => googleGetURL()} />
                </div>
                <div className="linkedin-logo-con flex justify-center items-center w-1/3 h-[50px] mx-5 border border-[#f03af0] rounded">
                    <img src={githubLogo} alt=""  className="w-[40px]" onClick={() => githubGetURL()} />
                </div>
            </div>

            {/* <br /> */}

            <div className="or-con">
                <h3 className="text-2xl font-semibold">or</h3>
            </div>
            <br />

            <div className="email-sign up-con w-full">
                <form action="" className="flex flex-col" >
                    <input type="text" placeholder="username" className="outline-none mx-5 h-[50px] rounded-[5px] px-5 border-2 border-solid border-[blueviolet] box-border text-gray-500" onChange={(e) => {
                        setFormData({ ...formData, "username": e.target.value });
                    }} /><br />

                    <input type="email" placeholder="email" className="outline-none mx-5 h-[50px] rounded-[5px] px-5 border-2 border-solid border-[blueviolet] box-border text-gray-500" onChange={(e) => {
                        setFormData({ ...formData, "email": e.target.value });
                    }} /><br />

                    <input type="password" placeholder="password" className="outline-none mx-5 h-[50px] rounded-[5px] px-5 border-2 border-solid border-[blueviolet] box-border text-gray-500" onChange={(e) => {
                        setFormData({ ...formData, "password": e.target.value });
                    }} /><br />

                    <input type="password" placeholder="confirm password" className="outline-none mx-5 h-[50px] rounded-[5px] px-5 border-2 border-solid border-[blueviolet] box-border text-gray-500" onChange={(e) => {
                        setFormData({ ...formData, "confirmPassword": e.target.value });
                    }} /><br />

                    <input type="submit" value="Sign up" className="bg-green-300 mx-5 h-[50px] rounded-[5px] px-5 box-border font-bold" onClick={submitUser} />
                </form>
            </div>

            <div className="alert-message my-2">
                {formData.alertMessage}
            </div>

            <div className="forgot-signup-con flex justify-between mx-5">
                <div className="have-acc-con my-5 text-[#4c1d95] font-semibold" onClick={authSignin}>Already have an Account? Sign in</div>
            </div>

        </div>
    )
}

export default SignUpAuth;