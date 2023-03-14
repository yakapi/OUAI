import React , {useContext} from 'react'
import {ParameterContext} from "../../../context/parameterContext"

export default function TimeView({nb}){
  const {timeSetting} = useContext(ParameterContext)
  let array_first_time = ""
  let array_first_time_one = ["",""]
  let array_first_time_two = ["",""]

  let array_second_time = ""
  let array_second_time_one = ["",""]
  let array_second_time_two = ["",""]

  if (timeSetting[nb].timeOne != null) {
    array_first_time = timeSetting[nb].timeOne.split("-")
    array_first_time_one = array_first_time[0].split(':')
    array_first_time_two = array_first_time[1].split(':')
  }
  if (timeSetting[nb].timeTwo != null) {
    array_second_time = timeSetting[nb].timeTwo.split("-")
    array_second_time_one = array_second_time[0].split(':')
    array_second_time_two = array_second_time[1].split(':')
  }
  return(
    <div className="time_view">
      <div className="time_view_container">
        <div className="time_view_box">
          <h3>Première tranche:</h3>
          <div className="time_config">
            <input type="text" defaultValue={array_first_time_one[0]}/>
            <p className="time_dualpoint">:</p>
            <input type="text" defaultValue={array_first_time_one[1]} />
            <p className="time_tiret">-</p>
            <input type="text" defaultValue={array_first_time_two[0]} />
            <p className="time_dualpoint">:</p>
            <input type="text" defaultValue={array_first_time_two[1]} />
          </div>
        </div>
        <div className="time_view_box">
          <h3 className="scdt">Seconde tranche: <span>vide si qu'une seul tranche</span></h3>
          <div className="time_config">
          <input type="text" defaultValue={array_second_time_one[0]}/>
          <p className="time_dualpoint">:</p>
          <input type="text" defaultValue={array_second_time_one[1]} />
          <p className="time_tiret">-</p>
          <input type="text" defaultValue={array_second_time_two[0]} />
          <p className="time_dualpoint">:</p>
          <input type="text" defaultValue={array_second_time_two[1]} />
          </div>
        </div>
      </div>
    </div>
  )
}
