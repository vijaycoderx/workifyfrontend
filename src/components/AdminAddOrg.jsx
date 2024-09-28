import React, { useState } from 'react';
import plusLogo from "../images/plus.svg";
import { useDispatch } from 'react-redux';
import { resetState } from '../redux/actions/addOrgTaskJoinOrgActions';
import { useSelector } from 'react-redux';
import axios from 'axios';

const AdminAddOrg = () => {
    const formData = new FormData();    

    const [formDataState, setformDataState] = useState({});
    const [imageLink, setimageLink] = useState();
    console.log(formDataState);
    const dispatch = useDispatch();

    const userData = useSelector((state) => state.userDataReducer);

    const addPhoto = () => {
        console.log("photo added");
    }

    const addOrg = async () => {
        if (formDataState.orgImage) {
            formData.append("orgImage", formDataState.orgImage);
        } else {
            console.log("No org image")
        }
        try {
            formData.append("orgName", formDataState.orgName);
            formData.append("caption", formDataState.caption);
            formData.append("admin", userData.email);
            
            // const addOrgResponse = await axios.post("http://localhost:8000/org/create", {
            //     // name: userData.name ? userData.name : userData.username,
            //     orgName: formDataState.orgName,
            //     caption: formDataState.caption,
            //     admin: userData.email,
            //     orgImage: formDataState.orgImage
            // })
            const addOrgResponse = await axios.post(`${process.env.REACT_APP_BACKEND_ORIGIN}/org/create`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            console.log("org res", addOrgResponse.data);
        } catch (error) {
            console.log(error);
        }
        console.log("org added");
    }
    const cancel = async () => {
        dispatch(resetState());
    }

    return (
        <div className='con fixed w-full h-[100vh] flex justify-center items-center '>
            <div className="add-card h-[300px] w-2/5 bg-[white] rounded border-box p-1 flex flex-col justify-end items-center border-[2px] border-[black]">
                <div className="add-card-holder flex flex-col justify-center items-center w-full px-5 flex-grow ">
                    <div className="img-title-desc flex justify-start items-center h-1/2  w-full  ">
                        <div className="img-holder flex flex-col justify-center items-center ">
                            <div className="img-holder rounded-[50%] bg-[white] border-[2px] border-[black] h-[100px] w-[100px] flex flex-col justify-center items-center mx-5 cursor-pointer overflow-hidden" onClick={addPhoto}>
                                <img src={imageLink} alt="" className='' />
                            </div>

                            {/* <button type="button" onClick={addPhoto} className='w-1/2  rounded flex justify-center items-center border-[2px] border-[solid] border-[blueviolet] m-1'>upload</button> */}

                            <input type="file" accept='.jpg, .jpeg, .svg, .png' name="hi" id="" className='w-[100px]  rounded flex justify-center items-center border-[2px] border-[solid] border-[blueviolet] m-1' onChange={(e) => {
                                console.log(e.target.files[0]);
                                setformDataState({ ...formDataState, orgImage: e.target.files[0] });
                                setimageLink(e.target.result);
                                
                                const reader = new FileReader();
                                reader.onload= (e) => {
                                    // console.log("res-----", e.target.result);
                                    setimageLink(e.target.result);
                                }

                                reader.readAsDataURL(e.target.files[0]);
                            }}/>
                        </div>
                        

                        <div className="title-desc flex flex-col justify-center items-center   h-full flex-grow mx-5 border-box">
                            <input type="text" placeholder='organization name' className='outline-none h-1/4 my-2 w-full border-b-[2px] border-[gray] px-1 text-[gray]' onChange={(e) => {
                                setformDataState({...formDataState, orgName: e.target.value});
                            }}/>
                            <input type="text" placeholder='caption' className='outline-none h-1/4 my-2 w-full border-b-[2px] border-[gray] px-1 text-[gray]' onChange={(e) => {
                                setformDataState({ ...formDataState, caption: e.target.value });
                            }} />
                            
                        </div>
                    </div>

                
                    
                </div>
                <div className="cancel-ok flex items-center justify-end w-full  px-10">
                    <button type="button" className=' mr-5 font-sans-serif font-semibold' onClick={cancel}>cancel</button>
                    <button type="button" className=' font-sans-serif font-semibold' onClick={addOrg}>ok</button>
                </div>
            </div>
            
        </div>
  )
}

export default AdminAddOrg;