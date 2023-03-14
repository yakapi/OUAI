import React, {useContext} from 'react'
import Loader from "../../loader/loader"
import {ParameterContext} from "../../../context/parameterContext"

export default function ParameterModalContent(){
  const {modalTimeResult, setModalTimeState, setModalTimeResult} = useContext(ParameterContext)
  const closeModalParameter = () =>{
    setModalTimeState(false)
    setModalTimeResult(false)
  }
  return(
    <div className="param_mc">
      <div className="param_mc_zone">
        <div className="modal_salarie_content">
          <div onClick={closeModalParameter} className="close_log_modal"><p>x</p></div>
          {modalTimeResult ? modalTimeResult : <Loader/>}
        </div>
      </div>
    </div>
  )
}
