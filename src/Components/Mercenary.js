import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

const Mercenary = (props) => {
    const [test, setTest] = useState({})

    return (
        <>
            {
                test.mercenary &&
                    <FontAwesomeIcon className='m-2 mt-3 fa-2x' color={'black'} icon={faUserPlus} />

            }
        </>
    )
}

export default Mercenary