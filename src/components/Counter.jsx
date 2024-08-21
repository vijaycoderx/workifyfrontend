import React from 'react';
import { increment, decrement } from '../redux/actions/addOrgTaskJoinOrgActions';
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
    const valueState = useSelector((state) => state.incdecReducer);
    const dispatch = useDispatch()
    return (
        <div className='con fixed w-full h-[100vh] flex justify-center items-center bg-[yellow]'>
            <>
            <button className='bg-[yellow] w-[25px]' onClick={() => dispatch(decrement(5))}>-</button>
            <input type="text" className='outline-none bg-[black] text-[white]' value={valueState}/>
            <button className='bg-[yellow] w-[25px]' onClick={() => dispatch(increment(5))}>+</button>
            </>
            
        </div>
    )
}

export default Counter