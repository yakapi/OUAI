import { createContext, useState, useEffect } from "react"
import { collection, getDocs , doc, getDoc, setDoc, updateDoc} from 'firebase/firestore/lite';

import {auth, db} from '../firebase-config'


export const ServicesContext = createContext()

export function ServicesContextProvider(props){

  const [servicesLoader, setServicesLoader] = useState(true)
  const [servicesCollection , setServicesCollection] = useState(false)
  const getServicesCollection = async () => {
    const collectionServices = collection(db, 'services')
    const servicesSnapshot = await getDocs(collectionServices)
    const servicesList = servicesSnapshot.docs.map(doc => doc.data())
    return servicesList

  }
  const test = "test"
  return(
    <ServicesContext.Provider value={{servicesLoader, setServicesLoader, getServicesCollection, setServicesCollection, servicesCollection}}>
      {props.children}
    </ServicesContext.Provider>
  )
}
