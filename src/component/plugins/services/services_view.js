import React, {useContext} from 'react'
import {ServicesContext} from '../../../context/servicesContext'


export default function ServicesView({type}){
  const {servicesCollection} = useContext(ServicesContext)
  let selectedClass = "services_screen_choice"
  if (type == "femme") {
    selectedClass = 'services_screen_choice selected_screen_choice'
  }
  let object_type = null
  for (var i = 0; i < servicesCollection.length; i++) {
    if (servicesCollection[i].id == type) {
        object_type = servicesCollection[i]
    }
  }
  console.log(object_type);
  return(
    <div className={selectedClass}>
      <div className="services_ariane">
        <h1>services</h1>
        <p>></p>
        <p className="view_choice">{type}</p>
        <div className="services_list">
        </div>
      </div>
    </div>
  )
}
