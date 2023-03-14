import React, {useContext, useEffect} from 'react'
import {ParameterContext} from "../../../context/parameterContext"
import ParameterLoader from './parametre_loader'
import TimeboardCard from './timeboard_card'

export default function Horaire(){
  const {setModalTimeResult,setModalTimeState, parameterState, getTimeParameter, setTimeSetting, setParameterState, updateTimeParameter} = useContext(ParameterContext)
  const TimeParameterLoader = async ()=>{
    try {
     const cred = await getTimeParameter()
     setTimeSetting(cred)
     setParameterState(true)
    } catch (e) {

    }
  }
  const parameterUpdate = async (construct)=>{
    try {
      for (var i = 0; i < construct.length; i++) {

        await updateTimeParameter(construct[i].id, construct[i])
      }

      setModalTimeResult("Paramêtre Enregister")
    } catch (e) {
      setModalTimeResult("Erreur")
    }
  }
  const saveTimeLine = (e)=>{
    setModalTimeState(true)
    let fields = []
    console.log(e.target.parentElement.parentElement.children[2]);
    let side_one = e.target.parentElement.parentElement.children[2].children[0]
    let side_two = e.target.parentElement.parentElement.children[2].children[1]
    for (var i = 0; i < side_one.children.length; i++) {
      fields.push(side_one.children[i].children[0])
    }
    for (var i = 0; i < side_two.children.length; i++) {
      fields.push(side_two.children[i].children[0])
    }

    //Pour chaque champs on va récupérer des infos pour récrer le tableau de settingTime
    let constructSettingTime = []
    for (var i = 0; i < fields.length; i++) {
      let constructObject = {
        id: fields[i].children[0].children[1].value,
        name: fields[i].children[0].children[0].innerHTML,
        state: fields[i].children[0].children[2].children[0].children[0].checked,
        timeOne: null,
        timeTwo: null
      }
      //si le jour est cocher alors on traitre les horaires
      if (fields[i].children[0].children[2].children[0].children[0].checked) {
        let premiere_tranche = fields[i].children[1].children[0].children[0].children[1]
        let seconde_tranche = fields[i].children[1].children[0].children[1].children[1]
        console.log(premiere_tranche);
        if (premiere_tranche.children[0].value != "" && premiere_tranche.children[4].value != "") {
          let tr1 = null
          let tr2 = null
          if (premiere_tranche.children[2].value == "") {
            tr1 = "00"
          }else {
            tr1 = premiere_tranche.children[2].value
          }
          if (premiere_tranche.children[6].value == "") {
            tr2 = "00"
          }else {
            tr2 = premiere_tranche.children[6].value
          }
          let oneTime = premiere_tranche.children[0].value + ":" +tr1 +"-"+premiere_tranche.children[4].value+":"+tr2
          constructObject.timeOne = oneTime
          console.log(oneTime);
        }else {
          constructObject.state = false
        }
        if (seconde_tranche.children[0].value != "" && seconde_tranche.children[4].value != "") {
          let tr3 = null
          let tr4 = null
          if (seconde_tranche.children[2].value == "") {
            tr3 = "00"
          }else {
            tr3 = seconde_tranche.children[2].value
          }
          if (seconde_tranche.children[6].value == "") {
            tr4 = "00"
          }else {
            tr4 = seconde_tranche.children[6].value
          }
          let twoTime = seconde_tranche.children[0].value + ":" +tr3 +"-"+seconde_tranche.children[4].value+":"+tr4
          constructObject.timeTwo = twoTime
        }
      }
      constructSettingTime.push(constructObject)
      //
    }
    let trp = parameterUpdate(constructSettingTime)
    console.log(trp);
  }
  useEffect(()=>{
    TimeParameterLoader()
  },[])
  return(
    <div>
      <h2 className="horaire_title">Horaire & Jour de disponibilité</h2>
        <p className="horaire_instruction">Sélectionner les jours ou vous êtes en activé pour renseigné les horaires</p>
      <div className="timeboard_container">
        <div className="timeboard_side">
          <div className="timecard_container">
            {parameterState ? <TimeboardCard nb="0"/> : <ParameterLoader/>}
          </div>
          <div className="timecard_container">
            {parameterState ? <TimeboardCard nb="2"/> : <ParameterLoader/>}
          </div>
          <div className="timecard_container">
            {parameterState ? <TimeboardCard nb="4"/> : <ParameterLoader/>}
          </div>
          <div className="timecard_container">
            {parameterState ? <TimeboardCard nb="6"/> : <ParameterLoader/>}
          </div>
        </div>
        <div className="timeboard_side">
          <div className="timecard_container">
            {parameterState ? <TimeboardCard nb="1"/> : <ParameterLoader/>}
          </div>

          <div className="timecard_container">
            {parameterState ? <TimeboardCard nb="3"/> : <ParameterLoader/>}
          </div>
          <div className="timecard_container">
            {parameterState ? <TimeboardCard nb="5"/> : <ParameterLoader/>}
          </div>
        </div>
      </div>
      <div className="timeline_saver">
        <p onClick={saveTimeLine} className="link_green">Enregistrer</p>
      </div>
    </div>
  )
}
