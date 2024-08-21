import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetState } from '../redux/actions/addOrgTaskJoinOrgActions';
import axios from 'axios';

const AdminAddTask = () => {
    const [formData, setformData] = useState({});
    const dispatch = useDispatch();
    const orgData = useSelector((state) => state.orgSelectReducer);
    console.log(formData)

    const getEmail = (name) => {
        for (let i = 0; i < orgData.members.length; i++){
            if (orgData.members[i].name === name) {
                console.log(orgData.members[i].email)
                return orgData.members[i].email;
            }
        }
        // console.log(orgData.members)
    }
    const addTask = async () => {
        const assignedUserEmail = getEmail(formData.assignedto)
        console.log(assignedUserEmail)
        try {
            console.log(orgData)
            console.log(formData)
            if (formData.title != undefined && formData.desc != undefined && assignedUserEmail != undefined && formData.start != undefined && formData.end != undefined) {
                const addTaskRes = await axios.post("http://localhost:8000/org/addtask", {
                    orgId: orgData.id,
                    task: { title: formData.title, desc: formData.desc, assignedto: assignedUserEmail, start: formData.start, end: formData.end, status: "pending"}
                    
                })
            } else {
                window.alert("fields can't be empty")
            }
            
        } catch (error) {
            console.log(error);
        }
        console.log("task added");
    }

    const cancel = async () => {
        dispatch(resetState());
    }
    
    let membersList = orgData.members.map((item) => {
        return (
            <option>{item.name}</option>
            
        )
    })
    membersList = [<option>select</option>, ...membersList]

    return (
        <div className='con fixed w-full h-[100vh] flex justify-center items-center '>
            <div className="add-card h-[300px] w-2/5 bg-[white] rounded border-box p-1 flex flex-col justify-end items-center border-[2px] border-[black]">
                <div className="add-card-holder flex flex-col justify-start items-center w-full   px-5 flex-grow">
                    <div className="img-title-desc flex justify-start items-center h-1/2  w-full  ">
                        {/* <div className="img-holder flex flex-col justify-start items-center">
                            <div className="img-holder rounded-[50%] bg-[white] border-[2px] border-[black] h-[100px] w-[100px] flex flex-col justify-center items-center mx-5">
                                <img src="" alt="" className='w-[40px]' />
                            </div>

                            
                        </div> */}
                        

                        <div className="title-desc flex flex-col justify-center items-center   h-full flex-grow mx-5 border-box">
                            <input type="text" placeholder='title' className='outline-none h-1/4 my-2 w-full border-b-[2px] border-[gray] px-1 text-[gray]' onChange={(e) => {
                                setformData({...formData, title: e.target.value})
                            }} />
                            <input type="text" placeholder='description' className='outline-none h-1/4 my-2 w-full border-b-[2px] border-[gray] px-1 text-[gray]' onChange={(e) => {
                                setformData({...formData, desc: e.target.value})
                            }}/>
                            
                        </div>
                    </div>

                    <div className="start-end-assign flex justify-between items-center w-full my-5 px-5 ">
                        <div className="start-date mx-1 border-[2px] rounded border-[blueviolet]">
                            <label htmlFor="start-date" className='mx-1 font-sans-serif font-bold text-[blueviolet]'>start</label>
                            <input type="date" name="" id="start-date" className='outline-none' onChange={(e) => {
                                setformData({...formData, start: e.target.value})
                            }}/>
                            
                        </div>
                        <div className="end-data mx-1 border-[2px] rounded border-[blueviolet]">
                            <label htmlFor="end-date" className='mx-1 font-sans-serif font-bold text-[blueviolet]'>end</label>
                            <input type="date" name="" id="end-date" className='mx-1 outline-none' onChange={(e) => {
                                setformData({...formData, end: e.target.value})
                            }}/>
                        </div>

                        <div className="assign mx-1 border-[2px] rounded border-[blueviolet]">
                            <label htmlFor="assign-mem" className='mx-1 font-sans-serif font-bold text-[blueviolet]'>Assign</label>
                            <select name="" id="assign-mem" className='outline-none' onChange={(e) => {
                                setformData({...formData, assignedto: e.target.value})
                            }}>
                                {/* <option value="hey">mem1</option>
                                <option value="hey">mem2</option>
                                <option value="hey">mem3</option>
                                <option value="hey">mem4</option>
                                <option value="hey">mem5</option> */}
                                {membersList}
                            </select>
                        </div>
                    </div>
                    
                </div>
                <div className="cancel-ok flex items-center justify-end w-full px-10">
                    <button type="button" className='mx-5 font-sans-serif font-semibold' onClick={cancel}>cancel</button>
                    <button type="button" className=' font-sans-serif font-semibold' onClick={addTask}>ok</button>
                </div>
            </div>
            
        </div>
  )
}

export default AdminAddTask;