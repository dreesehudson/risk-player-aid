import React, { useState } from 'react'
import { Row, Col, Button, Container } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket } from '@fortawesome/free-solid-svg-icons'

function MissleTracker(props) {
    const [count, setCount] = useState(0)
    return (
        <>
            <Row>
                <Col>
                    <FontAwesomeIcon className='mx-1 mb-2 fa-2x' color='orange' icon={faRocket} />
                    <br />
                    {count >= 15 ?
                        <Button color='secondary' disabled className='btn-sm'>+</Button>
                        :
                        <Button color='secondary' className='btn-sm' onClick={() => setCount(count + 1)} >+</Button>
                    }
                    <h4 className='p-1 m-0'>
                        {count}
                    </h4>
                    {
                        count < 1 ?
                            <Button color='secondary' disabled className='btn-sm'>-</Button>
                            :
                            <Button color='secondary' className='btn-sm' onClick={() => setCount(count - 1)} >-</Button>
                    }
                </Col>
            </Row>
        </>
    )

}

export default MissleTracker