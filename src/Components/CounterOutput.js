import React from 'react'
import {useSelector} from 'react-redux';
function CounterOutput() {
    const counter = useSelector(state => state.counter);//store s state m s select krke laya hai ye counter ki value

    return (
        <div>
            Counter value = {counter}
        </div>
    )
}

export default CounterOutput
