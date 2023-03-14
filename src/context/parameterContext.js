import { createContext, useState, useEffect } from "react"
import { collection, getDocs , doc, getDoc, setDoc, updateDoc} from 'firebase/firestore/lite';

import {auth, db} from '../firebase-config'


export const ParameterContext = createContext()

export function ParameterContextProvider(props){
  const [parameterState, setParameterState] = useState(false)
  const [timeSetting, setTimeSetting] = useState()
  const [modalTimeState, setModalTimeState] = useState(false)
  const [modalTimeResult, setModalTimeResult] = useState(false)
  const [loaderZone, setLoaderZone] = useState(false)
  const [inputList, setInputList] = useState(false)

  const updateTimeParameter = async (id, objt) =>{
    try {
      const time = doc(db, 'timeboard', id)
      await updateDoc(time, "state", objt.state)
      await updateDoc(time, "timeOne", objt.timeOne)
      await updateDoc(time, "timeTwo", objt.timeTwo)

    } catch (e) {
    }
  }
  const updateCedexParameter = async(objt) =>{
    try {
      console.log(objt);

        for (var i = 0; i < objt.length; i++) {
          let cedexer = doc(db, 'zone', objt[i].id)
          await updateDoc(cedexer, "id", objt[i].id)
          await updateDoc(cedexer, "inputs_data", objt[i].inputs_data)
        }
    } catch (e) {
      console.log('erreur update cedex parameter');
    }
  }
  const getZoneCollection = async () => {
    const collectionZone = collection(db, 'zone')
    const zoneSnapshot = await getDocs(collectionZone)
    const zoneList = zoneSnapshot.docs.map(doc => doc.data())
    return zoneList
  }

  const getTimeParameter = async () => {
    const collectionTime = collection(db , 'timeboard')
    const timeSnapshot = await getDocs(collectionTime)
    const timeList = timeSnapshot.docs.map(doc => doc.data())
    return timeList
  }

  return(
    <ParameterContext.Provider value={{updateCedexParameter, inputList, setInputList, getZoneCollection ,loaderZone ,setLoaderZone ,setModalTimeResult,modalTimeResult,modalTimeState, setModalTimeState, updateTimeParameter, parameterState,setParameterState, timeSetting, setTimeSetting, getTimeParameter}}>
      {props.children}
    </ParameterContext.Provider>
  )
}
