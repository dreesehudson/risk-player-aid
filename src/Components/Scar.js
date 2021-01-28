import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Scar = (props) => {
    const [scar, setScar] = useState(false)

    return (
        <>
            {
                scar ?
                    <FontAwesomeIcon className='m-2 mt-3 fa-3x' onClick={() => setScar(!scar)} color={props.color} icon={props.icon} />
                    :
                    <FontAwesomeIcon className='m-2 mt-3 fa-3x' onClick={() => setScar(!scar)} color={'grey'} icon={props.icon} />
            }
        </>
    )
}

export default Scar