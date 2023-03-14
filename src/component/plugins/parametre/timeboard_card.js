import React , {useContext, useState, useEffect} from 'react'
import {ParameterContext} from "../../../context/parameterContext"
import TimeView from "./time_view"

export default function TimeboardCard({nb}){
  const {timeSetting} = useContext(ParameterContext)
  const [timeBoardState, setTimeBoardState] = useState(false)
  let pos = parseInt(nb)
  const toggleDay = (e) => {
    if (e.target.checked) {
      setTimeBoardState(true)
    }else {
      setTimeBoardState(false)
    }

  }
  useEffect(()=>{
    setTimeBoardState(timeSetting[nb].state)
  },[])
  return(
    <div className="timecard_box">
      <div  className="timeboard_box">
        <h2>{timeSetting[pos].name}</h2>
        <input type="hidden" value={timeSetting[nb].id}/>
        <div className="onOff">
          <label className="switch">
            <input onChange={toggleDay} checked={timeBoardState} type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
      {timeBoardState ? <TimeView nb={pos} /> : ""}
    </div>
  )
}
