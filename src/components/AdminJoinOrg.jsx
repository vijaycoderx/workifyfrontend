import React, { useState } from 'react';
import { resetState } from '../redux/actions/addOrgTaskJoinOrgActions';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const AdminJoinOrg = () => {
    const [formData, setformData] = useState({})
    const userData = useSelector((state) => state.userDataReducer)
    const dispatch = useDispatch()
    const joinOrgOk = async () => {
        try {
            console.log("user email from store", userData)
            const addOrgResponse = await axios.post(`${process.env.REACT_APP_BACKEND_ORIGIN}/org/join`, {
                name: userData.name ? userData.name : userData.username,
                invitecode: formData.invitecode,
                email: userData.email,
            })
        } catch (error) {
            console.log(error);
        }
        console.log("join Org Ok");
    }

    const cancel = async () => {
        dispatch(resetState())
    }

    return (
        <div className='con fixed w-full h-[100vh] flex justify-center items-center '>
            <div className="add-card h-[100px] w-1/5 bg-[white] rounded border-box p-1 flex flex-col justify-end items-center border-[2px] border-[black]">
                <div className="add-card-holder flex flex-col justify-center items-center w-full   px-5 flex-grow">
                    <div className="img-title-desc flex justify-center items-end h-full  w-full  ">
                        
                        <div className="title-desc flex flex-col justify-center items-center   h-full flex-grow  border-box w-full bg-[red]">
                            <input type="text" placeholder='Invitation Code' className='outline-none h-full  w-full border-[gray] px-1 text-[gray] ' onChange={(e) => {
                                setformData({...formData, invitecode: e.target.value})
                            }} />
                            
                        </div>
                    </div>
                    
                </div>

                <div className="cancel-ok flex items-center justify-end w-full px-10">
                    <button type="button" className='mx-5 font-sans-serif font-semibold' onClick={cancel}>cancel</button>
                    <button type="button" className=' font-sans-serif font-semibold' onClick={joinOrgOk}>ok</button>
                </div>
            </div>
            
        </div>
  )
}

export default AdminJoinOrg;