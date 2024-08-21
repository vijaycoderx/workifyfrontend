import React, { useEffect } from 'react';
import joinOrg from "../images/building-solid.svg"
import addOrg from "../images/add-solid.svg"
import orgdefault from "../images/orgdefault.png"
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { orgList } from '../redux/actions/orgListAction';
import { orgSelect } from '../redux/actions/orgSelectAction';
import { addOrgWin, addTaskWin, joinOrgWin } from '../redux/actions/addOrgTaskJoinOrgActions';

const AdminOrganizations = () => {
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.userDataReducer);
    const orgData = useSelector((state) => state.orgListReducer);
    const orgSelector = useSelector((state) => state.orgSelectReducer);

    useEffect(() => {
        console.log(userData)
        const orgListmng = async () => {
            const getOrgList = await axios.post("http://localhost:8000/user/orglist", {
                email: userData.email,
            })
            console.log("getorg list", getOrgList)
            if (getOrgList) {
                dispatch(orgList(getOrgList.data));
            }
        }
        orgListmng();
        
    }, [userData.email])

    const addOrgBtn = async () => {
        dispatch(addOrgWin());
    }

    const joinOrgBtn = async () => {
        dispatch(joinOrgWin());
    }
    const assignedTasks = (data) => {
        console.log("clicked", data.name);
        dispatch(orgSelect(data));
        return (
            <div className="tasks">
                <div className="title">{data.tasks.title}</div>
                <div className="desc">{data.tasks.desc}</div>
                <div className="start">{data.tasks.start}</div>
                <div className="end">{data.tasks.end}</div>
            </div>
        )
    }
    
    const list = orgData.map((item) => {
        if (item.id === orgSelector) {
            console.log(item.name, orgSelector)
            // document.querySelectorAll(".orgcon").style.backgroundColor = "red";
        }


        return (
            <div key={item.id} className={`orgcon my-2 flex flex-row justify-between items-center px-2 items-start hover:bg-slate-400 rounded-[4px] ${item.id === orgSelector.id ? 'bg-slate-500 rounded-[4px]' : ''}`} onClick={() => assignedTasks(item)}>
                <div className="orgimgholder overflow-hidden box-border border-[black] border-[1px] bg-[white] rounded-[50%] w-[50px] h-[50px]">
                    <img src={item.image ? item.image : orgdefault} alt=""  className=' w-[100%] h-[100%]' />
                </div>
                <div className="orgtextholder flex flex-col justify-center items-center">
                    <div className="title font-semibold font-[sans-serif]">{item.name}</div>
                    <div className="desc font-[sans-serif]">{item.desc}</div>
                </div>

                {/* <div className="title font-semibold font-[sans-serif]">{item.name}</div>
                <div className="desc font-[sans-serif]">{item.desc}</div> */}
                
                {/* {JSON.stringify(item)} */}
                <div ></div>
            </div>
        )
    })
    return (
        // bg-slate-50
        <div className='con w-2/6  h-full bg-slate-50 '>
            <div className="org-header flex justify-between items-center h-[51px] px-2 border-b-[1px] border-[black]">
                <div className="org-header-con">
                    <p className='font-[sans-serif] font-semibold'>organizations</p>
                </div>

                <div className="create-join-org flex justify-center items-center">
                    <div className="add-org mx-1">
                        <img src={addOrg} alt="" className='w-[30px] cursor-pointer' onClick={addOrgBtn} />
                    </div>
                    <div className="join-org mx-1">
                        <img src={joinOrg} alt="" className='w-[20px] cursor-pointer' onClick={joinOrgBtn}/>
                    </div>
                </div>
            </div>
            {/* h-[calc(100%-50px)] */}
            <div className="groupcon overflow-y-scroll h-[calc(100%-51px)] bg-[white]">
                {list}
            </div>
            {/* {list} */}
        </div>
  )
}

export default AdminOrganizations