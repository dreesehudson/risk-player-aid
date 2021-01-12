import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan } from '@fortawesome/free-solid-svg-icons'

const AmmoShortage = (props) => {
    const [test, setTest] = useState({})

    return (
        <>
            {
                test.ammoShortage &&
                    <FontAwesomeIcon className='m-2 mt-3 fa-2x' color={'red'} icon={faBan} />
            }
        </>
    )
}

export default AmmoShortage