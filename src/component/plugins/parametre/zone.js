import React, {useContext, useEffect} from 'react'
import {ParameterContext} from "../../../context/parameterContext"
import Loader from '../../loader/loader'
import ZoneInputList from "./zone_input_list"


export default function Zone(){
  const {setModalTimeState,setModalTimeResult, updateCedexParameter, inputList, setInputList, setLoaderZone ,loaderZone, getZoneCollection} = useContext(ParameterContext)

  const zoneCol = async () => {
    try {
        const cred = await getZoneCollection()
        setLoaderZone(true)
        setInputList(cred)
    } catch (e) {
    }
  }
  const updateCedex = async (objt) => {
    try {

    } catch (e) {
      console.log('erreur update cedex');
    }
  }
  const saveCedex = (e) => {
    console.log('saveCedex');
    setModalTimeState(true)

    // console.log(e.target.parentElement.parentElement.children[2]);
    let inTimeSimple = e.target.parentElement.parentElement.children[2].children[0].querySelectorAll('.zi_list_line')
    let inTimeAdvanced = e.target.parentElement.parentElement.children[2].children[1].querySelectorAll('.zi_list_line')
    // console.log(inTimeAdvanced.querySelectorAll('.zi_list_line'));
    let constructCedexAdvanced = []
    let constructCedexSimple = []
    for (var i = 1; i < inTimeAdvanced.length; i++) {
      function isEmpty(str) {
        return (!str || 0 === str.length);
      }
      if (!isEmpty(inTimeAdvanced[i].children[0].value)) {
        let objectCedex = {
          name: inTimeAdvanced[i].children[1].value,
          cedex: inTimeAdvanced[i].children[0].value
        }
        constructCedexAdvanced.push(objectCedex)
      }
    }
    for (var i = 1; i < inTimeSimple.length; i++) {
      function isEmpty(str) {
        return (!str || 0 === str.length);
      }
      if (!isEmpty(inTimeSimple[i].children[0].value)) {
        let objectCedex = {
          name: inTimeSimple[i].children[1].value,
          cedex: inTimeSimple[i].children[0].value
        }
        constructCedexSimple.push(objectCedex)
      }
    }

    let constructCedexSaver = []
    constructCedexSaver.push(inputList[0])
    constructCedexSaver.push(inputList[1])
    constructCedexSaver[0].inputs_data = constructCedexAdvanced
    constructCedexSaver[1].inputs_data = constructCedexSimple
    console.log(constructCedexSaver);
    try {
      updateCedexParameter(constructCedexSaver)
      setModalTimeResult("Paramêtre Enregister")
    } catch (e) {
      setModalTimeResult("Erreur")
    }
    }

  const addInputCedex = (e) => {
    // console.log(inputList);
    // console.log(e.target.parentElement.children[0].value)

    let cedexType = ''
    let reverseCedexType = ''
    let intime_inputsdata = []
    if (e.target.parentElement.children[0].value != undefined) {
      if (e.target.parentElement.children[0].value == "simple") {
        let ziline = e.target.parentElement.parentElement.parentElement.children[1].querySelectorAll('.zi_list_line')
        for (var i = 1; i < ziline.length; i++) {
          let ziline_object = {
            cedex: ziline[i].children[0].value,
            name: ziline[i].children[1].value
          }
          intime_inputsdata.push(ziline_object)
        }

        let array_fx = []
        let array_reverse = []
        array_fx.push(inputList[1])
        cedexType = array_fx[0]
        array_reverse.push(inputList[0])
        reverseCedexType = array_reverse[0]
      }else {
        let ziline = e.target.parentElement.parentElement.parentElement.children[1].querySelectorAll('.zi_list_line')
        for (var i = 1; i < ziline.length; i++) {
          let ziline_object = {
            cedex: ziline[i].children[0].value,
            name: ziline[i].children[1].value
          }
          intime_inputsdata.push(ziline_object)
        }
        let array_fx = []
        let array_reverse = []
        array_fx.push(inputList[0])
        cedexType = array_fx[0]
        array_reverse.push(inputList[1])
        reverseCedexType = array_reverse[0]
      }
      // console.log(cedexType);
      console.log('HERRRERERERE');
      console.log(cedexType.inputs_data);
      console.log(intime_inputsdata);
      cedexType.inputs_data = intime_inputsdata
      let newCedex = {"cedex": null, "name": null}
      cedexType.inputs_data.push(newCedex)
      // console.log(cedexType);
      let constructCedex = []
      console.log(cedexType);
      if (e.target.parentElement.children[0].value == "simple") {
        constructCedex.push(reverseCedexType)
        constructCedex.push(cedexType)
      }else {
        constructCedex.push(cedexType)
        constructCedex.push(reverseCedexType)
      }
      setInputList(constructCedex)
    }

  }
  useEffect(()=>{
    zoneCol()
  },[])
  return(
    <div>
      <h2 className="horaire_title">Zone de chalendise</h2>
      <p className="horaire_instruction">Définissez les territoires et/ou zones d'exercices</p>
      <div className="zone_container">
        <div className="cedex_box">
          <div className="cedex_title">
            <h3>Cedex Simple :</h3>
            <p>zone large , cedex à 2 chiffres <span>(ex: 90 T.Belfort)</span></p>
          </div>
          <div className="input_zone">
            {loaderZone ? <ZoneInputList etat="simple"/> : <div className="input_zone_loader"><Loader/></div>}
          </div>
          <div className="add_input_zone">
            <div onClick={addInputCedex} className="add_input_button">
              <input type="hidden" value="simple" />
              <p>+</p>
            </div>
          </div>
        </div>
        <div className="cedex_box">
          <div className="cedex_title">
            <h3>Cedex Composé :</h3>
            <p>zone ciblé , cedex à 5 chiffres <span>(ex: 90300 Offemont)</span></p>
          </div>
          <div className="input_zone">
          {loaderZone ? <ZoneInputList etat="advanced"/> : <div className="input_zone_loader"><Loader/></div>}
          </div>
          <div className="add_input_zone">
            <div onClick={addInputCedex} className="add_input_button">
              <input type="hidden" value="advanced" />
              <p>+</p>
            </div>
          </div>
        </div>
      </div>
      <div className="timeline_saver">
      <p onClick={saveCedex} className="link_green">Enregistrer</p>
      </div>
    </div>
  )
}
