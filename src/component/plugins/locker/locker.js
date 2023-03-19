import React, {useState, useEffect, useContext} from 'react'
import {LockerContext} from "../../../context/lockerContext"

import AddLocker from './addLocker'

export default function LockerPlugin(){
    function isEmpty(str) {
        return (!str || 0 === str.length);
      }
    const [addLocker, setAddLocker] = useState(false)
    const {getLockerData, setLockerData, lockerData} = useContext(LockerContext)

    const showAddLocker = (e)=>{
        setAddLocker(true)
    }

    const closeAddLocker = (e) => {
        setAddLocker(false)
    }
    const lockerDataFunction = async () => {
        try {
            const cred = await getLockerData()
            console.log(cred);
            setLockerData(cred)
        } catch (error) {
            console.log(error);
        }
    }
    let stateMountLocker = false
    useEffect(()=>{
        if (stateMountLocker) {
            lockerDataFunction()
        }
        stateMountLocker = true

    },[])
    return(
        <div className="plugin_container">
        <div className="plugin_brik"></div>
        <div className="plugin_box">
        <h2 className="title_plugin">Locker</h2>
        <div className="content_plugin">
            <div className='locker_container'>

               
                {isEmpty(lockerData) ? "vide" : 
                    lockerData.map((doc)=>
                    <div key={doc.nom} className='icon_locker add_lck'>
                        <div className='enc_locker'>
                            <img src={doc.url} />
                        </div>
                        <p className='locknom'>{doc.nom} </p>
                    </div>
                    )
                }
                <div onClick={showAddLocker} className='enc_locker add_lck'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/OOjs_UI_icon_add.svg/1024px-OOjs_UI_icon_add.svg.png" />
                </div>

            </div>
            {addLocker ? <AddLocker closeAddLocker={closeAddLocker}/> : ""}
        </div>
        </div>
      </div>
    )
}