import React from 'react'
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';

import { decAction, incAction } from '../store/action/Action';
function CounterInput() {
    const dispatch = useDispatch();//for dispatching action wla kam
    const counter = useSelector(state => state.counter);//store s state m s select krke laya hai ye counter ki value

    return (
        <div>
            <h3>Direct disatchig actions</h3>
            <button onClick={()=>{dispatch({type: 'INCREMENT'})}}>+</button>
            <button onClick={()=>{dispatch({type: 'DECREMENT'})}}>-</button>
            <br></br>
            Counter value = {counter}
            <h3>Disatchig actions through functions</h3>

            <button onClick={()=>{dispatch(incAction())}}>+</button>
            <button onClick={()=>{dispatch(decAction())}}>-</button>
        </div>
    )
}

export default CounterInput
