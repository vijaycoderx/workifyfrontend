import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import addTaskLogo from "../images/add-solid.svg";
import logoutLogo from "../images/logout-solid.svg";

import tickLogo from "../images/tick.svg";
import delteLogo from "../images/delete.svg";
import editLogo from "../images/edit.svg";
import { addTaskWin } from '../redux/actions/addOrgTaskJoinOrgActions';
import axios from 'axios';

const AdminOrganizationContent = () => {
  const dispatch = useDispatch();
  const orgData = useSelector((state) => state.orgSelectReducer);
  const userData = useSelector((state) => state.userDataReducer);
  // const orgList = useSelector((state) => state.orgListReducer);
  console.log(orgData.tasks)

  const addOrgTask = () => {
    dispatch(addTaskWin())
    console.log("task added");
  }
  let getUserTasks = [];
  let getAllUserTasks = [];
  if (orgData.tasks != undefined) {
    for (let i = 0; i < orgData.tasks.length; i++){
      if (orgData.tasks[i].assignedto === userData.email) {
        // getUserTasks.push(orgData.tasks[i])
        getUserTasks = [...getUserTasks, orgData.tasks[i]];
      }
      getAllUserTasks = [...getAllUserTasks, orgData.tasks[i]];
    }
  }
  console.log(getUserTasks, typeof(getUserTasks))
  
  const taskComplete = async (taskid) => {
    try {
      const updateTaskStatusRes = await axios.post("http://localhost:8000/org/updatetask", {
        orgid: orgData.id,
        taskid: taskid,
        status: "completed",
      })
    } catch (error) {
      console.log(error);
    }
    console.log("task completed", "e.target.parentNode.childNodes", taskid);
    
  }

  const taskDelete = async (taskid) => {
    console.log("task deleted");
    try {
      const deleteTaskStatusRes = await axios.post("http://localhost:8000/org/deletetask", {
        orgid: orgData.id,
        taskid: taskid,
      })
    } catch (error) {
      console.log(error);
    }
  }

  // const orgTasks = getUserTasks.map((item) => {
  //   console.log("each task")
  //   return (
  //     <div key={item._id} className={`con flex justify-center items-center p-1 bg-[skyblue] m-5 rounded`}>
  //       {/* {item.title} - {item.desc} - from {item.start.slice(0, 10)} to {item.end.slice(0, 10)} */}
  //       <div className="title font-semibold break-words flex justify-start items-center w-1/6 ">{item.title}</div>
  //       <div className="desc break-words flex justify-start items-center w-2/6 ">{item.desc}</div>
  //       <div className="start w-1/6 ">{item.start.slice(0, 10)}</div>
  //       <div className="end w-1/6">{item.end.slice(0, 10)}</div>
  //       <div className="status w-1/6">{ item.status}</div>
  //       {/* <img src={editLogo} alt="" className='w-[20px] mx-1 cursor-pointer' onClick={taskComplete} /> */}
  //       {orgData.admin === userData.email ? <img src={delteLogo} alt="" className='w-[20px] mx-1 cursor-pointer' onClick={() => taskDelete(item._id)}/> : ""}
  //       <img src={tickLogo} alt="" className='w-[20px] mx-1 cursor-pointer' onClick={() => taskComplete(item._id)} />
        
  //     </div>
  //   )
  // })

  const orgTasks = orgData.admin === userData.email ?
    getAllUserTasks.map((item) => {
      console.log("each task")
      return (
        <div key={item._id} className={`con flex justify-center items-center p-[4px] bg-slate-100 mb-[20px] rounded border-[2px] `}>
          {/* {item.title} - {item.desc} - from {item.start.slice(0, 10)} to {item.end.slice(0, 10)} */}
          <div className="title font-semibold break-words flex justify-start items-center w-1/6 ">{item.title}</div>
          <div className="desc break-words flex justify-start items-center w-2/6">{item.desc}</div>
          <div className="start w-1/6  ">{item.start.slice(0, 10)}</div>
          <div className="end w-1/6 ">{item.end.slice(0, 10)}</div>
          <div className='assignedto w-1/6 whitespace-nowrap overflow-hidden overflow-ellipsis' title={item.assignedto}>{item.assignedto}</div>
          <div className="status w-1/6">{item.status}</div>
          {/* <img src={editLogo} alt="" className='w-[20px] mx-1 cursor-pointer' onClick={taskComplete} /> */}
          {orgData.admin === userData.email ? <img src={delteLogo} alt="" className='w-[20px] mx-1 cursor-pointer' onClick={() => taskDelete(item._id)} /> : ""}
          <img src={tickLogo} alt="" className='w-[20px] mx-1 cursor-pointer' onClick={() => taskComplete(item._id)} />
          
        </div>
      )
    }) :

    getUserTasks.map((item) => {
      console.log("each task")
      return (
        <div key={item._id} className={`con flex justify-center items-center p-[4px] bg-slate-100 mb-[20px] rounded border-[2px] `}>
          {/* {item.title} - {item.desc} - from {item.start.slice(0, 10)} to {item.end.slice(0, 10)} */}
          <div className="title font-semibold break-words flex justify-start items-center w-1/6 ">{item.title}</div>
          <div className="desc break-words flex justify-start items-center w-2/6 ">{item.desc}</div>
          <div className="start w-1/6 ">{item.start.slice(0, 10)}</div>
          <div className="end w-1/6">{item.end.slice(0, 10)}</div>
          <div className="status w-1/6">{item.status}</div>
          {/* <img src={editLogo} alt="" className='w-[20px] mx-1 cursor-pointer' onClick={taskComplete} /> */}
          {orgData.admin === userData.email ? <img src={delteLogo} alt="" className='w-[20px] mx-1 cursor-pointer' onClick={() => taskDelete(item._id)} /> : ""}
          <img src={tickLogo} alt="" className='w-[20px] mx-1 cursor-pointer' onClick={() => taskComplete(item._id)} />
          
        </div>
      )
    });

  return (
    // bg-slate-100
    <div className='con w-full  h-full border-box border-l-[1px] border-[gray] bg-[white]'>
      <div className="orgheader flex justify-between items-center px-2 border-b-[1px] border-[gray] mb-[20px] bg-slate-50">
        <div className="org h-[50px] flex justify-center items-center font-semibold font-[sans-serif] ">
          {console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxx", orgData.image)}
          
          {orgData.image ? <> <div className='flex justify-center items-center '><img src={orgData.image} alt="" className='rounded-[50%] h-[35px] w-[35px]' /> <p className='font-bold text-[20px]'>{orgData.name} : </p><p className='text-[gray]'>{orgData.desc}</p></div> </>
           : <></>}
          
          {/* <img src={orgData.image} alt="" srcset="" className='rounded-[50%] h-[35px] w-[35px]' />
          <h3>{orgData.name} - {orgData.desc}</h3> */}
        </div>
        {orgData.admin == userData.email ? <div className="inviteholder">
          <b>invite code: </b>
          {orgData.invitecode}
        </div> : ""}
        

        
        <div className="addlogout flex justify-center items-center">
          {/* <div className="usertype flex justify-center items-center bg-[red]"><div className="dot w-[5px] h-[5px] bg-[green] rounded-[50%]"></div><b className='text-center'>user:</b> {userData.email === orgData.admin ? 'admin' : 'member'}</div> */}
          {orgData.admin === userData.email ? <img src={addTaskLogo} alt="add Task" className='w-[30px] mx-2' onClick={addOrgTask}/> : ''}
          {Object.keys(orgData).length != 0 ? <img src={logoutLogo} alt="leave" className='w-[30px] mx-2'/>: ""}
        </div>
      </div>

      <div className="orgcon h-[calc(100%-73px)] overflow-y-scroll mx-[20px]">
        {/* {JSON.stringify(getUserTasks)} */}
        {orgTasks}
      </div>
      
    </div>
  )
}

export default AdminOrganizationContent;