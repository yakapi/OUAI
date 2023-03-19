import { createContext, useState, useEffect } from "react"
import { collection, getDocs , doc, getDoc, setDoc, updateDoc} from 'firebase/firestore/lite';

import {auth, db} from '../firebase-config'

export const LockerContext = createContext()

export function LockerContextProvider(props){

    const [lockerData, setLockerData] = useState()

    const addLockerFirebase = async (id, nom, url, area) => {
      await setDoc(doc(db,"locker",id), {
        nom: nom,
        url: url,
        area: area
      })
    }

    const getLockerData = async ()=> {
      const collectionLocker = collection(db,'locker')
      const lockerSnapshot = await getDocs(collectionLocker)
      const lockerList = lockerSnapshot.docs.map(doc => doc.data())
      return lockerList
    }

    return(
      <LockerContext.Provider value={{addLockerFirebase, lockerData, setLockerData, getLockerData}}>
        {props.children}
      </LockerContext.Provider>
    )
  }