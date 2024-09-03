import React from 'react'
import { useSelector, useDispatch } from 'react-redux';


const AdminHeader = () => {
  const userData = useSelector((state) => state.userDataReducer)
  console.log("user photo", userData.photo)
  return (
    <div className='con w-full h-[50px] bg-[white] flex justify-center items-center '>
      <div className="useraccou flex justify-start items-center gap-x-[10px]  w-full">
        <img src={userData.photo} alt="profile" className='rounded-[50%] w-[40px] ' />
        <b>{userData.name}</b>
      </div>
      
    </div>
  )
}

export default AdminHeader;