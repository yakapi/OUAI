import React , {useContext} from "react"
import uuid from 'react-uuid';

import {ServicesContext} from "../../../context/servicesContext"
import ServicesList from "./services_list"
import ServicesView from "./services_view"

export default function ServicesScreen(){

  const {servicesZone} = useContext(ServicesContext)
  console.log(servicesZone);
  return(
    <div className="services_genre_screen">
      {servicesZone.femme ? <ServicesView type="femme" /> : ""}
      {servicesZone.homme ? <ServicesView type="homme" /> : ""}
      {servicesZone.enfant ? <ServicesView type="enfant" /> : ""}      
    </div>
  )
}
