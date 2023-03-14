import React, {useContext, useEffect} from 'react'

import {ServicesContext} from '../../../context/servicesContext'

import Loader from '../../loader/loader'
import ServicesWorker from "./services_worker"


export default function ServicesDisplayer(){
  const {servicesLoader, getServicesCollection, setServicesLoader, setServicesCollection} = useContext(ServicesContext)

  const getAllServices = async ()=> {
      try {
        const cred = await getServicesCollection()
        setServicesCollection(cred)
        setServicesLoader(false)
      } catch (e) {

      }
  }
  useEffect(()=>{
    getAllServices()
  },[])
  return(
    <div>
      {servicesLoader ? <div className="services_loader"><Loader/></div> : <ServicesWorker />}
    </div>
  )
}
