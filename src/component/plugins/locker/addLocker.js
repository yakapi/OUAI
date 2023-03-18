import React from 'react'

export default function AddLocker({closeAddLocker}){
    return(
        <div className='add_locker_container'>
            <form className='add_locker_form'>
                <div className='add_locker_zone'>
                    <div className='add_locker_line'>
                        <label htmlFor="add_locker_name">Name : </label>
                        <input type="text" id='add_locker_name' name="add_locker_name" />
                    </div>
                    <div className='add_locker_line'>
                        <label htmlFor="add_locker_url">url image : </label>
                        <input type="text" id='add_locker_url' name="add_locker_url" />
                    </div>
                </div>
                <div className='add_locker_line'>
                    <textarea name="add_locker_area" rows="14" cols="50"></textarea>
                </div>
                <div className='add_locker_btnline'>
                    <input type="submit" id='add_locker_name' className='link_green' name="add_locker_name" />
                    <button onClick={closeAddLocker} className='link_red'>Annuler</button>
                </div>

            </form>
        </div>
    )
}