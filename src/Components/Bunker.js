import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFortAwesomeAlt } from '@fortawesome/free-brands-svg-icons'

const Bunker = (props) => {
    const [test, setTest] = useState({})

    return (
        <>
            {
                test.bunker &&
                    <FontAwesomeIcon className='m-2 mt-3 fa-3x' color={'orange'} icon={faFortAwesomeAlt} />
            }
        </>
    )
}

export default Bunker