import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBiohazard } from '@fortawesome/free-solid-svg-icons'

const BioHazard = (props) => {
    const [test, setTest] = useState({})

    return (
        <>
            {
                test.bioHazard &&
                    <FontAwesomeIcon className='m-2 mt-3 fa-2x' color={'green'} icon={faBiohazard} />
            }
        </>
    )
}

export default BioHazard