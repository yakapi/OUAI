import React, {useContext, useEffect} from 'react'
import {ParameterContext} from "../../../context/parameterContext"
import uuid from 'react-uuid';

export default function ZoneInputList({etat}){
  function isEmpty(str) {
  return (!str || 0 === str.length);
}
  const {inputList, setInputList} = useContext(ParameterContext)
  let section = ""
  if (etat == "simple") {
    section = inputList[1]
  }else {
    section = inputList[0]
  }
  const delete_field = (e) =>{
    let field_list = ""
    let reverse_field_list = ""
    if (etat == "simple") {
      field_list = inputList[1]
      reverse_field_list = inputList[0]
    }else {
      field_list = inputList[0]
      reverse_field_list = inputList[1]
    }
    // console.log(e.target.parentElement.parentElement.children[0].value);
    console.log(etat);
    let new_list = []
    function isEmpty(str) {
  return (!str || 0 === str.length);
}
    let targeted_value = e.target.parentElement.parentElement.children[0].value
    if (isEmpty(targeted_value)) {
      console.log('VALEUR VIDE');
      targeted_value = false
      // e.target.parentElement.parentElement.children[0].setAttribute("value", "same")
    }
    console.log(e.target.parentElement.parentElement.children[0].value);
    for (var i = 0; i < field_list.inputs_data.length; i++) {
      if (isEmpty(field_list.inputs_data[i].cedex)) {
        field_list.inputs_data[i].cedex = false
      }
      if (field_list.inputs_data[i].cedex != targeted_value) {
        new_list.push(field_list.inputs_data[i])
      }
    }
    let objectField={
      name: etat,
      id: etat,
      inputs_data: new_list
    }
    let constructDeleteField = []
    if (etat == "simple") {
      constructDeleteField.push(reverse_field_list)
      constructDeleteField.push(objectField)

    }else {
      constructDeleteField.push(objectField)
      constructDeleteField.push(reverse_field_list)
    }
    console.log(constructDeleteField);
    console.log(inputList);
    setInputList(constructDeleteField)
  }
  if (!isEmpty(section.inputs_data)) {
    return(
      <div className="zi_list">
      <div className="zi_list_line line_des">
        <p className="t1">CP</p>
        <p className="t2">Ville</p>
      </div>
      {section.inputs_data.map((element)=>(
        <div className="zi_list_line" key={uuid()}>
          <input className="t1" type="text" defaultValue={element.cedex} placeholder="ex: 90"/>
          <input className="t2" type="text" defaultValue={element.name} placeholder="ex: Offemont"/>
          <div onClick={delete_field} className="delete_cedex">
          <p>-</p>
          </div>
        </div>
      ))}
      </div>
    )
  }else {
    return(
      <div className="zi_list"> <p className="tcl">ajoutez votre première zone</p></div>
    )
  }
}
