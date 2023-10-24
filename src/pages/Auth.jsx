import React, {useState} from "react";
import SignInAuth from "../components/SignInAuth";
import SignUpAuth from "../components/SignUpAuth";

const Auth = () => {
    const [authType, setAuthType] = useState("signin");
    const authJson = {
        "authType": [authType, setAuthType]
    }
    
    
    return (
        <>
            {(authType === "signin") ? <SignInAuth authProps={authJson} /> : <SignUpAuth authProps={authJson} />}
        </>
    )
}

export default Auth;