import React, {useContext} from 'react'
import {ParameterContext} from "../../../context/parameterContext"
import ParameterModalContent from './parametre_modal_content'

export default function ParameterModal(){
  const {modalTimeState} = useContext(ParameterContext)
  return(
    <div className="parameter_modal_zone">
      {modalTimeState ? <ParameterModalContent /> : ""}
    </div>
  )
}
