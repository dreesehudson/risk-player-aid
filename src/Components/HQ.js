import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

const HQ = (props) => {
    const [test, setTest] = useState({})

    return (
        <>
            {
                test.hq &&
                    <FontAwesomeIcon className='m-2 mt-3 fa-2x' color={props.player.color} icon={faUserPlus} />            
            }
        </>
    )
}

export default HQ