import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons'

const Die = (props) => {

    return (
        <>
            {
                props.die <= 1 && 
                    <FontAwesomeIcon className='m-2 mt-3 fa-2x' icon={faDiceOne} />            
            }
            {
                props.die === 2 && 
                    <FontAwesomeIcon className='m-2 mt-3 fa-2x' icon={faDiceTwo} />            
            }
            {
                props.die === 3 && 
                    <FontAwesomeIcon className='m-2 mt-3 fa-2x' icon={faDiceThree} />            
            }
            {
                props.die === 4 && 
                    <FontAwesomeIcon className='m-2 mt-3 fa-2x' icon={faDiceFour} />            
            }
            {
                props.die === 5 && 
                    <FontAwesomeIcon className='m-2 mt-3 fa-2x' icon={faDiceFive} />            
            }
            {
                props.die >= 6 && 
                    <FontAwesomeIcon className='m-2 mt-3 fa-2x' icon={faDiceSix} />            
            }
        </>
    )
}

export default Die