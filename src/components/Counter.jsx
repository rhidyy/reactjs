import {useState} from 'react'

export default function Counter() {
    const [counter, setCounter]= useState (0)
    function changeCount(value) {
        setCounter(counter + value)
    }
  return (
    <div>
        <button onClick={() => changeCount(1)}></button>
        <span>{counter}</span>
        <button onClick={() => changeCount(-1)}></button>
    </div>
  )
}
