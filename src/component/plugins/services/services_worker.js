import React, {useContext} from "react"
import {ServicesContext} from '../../../context/servicesContext'

import ServicesBoard from './services_board'
import ServicesView from './services_view'

export default function ServicesWorker(){

  const  {servicesCollection} = useContext(ServicesContext)

  const view_choice = (e) =>{
    let services_screen = e.target.parentElement.parentElement.children[1]
    console.log(services_screen);
    let type_choice = e.target.innerHTML
    for (var i = 0; i < e.target.parentElement.children.length; i++) {
      if (e.target.parentElement.children[i].classList.contains('selected_genre_choice')) {
        e.target.parentElement.children[i].classList.remove('selected_genre_choice')
      }
    }
    e.target.classList.add('selected_genre_choice')
    for (var i = 0; i < services_screen.children.length; i++) {
      if (services_screen.children[i].classList.contains("selected_screen_choice")) {
        services_screen.children[i].classList.remove('selected_screen_choice')
      }
      console.log();
      if (services_screen.children[i].children[0].children[2].innerHTML == type_choice) {
        services_screen.children[i].classList.add('selected_screen_choice')
      }
    }
  }
  return(
    <div>
      <ServicesBoard viewChoice={view_choice}/>
      <div className="services_genre_screen">
        <ServicesView type="femme" />
          <ServicesView type="homme" />
            <ServicesView type="enfant" />
      </div>
      <div className="flx_right">
        <p className="link_green">Enregister</p>
      </div>
    </div>
  )
}
