import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function RedStarTracker() {
    const [clicked, setClicked] = useState(false)

    return (
        <>
            {
                clicked ?
                    <FontAwesomeIcon className='mx-2 fa-2x' color='red' onClick={() => setClicked(!clicked)} icon={faStar} />
                    :
                    <FontAwesomeIcon className='mx-2 fa-2x' onClick={() => setClicked(!clicked)} icon={faStar} />
            }
        </>
    )
}