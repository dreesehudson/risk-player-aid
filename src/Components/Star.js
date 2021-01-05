import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function RedStarTracker() {
    const [color, setColor] = useState()

    function changeColor(){
        //take current color
        
        //change to opposite color

    }
    
    return (
        <FontAwesomeIcon className='mx-2 fa-2x' color={color} onClick={() => changeColor} icon={faStar} />
    )
}