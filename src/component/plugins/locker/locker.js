import React, {useState} from 'react'

import AddLocker from './addLocker'

export default function LockerPlugin(){
    const [addLocker, setAddLocker] = useState(false)
    
    const showAddLocker = (e)=>{
        setAddLocker(true)
    }

    const closeAddLocker = (e) => {
        setAddLocker(false)
    }

    return(
        <div className="plugin_container">
        <div className="plugin_brik"></div>
        <div className="plugin_box">
        <h2 className="title_plugin">Locker</h2>
        <div className="content_plugin">
            <div className='locker_container'>
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