
import {ServicesContextProvider} from '../../../context/servicesContext'
import ServicesDisplayer from './services_displayer'

export default function ServicesPlugin(){
  return(
    <ServicesContextProvider>
    <div className="plugin_container">
      <div className="plugin_brik"></div>
      <div className="plugin_box">
      <h2 className="title_plugin">Services</h2>
      <div className="content_plugin">
        <div className="content_box">
          <h2 className="horaire_title">Gestion des services</h2>
            <p className="horaire_instruction">Définnissez les différents services que vous proposez à vos clients</p>
            <div className="services_container">
              <ServicesDisplayer />
            </div>
        </div>
      </div>
      </div>
    </div>
  </ServicesContextProvider>
  )
}
